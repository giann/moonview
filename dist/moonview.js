var moonview =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(24);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert  = __webpack_require__(0);
const luaconf = __webpack_require__(10);

// To avoid charCodeAt everywhere
const char = [];
for (let i = 0; i < 127; i++)
    char[String.fromCharCode(i)] = i;
module.exports.char = char;

/* mark for precompiled code ('<esc>Lua') */
const LUA_SIGNATURE           = "\x1bLua";

const LUA_VERSION_MAJOR       = "5";
const LUA_VERSION_MINOR       = "3";
const LUA_VERSION_NUM         = 503;
const LUA_VERSION_RELEASE     = "4";

const LUA_VERSION             = "Lua " + LUA_VERSION_MAJOR + "." + LUA_VERSION_MINOR;
const LUA_RELEASE             = LUA_VERSION + "." + LUA_VERSION_RELEASE;
const LUA_COPYRIGHT           = LUA_RELEASE + "  Copyright (C) 1994-2017 Lua.org, PUC-Rio";
const LUA_AUTHORS             = "R. Ierusalimschy, L. H. de Figueiredo, W. Celes";

const FENGARI_VERSION_MAJOR   = "0";
const FENGARI_VERSION_MINOR   = "0";
const FENGARI_VERSION_NUM     = 1;
const FENGARI_VERSION_RELEASE = "1";

const FENGARI_VERSION         = "Fengari " + FENGARI_VERSION_MAJOR + "." + FENGARI_VERSION_MINOR;
const FENGARI_RELEASE         = FENGARI_VERSION + "." + FENGARI_VERSION_RELEASE;
const FENGARI_AUTHORS         = "B. Giannangeli, Daurnimator";
const FENGARI_COPYRIGHT       = FENGARI_RELEASE + "  Copyright (C) 2017 " + FENGARI_AUTHORS + "\nBased on: " + LUA_COPYRIGHT;

const LUA_VERSUFFIX           = "_" + LUA_VERSION_MAJOR + "_" + LUA_VERSION_MINOR;

const LUA_INIT_VAR            = "LUA_INIT";
const LUA_INITVARVERSION      = LUA_INIT_VAR + LUA_VERSUFFIX;

const thread_status = {
    LUA_OK:        0,
    LUA_YIELD:     1,
    LUA_ERRRUN:    2,
    LUA_ERRSYNTAX: 3,
    LUA_ERRMEM:    4,
    LUA_ERRGCMM:   5,
    LUA_ERRERR:    6
};

const constant_types = {
    LUA_TNONE:          -1,
    LUA_TNIL:           0,
    LUA_TBOOLEAN:       1,
    LUA_TLIGHTUSERDATA: 2,
    LUA_TNUMBER:        3,
    LUA_TSTRING:        4,
    LUA_TTABLE:         5,
    LUA_TFUNCTION:      6,
    LUA_TUSERDATA:      7,
    LUA_TTHREAD:        8,
    LUA_NUMTAGS:        9
};

constant_types.LUA_TSHRSTR = constant_types.LUA_TSTRING | (0 << 4);  /* short strings */
constant_types.LUA_TLNGSTR = constant_types.LUA_TSTRING | (1 << 4);  /* long strings */

constant_types.LUA_TNUMFLT = constant_types.LUA_TNUMBER | (0 << 4);  /* float numbers */
constant_types.LUA_TNUMINT = constant_types.LUA_TNUMBER | (1 << 4);  /* integer numbers */

constant_types.LUA_TLCL = constant_types.LUA_TFUNCTION | (0 << 4);  /* Lua closure */
constant_types.LUA_TLCF = constant_types.LUA_TFUNCTION | (1 << 4);  /* light C function */
constant_types.LUA_TCCL = constant_types.LUA_TFUNCTION | (2 << 4);  /* C closure */

const CT = constant_types;

/*
** Comparison and arithmetic functions
*/

const LUA_OPADD  = 0;   /* ORDER TM, ORDER OP */
const LUA_OPSUB  = 1;
const LUA_OPMUL  = 2;
const LUA_OPMOD  = 3;
const LUA_OPPOW  = 4;
const LUA_OPDIV  = 5;
const LUA_OPIDIV = 6;
const LUA_OPBAND = 7;
const LUA_OPBOR  = 8;
const LUA_OPBXOR = 9;
const LUA_OPSHL  = 10;
const LUA_OPSHR  = 11;
const LUA_OPUNM  = 12;
const LUA_OPBNOT = 13;

const LUA_OPEQ = 0;
const LUA_OPLT = 1;
const LUA_OPLE = 2;

const LUA_MINSTACK = 20;

const LUA_REGISTRYINDEX = -luaconf.LUAI_MAXSTACK - 1000;

const lua_upvalueindex = function(i) {
    return LUA_REGISTRYINDEX - i;
};

/* predefined values in the registry */
const LUA_RIDX_MAINTHREAD = 1;
const LUA_RIDX_GLOBALS    = 2;
const LUA_RIDX_LAST       = LUA_RIDX_GLOBALS;

class lua_Debug {

    constructor() {
        this.event = NaN;
        this.name = null;           /* (n) */
        this.namewhat = null;       /* (n) 'global', 'local', 'field', 'method' */
        this.what = null;           /* (S) 'Lua', 'C', 'main', 'tail' */
        this.source = null;         /* (S) */
        this.currentline = NaN;     /* (l) */
        this.linedefined = NaN;     /* (S) */
        this.lastlinedefined = NaN; /* (S) */
        this.nups = NaN;            /* (u) number of upvalues */
        this.nparams = NaN;         /* (u) number of parameters */
        this.isvararg = NaN;        /* (u) */
        this.istailcall = NaN;      /* (t) */
        this.short_src = null;      /* (S) */
        /* private part */
        this.i_ci = null;           /* active function */
    }

}

const is_luastring = function(s) {
    return Array.isArray(s);
};

const to_jsstring = function(value, from, to) {
    assert(is_luastring(value), "jsstring expect a array of bytes");

    let u0, u1, u2, u3, u4, u5;
    let idx = 0;
    value = value.slice(from ? from : 0, to);

    var str = '';
    while (1) {
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
        u0 = value[idx++];
        if (u0 === 0) { str += "\0"; continue; } // Lua string embed '\0'
        if (!u0) return str;
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        u1 = value[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        u2 = value[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
            u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
            u3 = value[idx++] & 63;
            if ((u0 & 0xF8) == 0xF0) {
                u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
            } else {
                u4 = value[idx++] & 63;
                if ((u0 & 0xFC) == 0xF8) {
                    u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
                } else {
                    u5 = value[idx++] & 63;
                    u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
                }
            }
        }
        if (u0 < 0x10000) {
            str += String.fromCharCode(u0);
        } else {
            var ch = u0 - 0x10000;
            str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
    }
};

const to_luastring_cache = {};

const to_luastring = function(str, cache) {
    assert(typeof str === "string", "to_luastring expect a js string");

    if (cache) {
        let cached = to_luastring_cache[str];
        if (is_luastring(cached)) return cached;
    }

    let outU8Array = [];
    let outIdx = 0;
    for (let i = 0; i < str.length; ++i) {
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
        let u = str.codePointAt(i);
        if (u >= 0xD800) i++; // If it was a surrogate pair it used up two bytes
        if (u <= 0x7F) {
            outU8Array[outIdx++] = u;
        } else if (u <= 0x7FF) {
            outU8Array[outIdx++] = 0xC0 | (u >> 6);
            outU8Array[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
            outU8Array[outIdx++] = 0xE0 | (u >> 12);
            outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
            outU8Array[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0x1FFFFF) {
            outU8Array[outIdx++] = 0xF0 | (u >> 18);
            outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
            outU8Array[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0x3FFFFFF) {
            outU8Array[outIdx++] = 0xF8 | (u >> 24);
            outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
            outU8Array[outIdx++] = 0x80 | (u & 63);
        } else {
            outU8Array[outIdx++] = 0xFC | (u >> 30);
            outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
            outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
            outU8Array[outIdx++] = 0x80 | (u & 63);
        }
    }
    // Null-terminate the pointer to the buffer.
    // outU8Array[outIdx] = 0;

    if (cache) to_luastring_cache[str] = outU8Array;
    return outU8Array;
};

/*
** Event codes
*/
const LUA_HOOKCALL     = 0;
const LUA_HOOKRET      = 1;
const LUA_HOOKLINE     = 2;
const LUA_HOOKCOUNT    = 3;
const LUA_HOOKTAILCALL = 4;


/*
** Event masks
*/
const LUA_MASKCALL  = (1 << LUA_HOOKCALL);
const LUA_MASKRET   = (1 << LUA_HOOKRET);
const LUA_MASKLINE  = (1 << LUA_HOOKLINE);
const LUA_MASKCOUNT = (1 << LUA_HOOKCOUNT);

/*
** LUA_PATH_SEP is the character that separates templates in a path.
** LUA_PATH_MARK is the string that marks the substitution points in a
** template.
** LUA_EXEC_DIR in a Windows path is replaced by the executable's
** directory.
*/
const LUA_PATH_SEP  = ";";
module.exports.LUA_PATH_SEP = LUA_PATH_SEP;

const LUA_PATH_MARK = "?";
module.exports.LUA_PATH_MARK = LUA_PATH_MARK;

const LUA_EXEC_DIR  = "!";
module.exports.LUA_EXEC_DIR = LUA_EXEC_DIR;


/*
@@ LUA_PATH_DEFAULT is the default path that Lua uses to look for
** Lua libraries.
@@ LUA_CPATH_DEFAULT is the default path that Lua uses to look for
** C libraries.
** CHANGE them if your machine has a non-conventional directory
** hierarchy or if you want to install your libraries in
** non-conventional directories.
*/
const LUA_VDIR = LUA_VERSION_MAJOR + "." + LUA_VERSION_MINOR;
module.exports.LUA_VDIR = LUA_VDIR;

if (true) {
    const LUA_DIRSEP = "/";
    module.exports.LUA_DIRSEP = LUA_DIRSEP;

    const LUA_LDIR = "./lua/" + LUA_VDIR + "/";
    module.exports.LUA_LDIR = LUA_LDIR;

    const LUA_CDIR = "./lua/" + LUA_VDIR + "/";
    module.exports.LUA_CDIR = LUA_CDIR;

    const LUA_PATH_DEFAULT = "?.lua;?/init.lua";
    module.exports.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

    const LUA_CPATH_DEFAULT = "?.js;loadall.js";
    module.exports.LUA_CPATH_DEFAULT = LUA_CPATH_DEFAULT;
} else if (require('os').platform() === 'win32') {
    const LUA_DIRSEP = "\\";
    module.exports.LUA_DIRSEP = LUA_DIRSEP;

    /*
    ** In Windows, any exclamation mark ('!') in the path is replaced by the
    ** path of the directory of the executable file of the current process.
    */
    const LUA_LDIR = "!\\lua\\";
    module.exports.LUA_LDIR = LUA_LDIR;

    const LUA_CDIR = "!\\";
    module.exports.LUA_CDIR = LUA_CDIR;

    const LUA_SHRDIR = "!\\..\\share\\lua\\" + LUA_VDIR + "\\";
    module.exports.LUA_SHRDIR = LUA_SHRDIR;

    const LUA_PATH_DEFAULT =
        LUA_LDIR + "?.lua;" + LUA_LDIR + "?\\init.lua;" +
        LUA_CDIR + "?.lua;" + LUA_CDIR + "?\\init.lua;" +
        LUA_SHRDIR + "?.lua;" + LUA_SHRDIR + "?\\init.lua;" +
        ".\\?.lua;.\\?\\init.lua";
    module.exports.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

    const LUA_CPATH_DEFAULT =
        LUA_CDIR + "?.dll;" +
        LUA_CDIR + "..\\lib\\lua\\" + LUA_VDIR + "\\?.dll;" +
        LUA_CDIR + "loadall.dll;.\\?.dll";
    module.exports.LUA_CPATH_DEFAULT = LUA_CPATH_DEFAULT;
} else {
    const LUA_DIRSEP = "/";
    module.exports.LUA_DIRSEP = LUA_DIRSEP;

    const LUA_ROOT = "/usr/local/";
    module.exports.LUA_ROOT = LUA_ROOT;

    const LUA_LDIR = LUA_ROOT + "share/lua/" + LUA_VDIR + "/";
    module.exports.LUA_LDIR = LUA_LDIR;

    const LUA_CDIR = LUA_ROOT + "lib/lua/" + LUA_VDIR + "/";
    module.exports.LUA_CDIR = LUA_CDIR;

    const LUA_PATH_DEFAULT =
        LUA_LDIR + "?.lua;" + LUA_LDIR + "?/init.lua;" +
        LUA_CDIR + "?.lua;" + LUA_CDIR + "?/init.lua;" +
        "./?.lua;./?/init.lua";
    module.exports.LUA_PATH_DEFAULT = LUA_PATH_DEFAULT;

    const LUA_CPATH_DEFAULT =
        LUA_CDIR + "?.so;" + LUA_CDIR + "loadall.so;./?.so";
    module.exports.LUA_CPATH_DEFAULT = LUA_CPATH_DEFAULT;
}

module.exports.CT                      = CT;
module.exports.FENGARI_AUTHORS         = FENGARI_AUTHORS;
module.exports.FENGARI_COPYRIGHT       = FENGARI_COPYRIGHT;
module.exports.FENGARI_RELEASE         = FENGARI_RELEASE;
module.exports.FENGARI_VERSION         = FENGARI_VERSION;
module.exports.FENGARI_VERSION_MAJOR   = FENGARI_VERSION_MAJOR;
module.exports.FENGARI_VERSION_MINOR   = FENGARI_VERSION_MINOR;
module.exports.FENGARI_VERSION_NUM     = FENGARI_VERSION_NUM;
module.exports.FENGARI_VERSION_RELEASE = FENGARI_VERSION_RELEASE;
module.exports.LUA_AUTHORS             = LUA_AUTHORS;
module.exports.LUA_COPYRIGHT           = LUA_COPYRIGHT;
module.exports.LUA_HOOKCALL            = LUA_HOOKCALL;
module.exports.LUA_HOOKCOUNT           = LUA_HOOKCOUNT;
module.exports.LUA_HOOKLINE            = LUA_HOOKLINE;
module.exports.LUA_HOOKRET             = LUA_HOOKRET;
module.exports.LUA_HOOKTAILCALL        = LUA_HOOKTAILCALL;
module.exports.LUA_INITVARVERSION      = LUA_INITVARVERSION;
module.exports.LUA_INIT_VAR            = LUA_INIT_VAR;
module.exports.LUA_MASKCALL            = LUA_MASKCALL;
module.exports.LUA_MASKCOUNT           = LUA_MASKCOUNT;
module.exports.LUA_MASKLINE            = LUA_MASKLINE;
module.exports.LUA_MASKRET             = LUA_MASKRET;
module.exports.LUA_MINSTACK            = LUA_MINSTACK;
module.exports.LUA_MULTRET             = -1;
module.exports.LUA_OPADD               = LUA_OPADD;
module.exports.LUA_OPBAND              = LUA_OPBAND;
module.exports.LUA_OPBNOT              = LUA_OPBNOT;
module.exports.LUA_OPBOR               = LUA_OPBOR;
module.exports.LUA_OPBXOR              = LUA_OPBXOR;
module.exports.LUA_OPDIV               = LUA_OPDIV;
module.exports.LUA_OPEQ                = LUA_OPEQ;
module.exports.LUA_OPIDIV              = LUA_OPIDIV;
module.exports.LUA_OPLE                = LUA_OPLE;
module.exports.LUA_OPLT                = LUA_OPLT;
module.exports.LUA_OPMOD               = LUA_OPMOD;
module.exports.LUA_OPMUL               = LUA_OPMUL;
module.exports.LUA_OPPOW               = LUA_OPPOW;
module.exports.LUA_OPSHL               = LUA_OPSHL;
module.exports.LUA_OPSHR               = LUA_OPSHR;
module.exports.LUA_OPSUB               = LUA_OPSUB;
module.exports.LUA_OPUNM               = LUA_OPUNM;
module.exports.LUA_REGISTRYINDEX       = LUA_REGISTRYINDEX;
module.exports.LUA_RELEASE             = LUA_RELEASE;
module.exports.LUA_RIDX_GLOBALS        = LUA_RIDX_GLOBALS;
module.exports.LUA_RIDX_LAST           = LUA_RIDX_LAST;
module.exports.LUA_RIDX_MAINTHREAD     = LUA_RIDX_MAINTHREAD;
module.exports.LUA_SIGNATURE           = LUA_SIGNATURE;
module.exports.LUA_VERSION             = LUA_VERSION;
module.exports.LUA_VERSION_MAJOR       = LUA_VERSION_MAJOR;
module.exports.LUA_VERSION_MINOR       = LUA_VERSION_MINOR;
module.exports.LUA_VERSION_NUM         = LUA_VERSION_NUM;
module.exports.LUA_VERSION_RELEASE     = LUA_VERSION_RELEASE;
module.exports.LUA_VERSUFFIX           = LUA_VERSUFFIX;
module.exports.constant_types          = constant_types;
module.exports.lua_Debug               = lua_Debug;
module.exports.lua_upvalueindex        = lua_upvalueindex;
module.exports.thread_status           = thread_status;
module.exports.is_luastring            = is_luastring;
module.exports.to_jsstring             = to_jsstring;
module.exports.to_luastring            = to_luastring;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const defs   = __webpack_require__(1);
const lapi   = __webpack_require__(22);
const ldebug = __webpack_require__(11);
const ldo    = __webpack_require__(7);
const lstate = __webpack_require__(13);

module.exports.FENGARI_AUTHORS         = defs.FENGARI_AUTHORS;
module.exports.FENGARI_COPYRIGHT       = defs.FENGARI_COPYRIGHT;
module.exports.FENGARI_RELEASE         = defs.FENGARI_RELEASE;
module.exports.FENGARI_VERSION         = defs.FENGARI_VERSION;
module.exports.FENGARI_VERSION_MAJOR   = defs.FENGARI_VERSION_MAJOR;
module.exports.FENGARI_VERSION_MINOR   = defs.FENGARI_VERSION_MINOR;
module.exports.FENGARI_VERSION_NUM     = defs.FENGARI_VERSION_NUM;
module.exports.FENGARI_VERSION_RELEASE = defs.FENGARI_VERSION_RELEASE;
module.exports.LUA_AUTHORS             = defs.LUA_AUTHORS;
module.exports.LUA_COPYRIGHT           = defs.LUA_COPYRIGHT;
module.exports.LUA_ERRERR              = defs.thread_status.LUA_ERRERR;
module.exports.LUA_ERRGCMM             = defs.thread_status.LUA_ERRGCMM;
module.exports.LUA_ERRMEM              = defs.thread_status.LUA_ERRMEM;
module.exports.LUA_ERRRUN              = defs.thread_status.LUA_ERRRUN;
module.exports.LUA_ERRSYNTAX           = defs.thread_status.LUA_ERRSYNTAX;
module.exports.LUA_HOOKCALL            = defs.LUA_HOOKCALL;
module.exports.LUA_HOOKCOUNT           = defs.LUA_HOOKCOUNT;
module.exports.LUA_HOOKLINE            = defs.LUA_HOOKLINE;
module.exports.LUA_HOOKRET             = defs.LUA_HOOKRET;
module.exports.LUA_HOOKTAILCALL        = defs.LUA_HOOKTAILCALL;
module.exports.LUA_INITVARVERSION      = defs.LUA_INITVARVERSION;
module.exports.LUA_INIT_VAR            = defs.LUA_INIT_VAR;
module.exports.LUA_MASKCALL            = defs.LUA_MASKCALL;
module.exports.LUA_MASKCOUNT           = defs.LUA_MASKCOUNT;
module.exports.LUA_MASKLINE            = defs.LUA_MASKLINE;
module.exports.LUA_MASKRET             = defs.LUA_MASKRET;
module.exports.LUA_MINSTACK            = defs.LUA_MINSTACK;
module.exports.LUA_MULTRET             = defs.LUA_MULTRET;
module.exports.LUA_NUMTAGS             = defs.LUA_NUMTAGS;
module.exports.LUA_OK                  = defs.thread_status.LUA_OK;
module.exports.LUA_OPADD               = defs.LUA_OPADD;
module.exports.LUA_OPBAND              = defs.LUA_OPBAND;
module.exports.LUA_OPBNOT              = defs.LUA_OPBNOT;
module.exports.LUA_OPBOR               = defs.LUA_OPBOR;
module.exports.LUA_OPBXOR              = defs.LUA_OPBXOR;
module.exports.LUA_OPDIV               = defs.LUA_OPDIV;
module.exports.LUA_OPEQ                = defs.LUA_OPEQ;
module.exports.LUA_OPIDIV              = defs.LUA_OPIDIV;
module.exports.LUA_OPLE                = defs.LUA_OPLE;
module.exports.LUA_OPLT                = defs.LUA_OPLT;
module.exports.LUA_OPMOD               = defs.LUA_OPMOD;
module.exports.LUA_OPMUL               = defs.LUA_OPMUL;
module.exports.LUA_OPPOW               = defs.LUA_OPPOW;
module.exports.LUA_OPSHL               = defs.LUA_OPSHL;
module.exports.LUA_OPSHR               = defs.LUA_OPSHR;
module.exports.LUA_OPSUB               = defs.LUA_OPSUB;
module.exports.LUA_OPUNM               = defs.LUA_OPUNM;
module.exports.LUA_REGISTRYINDEX       = defs.LUA_REGISTRYINDEX;
module.exports.LUA_RELEASE             = defs.LUA_RELEASE;
module.exports.LUA_RIDX_GLOBALS        = defs.LUA_RIDX_GLOBALS;
module.exports.LUA_RIDX_LAST           = defs.LUA_RIDX_LAST;
module.exports.LUA_RIDX_MAINTHREAD     = defs.LUA_RIDX_MAINTHREAD;
module.exports.LUA_SIGNATURE           = defs.LUA_SIGNATURE;
module.exports.LUA_TNONE               = defs.CT.LUA_TNONE;
module.exports.LUA_TNIL                = defs.CT.LUA_TNIL;
module.exports.LUA_TBOOLEAN            = defs.CT.LUA_TBOOLEAN;
module.exports.LUA_TLIGHTUSERDATA      = defs.CT.LUA_TLIGHTUSERDATA;
module.exports.LUA_TNUMBER             = defs.CT.LUA_TNUMBER;
module.exports.LUA_TSTRING             = defs.CT.LUA_TSTRING;
module.exports.LUA_TTABLE              = defs.CT.LUA_TTABLE;
module.exports.LUA_TFUNCTION           = defs.CT.LUA_TFUNCTION;
module.exports.LUA_TUSERDATA           = defs.CT.LUA_TUSERDATA;
module.exports.LUA_TTHREAD             = defs.CT.LUA_TTHREAD;
module.exports.LUA_VERSION             = defs.LUA_VERSION;
module.exports.LUA_VERSION_MAJOR       = defs.LUA_VERSION_MAJOR;
module.exports.LUA_VERSION_MINOR       = defs.LUA_VERSION_MINOR;
module.exports.LUA_VERSION_NUM         = defs.LUA_VERSION_NUM;
module.exports.LUA_VERSION_RELEASE     = defs.LUA_VERSION_RELEASE;
module.exports.LUA_VERSUFFIX           = defs.LUA_VERSUFFIX;
module.exports.LUA_YIELD               = defs.thread_status.LUA_YIELD;
module.exports.lua_Debug               = defs.lua_Debug;
module.exports.lua_upvalueindex        = defs.lua_upvalueindex;
module.exports.to_jsstring             = defs.to_jsstring;
module.exports.to_luastring            = defs.to_luastring;
module.exports.LUA_CDIR                = defs.LUA_CDIR;
module.exports.LUA_CPATH_DEFAULT       = defs.LUA_CPATH_DEFAULT;
module.exports.LUA_EXEC_DIR            = defs.LUA_EXEC_DIR;
module.exports.LUA_LDIR                = defs.LUA_LDIR;
module.exports.LUA_PATH_DEFAULT        = defs.LUA_PATH_DEFAULT;
module.exports.LUA_PATH_MARK           = defs.LUA_PATH_MARK;
module.exports.LUA_PATH_SEP            = defs.LUA_PATH_SEP;
module.exports.LUA_ROOT                = defs.LUA_ROOT;
module.exports.LUA_SHRDIR              = defs.LUA_SHRDIR;
module.exports.LUA_VDIR                = defs.LUA_VDIR;
module.exports.LUA_DIRSEP              = defs.LUA_DIRSEP;
module.exports.lua_absindex            = lapi.lua_absindex;
module.exports.lua_arith               = lapi.lua_arith;
module.exports.lua_atpanic             = lapi.lua_atpanic;
module.exports.lua_atnativeerror       = lapi.lua_atnativeerror;
module.exports.lua_call                = lapi.lua_call;
module.exports.lua_callk               = lapi.lua_callk;
module.exports.lua_checkstack          = lapi.lua_checkstack;
module.exports.lua_close               = lstate.lua_close;
module.exports.lua_compare             = lapi.lua_compare;
module.exports.lua_concat              = lapi.lua_concat;
module.exports.lua_copy                = lapi.lua_copy;
module.exports.lua_createtable         = lapi.lua_createtable;
module.exports.lua_dump                = lapi.lua_dump;
module.exports.lua_error               = lapi.lua_error;
module.exports.lua_gc                  = lapi.lua_gc;
module.exports.lua_getallocf           = lapi.lua_getallocf;
module.exports.lua_getextraspace       = lapi.lua_getextraspace;
module.exports.lua_getfield            = lapi.lua_getfield;
module.exports.lua_getglobal           = lapi.lua_getglobal;
module.exports.lua_gethook             = ldebug.lua_gethook;
module.exports.lua_gethookcount        = ldebug.lua_gethookcount;
module.exports.lua_gethookmask         = ldebug.lua_gethookmask;
module.exports.lua_geti                = lapi.lua_geti;
module.exports.lua_getinfo             = ldebug.lua_getinfo;
module.exports.lua_getlocal            = ldebug.lua_getlocal;
module.exports.lua_getmetatable        = lapi.lua_getmetatable;
module.exports.lua_getstack            = ldebug.lua_getstack;
module.exports.lua_gettable            = lapi.lua_gettable;
module.exports.lua_gettop              = lapi.lua_gettop;
module.exports.lua_getupvalue          = lapi.lua_getupvalue;
module.exports.lua_getuservalue        = lapi.lua_getuservalue;
module.exports.lua_insert              = lapi.lua_insert;
module.exports.lua_isboolean           = lapi.lua_isboolean;
module.exports.lua_iscfunction         = lapi.lua_iscfunction;
module.exports.lua_isfunction          = lapi.lua_isfunction;
module.exports.lua_isinteger           = lapi.lua_isinteger;
module.exports.lua_islightuserdata     = lapi.lua_islightuserdata;
module.exports.lua_isnil               = lapi.lua_isnil;
module.exports.lua_isnone              = lapi.lua_isnone;
module.exports.lua_isnoneornil         = lapi.lua_isnoneornil;
module.exports.lua_isnumber            = lapi.lua_isnumber;
module.exports.lua_isproxy             = lapi.lua_isproxy;
module.exports.lua_isstring            = lapi.lua_isstring;
module.exports.lua_istable             = lapi.lua_istable;
module.exports.lua_isthread            = lapi.lua_isthread;
module.exports.lua_isuserdata          = lapi.lua_isuserdata;
module.exports.lua_isyieldable         = ldo.lua_isyieldable;
module.exports.lua_len                 = lapi.lua_len;
module.exports.lua_load                = lapi.lua_load;
module.exports.lua_newstate            = lstate.lua_newstate;
module.exports.lua_newtable            = lapi.lua_newtable;
module.exports.lua_newthread           = lstate.lua_newthread;
module.exports.lua_newuserdata         = lapi.lua_newuserdata;
module.exports.lua_next                = lapi.lua_next;
module.exports.lua_pcall               = lapi.lua_pcall;
module.exports.lua_pcallk              = lapi.lua_pcallk;
module.exports.lua_pop                 = lapi.lua_pop;
module.exports.lua_pushboolean         = lapi.lua_pushboolean;
module.exports.lua_pushcclosure        = lapi.lua_pushcclosure;
module.exports.lua_pushcfunction       = lapi.lua_pushcfunction;
module.exports.lua_pushfstring         = lapi.lua_pushfstring;
module.exports.lua_pushglobaltable     = lapi.lua_pushglobaltable;
module.exports.lua_pushinteger         = lapi.lua_pushinteger;
module.exports.lua_pushjsclosure       = lapi.lua_pushjsclosure;
module.exports.lua_pushjsfunction      = lapi.lua_pushjsfunction;
module.exports.lua_pushlightuserdata   = lapi.lua_pushlightuserdata;
module.exports.lua_pushliteral         = lapi.lua_pushliteral;
module.exports.lua_pushlstring         = lapi.lua_pushlstring;
module.exports.lua_pushnil             = lapi.lua_pushnil;
module.exports.lua_pushnumber          = lapi.lua_pushnumber;
module.exports.lua_pushstring          = lapi.lua_pushstring;
module.exports.lua_pushthread          = lapi.lua_pushthread;
module.exports.lua_pushvalue           = lapi.lua_pushvalue;
module.exports.lua_pushvfstring        = lapi.lua_pushvfstring;
module.exports.lua_rawequal            = lapi.lua_rawequal;
module.exports.lua_rawget              = lapi.lua_rawget;
module.exports.lua_rawgeti             = lapi.lua_rawgeti;
module.exports.lua_rawgetp             = lapi.lua_rawgetp;
module.exports.lua_rawlen              = lapi.lua_rawlen;
module.exports.lua_rawset              = lapi.lua_rawset;
module.exports.lua_rawseti             = lapi.lua_rawseti;
module.exports.lua_rawsetp             = lapi.lua_rawsetp;
module.exports.lua_register            = lapi.lua_register;
module.exports.lua_remove              = lapi.lua_remove;
module.exports.lua_replace             = lapi.lua_replace;
module.exports.lua_resume              = ldo.lua_resume;
module.exports.lua_rotate              = lapi.lua_rotate;
module.exports.lua_setallof            = ldo.lua_setallof;
module.exports.lua_setfield            = lapi.lua_setfield;
module.exports.lua_setglobal           = lapi.lua_setglobal;
module.exports.lua_sethook             = ldebug.lua_sethook;
module.exports.lua_seti                = lapi.lua_seti;
module.exports.lua_setlocal            = ldebug.lua_setlocal;
module.exports.lua_setmetatable        = lapi.lua_setmetatable;
module.exports.lua_settable            = lapi.lua_settable;
module.exports.lua_settop              = lapi.lua_settop;
module.exports.lua_setupvalue          = lapi.lua_setupvalue;
module.exports.lua_setuservalue        = lapi.lua_setuservalue;
module.exports.lua_status              = lapi.lua_status;
module.exports.lua_stringtonumber      = lapi.lua_stringtonumber;
module.exports.lua_toboolean           = lapi.lua_toboolean;
module.exports.lua_todataview          = lapi.lua_todataview;
module.exports.lua_tointeger           = lapi.lua_tointeger;
module.exports.lua_tointegerx          = lapi.lua_tointegerx;
module.exports.lua_tojsstring          = lapi.lua_tojsstring;
module.exports.lua_toljsstring         = lapi.lua_toljsstring;
module.exports.lua_tolstring           = lapi.lua_tolstring;
module.exports.lua_tonumber            = lapi.lua_tonumber;
module.exports.lua_tonumberx           = lapi.lua_tonumberx;
module.exports.lua_topointer           = lapi.lua_topointer;
module.exports.lua_toproxy             = lapi.lua_toproxy;
module.exports.lua_tostring            = lapi.lua_tostring;
module.exports.lua_tothread            = lapi.lua_tothread;
module.exports.lua_touserdata          = lapi.lua_touserdata;
module.exports.lua_type                = lapi.lua_type;
module.exports.lua_typename            = lapi.lua_typename;
module.exports.lua_upvalueid           = lapi.lua_upvalueid;
module.exports.lua_upvaluejoin         = lapi.lua_upvaluejoin;
module.exports.lua_version             = lapi.lua_version;
module.exports.lua_xmove               = lapi.lua_xmove;
module.exports.lua_yield               = ldo.lua_yield;
module.exports.lua_yieldk              = ldo.lua_yieldk;
module.exports.lua_tocfunction         = lapi.lua_tocfunction;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /*jshint esversion: 6 */


const assert = __webpack_require__(0);

const defs    = __webpack_require__(1);
const ljstype = __webpack_require__(26);
const ldebug  = __webpack_require__(11);
const ldo     = __webpack_require__(7);
const lfunc   = __webpack_require__(12);
const lstate  = __webpack_require__(13);
const lstring = __webpack_require__(9);
const ltable  = __webpack_require__(8);
const luaconf = __webpack_require__(10);
const lvm     = __webpack_require__(15);
const llimit  = __webpack_require__(5);
const ltm     = __webpack_require__(14);
const CT      = defs.constant_types;
const char    = defs.char;

const LUA_TPROTO = CT.LUA_NUMTAGS;
const LUA_TDEADKEY = CT.LUA_NUMTAGS+1;

class TValue {

    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    /* type tag of a TValue (bits 0-3 for tags + variant bits 4-5) */
    ttype() {
        return this.type & 0x3F;
    }

    /* type tag of a TValue with no variants (bits 0-3) */
    ttnov() {
        return this.type & 0x0F;
    }

    checktag(t) {
        return this.type === t;
    }

    checktype(t) {
        return this.ttnov() === t;
    }

    ttisnumber() {
        return this.checktype(CT.LUA_TNUMBER);
    }

    ttisfloat() {
        return this.checktag(CT.LUA_TNUMFLT);
    }

    ttisinteger() {
        return this.checktag(CT.LUA_TNUMINT);
    }

    ttisnil() {
        return this.checktag(CT.LUA_TNIL);
    }

    ttisboolean() {
        return this.checktag(CT.LUA_TBOOLEAN);
    }

    ttislightuserdata() {
        return this.checktag(CT.LUA_TLIGHTUSERDATA);
    }

    ttisstring() {
        return this.checktype(CT.LUA_TSTRING);
    }

    ttisshrstring() {
        return this.checktag(CT.LUA_TSHRSTR);
    }

    ttislngstring() {
        return this.checktag(CT.LUA_TLNGSTR);
    }

    ttistable() {
        return this.checktag(CT.LUA_TTABLE);
    }

    ttisfunction() {
        return this.checktype(CT.LUA_TFUNCTION);
    }

    ttisclosure() {
        return (this.type & 0x1F) === CT.LUA_TFUNCTION;
    }

    ttisCclosure() {
        return this.checktag(CT.LUA_TCCL);
    }

    ttisLclosure() {
        return this.checktag(CT.LUA_TLCL);
    }

    ttislcf() {
        return this.checktag(CT.LUA_TLCF);
    }

    ttisfulluserdata() {
        return this.checktag(CT.LUA_TUSERDATA);
    }

    ttisthread() {
        return this.checktag(CT.LUA_TTHREAD);
    }

    ttisdeadkey() {
        return this.checktag(LUA_TDEADKEY);
    }

    l_isfalse() {
        return this.ttisnil() || (this.ttisboolean() && this.value === false);
    }

    setfltvalue(x) {
        this.type = CT.LUA_TNUMFLT;
        this.value = x;
    }

    chgfltvalue(x) {
        assert(this.type == CT.LUA_TNUMFLT);
        this.value = x;
    }

    setivalue(x) {
        this.type = CT.LUA_TNUMINT;
        this.value = x;
    }

    chgivalue(x) {
        assert(this.type == CT.LUA_TNUMINT);
        this.value = x;
    }

    setnilvalue() {
        this.type = CT.LUA_TNIL;
        this.value = void 0;
    }

    setfvalue(x) {
        this.type = CT.LUA_TLCF;
        this.value = x;
    }

    setpvalue(x) {
        this.type = CT.LUA_TLIGHTUSERDATA;
        this.value = x;
    }

    setbvalue(x) {
        this.type = CT.LUA_TBOOLEAN;
        this.value = x;
    }

    setsvalue(x) {
        this.type = CT.LUA_TLNGSTR; /* LUA_TSHRSTR? */
        this.value = x;
    }

    setuvalue(x) {
        this.type = CT.LUA_TUSERDATA;
        this.value = x;
    }

    setthvalue(x) {
        this.type = CT.LUA_TTHREAD;
        this.value = x;
    }

    setclLvalue(x) {
        this.type = CT.LUA_TLCL;
        this.value = x;
    }

    setclCvalue(x) {
        this.type = CT.LUA_TCCL;
        this.value = x;
    }

    sethvalue(x) {
        this.type = CT.LUA_TTABLE;
        this.value = x;
    }

    setdeadvalue() {
        this.type = LUA_TDEADKEY;
        this.value = null;
    }

    setfrom(tv) { /* in lua C source setobj2t is often used for this */
        this.type = tv.type;
        this.value = tv.value;
    }

    tsvalue() {
        assert(this.ttisstring());
        return this.value;
    }

    svalue() {
        return this.tsvalue().getstr();
    }

    vslen() {
        return this.tsvalue().tsslen();
    }

    jsstring(from, to) {
        return defs.to_jsstring(this.svalue(), from, to);
    }

}

const pushobj2s = function(L, tv) {
    L.stack[L.top++] = new TValue(tv.type, tv.value);
};
const pushsvalue2s = function(L, ts) {
    L.stack[L.top++] = new TValue(CT.LUA_TLNGSTR, ts);
};
/* from stack to (same) stack */
const setobjs2s = function(L, newidx, oldidx) {
    L.stack[newidx].setfrom(L.stack[oldidx]);
};
/* to stack (not from same stack) */
const setobj2s = function(L, newidx, oldtv) {
    L.stack[newidx].setfrom(oldtv);
};
const setsvalue2s = function(L, newidx, ts) {
    L.stack[newidx].setsvalue(ts);
};

const luaO_nilobject = new TValue(CT.LUA_TNIL, null);
Object.freeze(luaO_nilobject);
module.exports.luaO_nilobject = luaO_nilobject;

class LClosure {

    constructor(L, n) {
        this.id = L.l_G.id_counter++;

        this.p = null;
        this.nupvalues = n;
        this.upvals = new Array(n); /* list of upvalues as UpVals. initialised in luaF_initupvals */
    }

}

class CClosure {

    constructor(L, f, n) {
        this.id = L.l_G.id_counter++;

        this.f = f;
        this.nupvalues = n;
        this.upvalue = new Array(n); /* list of upvalues as TValues */
        while (n--) {
            this.upvalue[n] = new TValue(CT.LUA_TNIL, null);
        }
    }

}

class Udata {

    constructor(L, size) {
        this.id = L.l_G.id_counter++;

        this.metatable = null;
        this.uservalue = new TValue(CT.LUA_TNIL, null);
        this.len = size;
        this.data = Object.create(null); // ignores size argument
    }

}

/*
** Description of a local variable for function prototypes
** (used for debug information)
*/
class LocVar {
    constructor() {
        this.varname = null;
        this.startpc = NaN;  /* first point where variable is active */
        this.endpc = NaN;    /* first point where variable is dead */
    }
}

const RETS = defs.to_luastring("...", true);
const PRE  = defs.to_luastring("[string \"");
const POS  = defs.to_luastring("\"]");

const luaO_chunkid = function(source, bufflen) {
    let l = source.length;
    let out;
    if (source[0] === char['=']) {  /* 'literal' source */
        if (l < bufflen)  /* small enough? */
            out = source.slice(1);
        else {  /* truncate it */
            out = source.slice(1, bufflen);
        }
    } else if (source[0] === char['@']) {  /* file name */
        if (l <= bufflen)  /* small enough? */
            out = source.slice(1);
        else {  /* add '...' before rest of name */
            bufflen -= RETS.length;
            out = RETS.concat(source.slice(1 + l - bufflen));
        }
    } else {  /* string; format as [string "source"] */
        let nli = source.indexOf(char['\n']);  /* find first new line (if any) */
        out = PRE;  /* add prefix */
        bufflen -= PRE.length + RETS.length + POS.length + 1;  /* save space for prefix+suffix+'\0' */
        if (l < bufflen && nli === -1) {  /* small one-line source? */
            out = out.concat(source, POS);  /* keep it */
        } else {
            if (nli !== -1) l = nli;  /* stop at first newline */
            if (l > bufflen) l = bufflen;
            out = out.concat(source.slice(0, l), RETS, POS);
        }
    }
    return out;
};

const luaO_hexavalue = function(c) {
    if (ljstype.lisdigit(c)) return c - char['0'];
    else return (String.fromCharCode(c).toLowerCase().charCodeAt(0) - char['a']) + 10;
};

const UTF8BUFFSZ = 8;

const luaO_utf8desc = function(buff, x) {
    let n = 1;  /* number of bytes put in buffer (backwards) */
    assert(x <= 0x10FFFF);
    if (x < 0x80)  /* ascii? */
        buff[UTF8BUFFSZ - 1] = x;
    else {  /* need continuation bytes */
        let mfb = 0x3f;  /* maximum that fits in first byte */
        do {
            buff[UTF8BUFFSZ - (n++)] = 0x80 | (x & 0x3f);
            x >>= 6;  /* remove added bits */
            mfb >>= 1;  /* now there is one less bit available in first byte */
        } while (x > mfb);  /* still needs continuation byte? */
        buff[UTF8BUFFSZ - n] = (~mfb << 1) | x;  /* add first byte */
    }
    return n;
};

/* maximum number of significant digits to read (to avoid overflows
   even with single floats) */
const MAXSIGDIG = 30;

/*
** convert an hexadecimal numeric string to a number, following
** C99 specification for 'strtod'
*/
const lua_strx2number = function(s) {
    let i = 0;
    let dot = char[luaconf.lua_getlocaledecpoint()];
    let r = 0.0;  /* result (accumulator) */
    let sigdig = 0;  /* number of significant digits */
    let nosigdig = 0;  /* number of non-significant digits */
    let e = 0;  /* exponent correction */
    let neg;  /* 1 if number is negative */
    let hasdot = false;  /* true after seen a dot */
    while (ljstype.lisspace(s[i])) i++;  /* skip initial spaces */
    if ((neg = (s[i] === char['-']))) i++;  /* check signal */
    else if (s[i] === char['+']) i++;
    if (!(s[i] === char['0'] && (s[i+1] === char['x'] || s[i+1] === char['X'])))  /* check '0x' */
        return null;  /* invalid format (no '0x') */
    for (i += 2; ; i++) {  /* skip '0x' and read numeral */
        if (s[i] === dot) {
            if (hasdot) break;  /* second dot? stop loop */
            else hasdot = true;
        } else if (ljstype.lisxdigit(s[i])) {
            if (sigdig === 0 && s[i] === char['0'])  /* non-significant digit (zero)? */
                nosigdig++;
            else if (++sigdig <= MAXSIGDIG)  /* can read it without overflow? */
                r = (r * 16) + luaO_hexavalue(s[i]);
            else e++; /* too many digits; ignore, but still count for exponent */
            if (hasdot) e--;  /* decimal digit? correct exponent */
        } else break;  /* neither a dot nor a digit */
    }

    if (nosigdig + sigdig === 0)  /* no digits? */
        return null;  /* invalid format */
    e *= 4;  /* each digit multiplies/divides value by 2^4 */
    if (s[i] === char['p'] || s[i] === char['P']) {  /* exponent part? */
        let exp1 = 0;  /* exponent value */
        let neg1;  /* exponent signal */
        i++;  /* skip 'p' */
        if ((neg1 = (s[i] === char['-']))) i++;  /* signal */
        else if (s[i] === char['+']) i++;
        if (!ljstype.lisdigit(s[i]))
            return null;  /* invalid; must have at least one digit */
        while (ljstype.lisdigit(s[i]))  /* read exponent */
            exp1 = exp1 * 10 + s[i++] - char['0'];
        if (neg1) exp1 = -exp1;
        e += exp1;
    }
    if (neg) r = -r;
    while (ljstype.lisspace(s[i])) i++;  /* skip trailing spaces */
    return i === s.length ? luaconf.ldexp(r, e) : null;  /* Only valid if nothing left is s*/
};

const lua_str2number = function(s) {
    /* parseFloat ignores trailing junk, validate with regex first */
    let str = defs.to_jsstring(s);
    if (!/^[\t\v\f \n\r]*[\+\-]?([0-9]+\.?[0-9]*|\.[0-9]*)([eE][\+\-]?[0-9]+)?[\t\v\f \n\r]*$/.test(str))
        return null;
    let flt = parseFloat(str);
    return !isNaN(flt) ? flt : null;
};

const l_str2dloc = function(s, mode) {
    return mode === 'x' ? lua_strx2number(s) : lua_str2number(s);
};

const l_str2d = function(s) {
    let pidx = /[.xXnN]/g.exec(String.fromCharCode(...s));
    pidx = pidx ? pidx.index : null;
    let pmode = pidx ? s[pidx] : null;
    let mode = pmode ? String.fromCharCode(pmode).toLowerCase() : 0;
    if (mode === 'n')  /* reject 'inf' and 'nan' */
        return null;
    let end = l_str2dloc(s, mode);  /* try to convert */
    if (end === null) {   /* failed? may be a different locale */
        // throw new Error("Locale not available to handle number"); // TODO
    }
    return end;
};

const MAXBY10  = Math.floor(llimit.MAX_INT / 10);
const MAXLASTD = llimit.MAX_INT % 10;

const l_str2int = function(s) {
    let i = 0;
    let a = 0;
    let empty = true;
    let neg;

    while (ljstype.lisspace(s[i])) i++;  /* skip initial spaces */
    if ((neg = (s[i] === char['-']))) i++;
    else if (s[i] === char['+']) i++;
    if (s[i] === char['0'] && (s[i+1] === char['x'] || s[i+1] === char['X'])) {  /* hex? */
        i += 2;  /* skip '0x' */

        for (; ljstype.lisxdigit(s[i]); i++) {
            a = (a * 16 + luaO_hexavalue(s[i]))|0;
            empty = false;
        }
    } else {  /* decimal */
        for (; ljstype.lisdigit(s[i]); i++) {
            let d = s[i] - char['0'];
            if (a >= MAXBY10 && (a > MAXBY10 || d > MAXLASTD + neg))  /* overflow? */
                return null;  /* do not accept it (as integer) */
            a = (a * 10 + d)|0;
            empty = false;
        }
    }
    while (ljstype.lisspace(s[i])) i++;  /* skip trailing spaces */
    if (empty || (i !== s.length)) return null;  /* something wrong in the numeral */
    else {
        return (neg ? -a : a)|0;
    }
};

const luaO_str2num = function(s) {
    let s2i = l_str2int(s);

    if (s2i !== null) {   /* try as an integer */
        return new TValue(CT.LUA_TNUMINT, s2i);
    } else {   /* else try as a float */
        s2i = l_str2d(s);

        if (s2i !== null) {
            return new TValue(CT.LUA_TNUMFLT, s2i);
        } else
            return false;  /* conversion failed */
    }
};

const luaO_utf8esc = function(x) {
    let buff = [];
    let n = 1;  /* number of bytes put in buffer (backwards) */
    assert(x <= 0x10ffff);
    if (x < 0x80)  /* ascii? */
        buff[UTF8BUFFSZ - 1] = x;
    else {  /* need continuation bytes */
        let mfb = 0x3f;  /* maximum that fits in first byte */
        do {  /* add continuation bytes */
            buff[UTF8BUFFSZ - (n++)] = 0x80 | (x & 0x3f);
            x >>= 6;  /* remove added bits */
            mfb >>= 1;  /* now there is one less bit available in first byte */
        } while (x > mfb);  /* still needs continuation byte? */
        buff[UTF8BUFFSZ - n] = (~mfb << 1) | x;  /* add first byte */
    }
    return {
        buff: buff,
        n: n
    };
};

/* this currently returns new TValue instead of modifying */
const luaO_tostring = function(L, obj) {
    let buff;
    if (obj.ttisinteger())
        buff = defs.to_luastring(luaconf.lua_integer2str(obj.value));
    else {
        let str = luaconf.lua_number2str(obj.value);
        buff = defs.to_luastring(str);
        // Assume no LUA_COMPAT_FLOATSTRING
        if (/^[-0123456789]+$/.test(str)) {  /* looks like an int? */
            buff.push(char[luaconf.lua_getlocaledecpoint()]);
            buff.push(char['0']);  /* adds '.0' to result */
        }
    }
    obj.setsvalue(lstring.luaS_bless(L, buff));
};

const pushstr = function(L, str) {
    ldo.luaD_inctop(L);
    setsvalue2s(L, L.top-1, lstring.luaS_new(L, str));
};

const luaO_pushvfstring = function(L, fmt, argp) {
    let n = 0;
    let i = 0;
    let a = 0;
    let e;
    while (1) {
        e = fmt.indexOf(char['%'], i);
        if (e == -1) break;
        pushstr(L, fmt.slice(i, e));
        switch(fmt[e+1]) {
            case char['s']:
                let s = argp[a++];
                if (s === null) s = defs.to_luastring("(null)", true);
                pushstr(L, s);
                break;
            case char['c']:
                let buff = argp[a++];
                if (ljstype.lisprint(buff))
                    pushstr(L, [buff]);
                else
                    luaO_pushfstring(L, defs.to_luastring("<\\%d>", true), buff);
                break;
            case char['d']:
            case char['I']:
                ldo.luaD_inctop(L);
                L.stack[L.top-1].setivalue(argp[a++]);
                luaO_tostring(L, L.stack[L.top-1]);
                break;
            case char['f']:
                ldo.luaD_inctop(L);
                L.stack[L.top-1].setfltvalue(argp[a++]);
                luaO_tostring(L, L.stack[L.top-1]);
                break;
            case char['p']:
                let v = argp[a++];
                if (v instanceof lstate.lua_State ||
                    v instanceof ltable.Table ||
                    v instanceof Udata ||
                    v instanceof LClosure ||
                    v instanceof CClosure ||
                    v instanceof lfunc.UpVal) {
                    pushstr(L, defs.to_luastring("0x"+v.id.toString(16)));
                } else {
                    /* user provided object. no id available */
                    pushstr(L, defs.to_luastring("<id NYI>"));
                }
                break;
            case char['U']:
                pushstr(L, defs.to_luastring(String.fromCodePoint(argp[a++])));
                break;
            case char['%']:
                pushstr(L, [char['%']]);
                break;
            default: {
                ldebug.luaG_runerror(L, defs.to_luastring("invalid option '%%%c' to 'lua_pushfstring'"), fmt[e + 1]);
            }
        }
        n += 2;
        i = e + 2;
    }
    ldo.luaD_checkstack(L, 1);
    pushstr(L, fmt.slice(i));
    if (n > 0) lvm.luaV_concat(L, n+1);
    return L.stack[L.top-1].svalue();
};

const luaO_pushfstring = function(L, fmt, ...argp) {
    return luaO_pushvfstring(L, fmt, argp);
};


/*
** converts an integer to a "floating point byte", represented as
** (eeeeexxx), where the real value is (1xxx) * 2^(eeeee - 1) if
** eeeee !== 0 and (xxx) otherwise.
*/
const luaO_int2fb = function(x) {
    let e = 0;  /* exponent */
    if (x < 8) return x;
    while (x >= (8 << 4)) {  /* coarse steps */
        x = (x + 0xf) >> 4;  /* x = ceil(x / 16) */
        e += 4;
    }
    while (x >= (8 << 1)) {  /* fine steps */
        x = (x + 1) >> 1;  /* x = ceil(x / 2) */
        e++;
    }
    return ((e+1) << 3) | (x - 8);
};

const intarith = function(L, op, v1, v2) {
    switch (op) {
        case defs.LUA_OPADD:  return (v1 + v2)|0;
        case defs.LUA_OPSUB:  return (v1 - v2)|0;
        case defs.LUA_OPMUL:  return Math.imul(v1, v2);
        case defs.LUA_OPMOD:  return lvm.luaV_mod(L, v1, v2);
        case defs.LUA_OPIDIV: return lvm.luaV_div(L, v1, v2);
        case defs.LUA_OPBAND: return (v1 & v2);
        case defs.LUA_OPBOR:  return (v1 | v2);
        case defs.LUA_OPBXOR: return (v1 ^ v2);
        case defs.LUA_OPSHL:  return lvm.luaV_shiftl(v1, v2);
        case defs.LUA_OPSHR:  return lvm.luaV_shiftl(v1, -v2);
        case defs.LUA_OPUNM:  return (0 - v1)|0;
        case defs.LUA_OPBNOT: return (~0 ^ v1);
        default: assert(0);
    }
};


const numarith = function(L, op, v1, v2) {
    switch (op) {
        case defs.LUA_OPADD:  return v1 + v2;
        case defs.LUA_OPSUB:  return v1 - v2;
        case defs.LUA_OPMUL:  return v1 * v2;
        case defs.LUA_OPDIV:  return v1 / v2;
        case defs.LUA_OPPOW:  return Math.pow(v1, v2);
        case defs.LUA_OPIDIV: return Math.floor(v1 / v2);
        case defs.LUA_OPUNM:  return -v1;
        case defs.LUA_OPMOD:  return llimit.luai_nummod(L, v1, v2);
        default: assert(0);
    }
};

const luaO_arith = function(L, op, p1, p2, p3) {
    let res = (typeof p3 === "number") ? L.stack[p3] : p3;  /* FIXME */

    switch (op) {
        case defs.LUA_OPBAND: case defs.LUA_OPBOR: case defs.LUA_OPBXOR:
        case defs.LUA_OPSHL: case defs.LUA_OPSHR:
        case defs.LUA_OPBNOT: {  /* operate only on integers */
            let i1, i2;
            if ((i1 = lvm.tointeger(p1)) !== false && (i2 = lvm.tointeger(p2)) !== false) {
                res.setivalue(intarith(L, op, i1, i2));
                return;
            }
            else break;  /* go to the end */
        }
        case defs.LUA_OPDIV: case defs.LUA_OPPOW: {  /* operate only on floats */
            let n1, n2;
            if ((n1 = lvm.tonumber(p1)) !== false && (n2 = lvm.tonumber(p2)) !== false) {
                res.setfltvalue(numarith(L, op, n1, n2));
                return;
            }
            else break;  /* go to the end */
        }
        default: {  /* other operations */
            let n1, n2;
            if (p1.ttisinteger() && p2.ttisinteger()) {
                res.setivalue(intarith(L, op, p1.value, p2.value));
                return;
            }
            else if ((n1 = lvm.tonumber(p1)) !== false && (n2 = lvm.tonumber(p2)) !== false) {
                res.setfltvalue(numarith(L, op, n1, n2));
                return;
            }
            else break;  /* go to the end */
        }
    }
    /* could not perform raw operation; try metamethod */
    assert(L !== null);  /* should not fail when folding (compile time) */
    ltm.luaT_trybinTM(L, p1, p2, p3, (op - defs.LUA_OPADD) + ltm.TMS.TM_ADD);
};


module.exports.CClosure          = CClosure;
module.exports.LClosure          = LClosure;
module.exports.LUA_TDEADKEY      = LUA_TDEADKEY;
module.exports.LUA_TPROTO        = LUA_TPROTO;
module.exports.LocVar            = LocVar;
module.exports.TValue            = TValue;
module.exports.Udata             = Udata;
module.exports.UTF8BUFFSZ        = UTF8BUFFSZ;
module.exports.luaO_arith        = luaO_arith;
module.exports.luaO_chunkid      = luaO_chunkid;
module.exports.luaO_hexavalue    = luaO_hexavalue;
module.exports.luaO_int2fb       = luaO_int2fb;
module.exports.luaO_pushfstring  = luaO_pushfstring;
module.exports.luaO_pushvfstring = luaO_pushvfstring;
module.exports.luaO_str2num      = luaO_str2num;
module.exports.luaO_tostring     = luaO_tostring;
module.exports.luaO_utf8desc     = luaO_utf8desc;
module.exports.luaO_utf8esc      = luaO_utf8esc;
module.exports.numarith          = numarith;
module.exports.pushobj2s         = pushobj2s;
module.exports.pushsvalue2s      = pushsvalue2s;
module.exports.setobjs2s         = setobjs2s;
module.exports.setobj2s          = setobj2s;
module.exports.setsvalue2s       = setsvalue2s;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const LUAI_MAXCCALLS = 200;
module.exports.LUAI_MAXCCALLS = LUAI_MAXCCALLS;
const LUA_MAXINTEGER = 2147483647;
module.exports.LUA_MAXINTEGER = LUA_MAXINTEGER;
const LUA_MININTEGER = -2147483648;
module.exports.LUA_MININTEGER = LUA_MININTEGER;

const luai_nummod = function(L, a, b) {
    let m = a % b;
    if ((m*b) < 0)
        m += b;
    return m;
};
module.exports.luai_nummod = luai_nummod;

// If later integers are more than 32bit, LUA_MAXINTEGER will then be != MAX_INT
const MAX_INT = 2147483647;
module.exports.MAX_INT = MAX_INT;
const MIN_INT = -2147483648;
module.exports.MIN_INT = MIN_INT;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*jshint esversion: 6 */


const lua     = __webpack_require__(2);

/* key, in the registry, for table of loaded modules */
const LUA_LOADED_TABLE = "_LOADED";

/* key, in the registry, for table of preloaded loaders */
const LUA_PRELOAD_TABLE = "_PRELOAD";

const LUA_FILEHANDLE = lua.to_luastring("FILE*", true);

const LUAL_NUMSIZES  = 4*16 + 8;

class luaL_Buffer {
    constructor() {
        this.b = null;
        this.L = null;
    }
}

const LEVELS1 = 10;  /* size of the first part of the stack */
const LEVELS2 = 11;  /* size of the second part of the stack */

/*
** search for 'objidx' in table at index -1.
** return 1 + string at top if find a good name.
*/
const findfield = function(L, objidx, level) {
    if (level === 0 || !lua.lua_istable(L, -1))
        return 0;  /* not found */

    lua.lua_pushnil(L);  /* start 'next' loop */

    while (lua.lua_next(L, -2)) {  /* for each pair in table */
        if (lua.lua_type(L, -2) === lua.LUA_TSTRING) {  /* ignore non-string keys */
            if (lua.lua_rawequal(L, objidx, -1)) {  /* found object? */
                lua.lua_pop(L, 1);  /* remove value (but keep name) */
                return 1;
            } else if (findfield(L, objidx, level - 1)) {  /* try recursively */
                lua.lua_remove(L, -2);  /* remove table (but keep name) */
                lua.lua_pushliteral(L, ".");
                lua.lua_insert(L, -2);  /* place '.' between the two names */
                lua.lua_concat(L, 3);
                return 1;
            }
        }
        lua.lua_pop(L, 1);  /* remove value */
    }

    return 0;  /* not found */
};

/*
** Search for a name for a function in all loaded modules
*/
const pushglobalfuncname = function(L, ar) {
    let top = lua.lua_gettop(L);
    lua.lua_getinfo(L, ['f'.charCodeAt(0)], ar);  /* push function */
    lua.lua_getfield(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(LUA_LOADED_TABLE, true));
    if (findfield(L, top + 1, 2)) {
        let name = lua.lua_tostring(L, -1);
        if (lua.to_jsstring(name).startsWith("_G.")) {  /* name start with '_G.'? */
            lua.lua_pushstring(L, name.slice(3));  /* push name without prefix */
            lua.lua_remove(L, -2);  /* remove original name */
        }
        lua.lua_copy(L, -1, top + 1);  /* move name to proper place */
        lua.lua_pop(L, 2);  /* remove pushed values */
        return 1;
    } else {
        lua.lua_settop(L, top);  /* remove function and global table */
        return 0;
    }
};

const pushfuncname = function(L, ar) {
    if (pushglobalfuncname(L, ar)) {  /* try first a global name */
        lua.lua_pushfstring(L, lua.to_luastring("function '%s'"), lua.lua_tostring(L, -1));
        lua.lua_remove(L, -2);  /* remove name */
    }
    else if (ar.namewhat.length !== 0)  /* is there a name from code? */
        lua.lua_pushfstring(L, lua.to_luastring("%s '%s'"), ar.namewhat, ar.name);  /* use it */
    else if (ar.what && ar.what[0] === 'm'.charCodeAt(0))  /* main? */
        lua.lua_pushliteral(L, "main chunk");
    else if (ar.what && ar.what[0] != 'C'.charCodeAt(0))  /* for Lua functions, use <file:line> */
        lua.lua_pushfstring(L, lua.to_luastring("function <%s:%d>"), ar.short_src, ar.linedefined);
    else  /* nothing left... */
        lua.lua_pushliteral(L, "?");
};

const lastlevel = function(L) {
    let ar = new lua.lua_Debug();
    let li = 1;
    let le = 1;
    /* find an upper bound */
    while (lua.lua_getstack(L, le, ar)) { li = le; le *= 2; }
    /* do a binary search */
    while (li < le) {
        let m = Math.floor((li + le)/2);
        if (lua.lua_getstack(L, m, ar)) li = m + 1;
        else le = m;
    }
    return le - 1;
};

const luaL_traceback = function(L, L1, msg, level) {
    let ar = new lua.lua_Debug();
    let top = lua.lua_gettop(L);
    let last = lastlevel(L1);
    let n1 = last - level > LEVELS1 + LEVELS2 ? LEVELS1 : -1;
    if (msg)
        lua.lua_pushfstring(L, lua.to_luastring("%s\n"), msg);
    luaL_checkstack(L, 10, null);
    lua.lua_pushliteral(L, "stack traceback:");
    while (lua.lua_getstack(L1, level++, ar)) {
        if (n1-- === 0) {  /* too many levels? */
            lua.lua_pushliteral(L, "\n\t...");  /* add a '...' */
            level = last - LEVELS2 + 1;  /* and skip to last ones */
        } else {
            lua.lua_getinfo(L1, lua.to_luastring("Slnt", true), ar);
            lua.lua_pushfstring(L, lua.to_luastring("\n\t%s:"), ar.short_src);
            if (ar.currentline > 0)
                lua.lua_pushliteral(L, `${ar.currentline}:`);
            lua.lua_pushliteral(L, " in ");
            pushfuncname(L, ar);
            if (ar.istailcall)
                lua.lua_pushliteral(L, "\n\t(...tail calls..)");
            lua.lua_concat(L, lua.lua_gettop(L) - top);
        }
    }
    lua.lua_concat(L, lua.lua_gettop(L) - top);
};

const panic = function(L) {
    throw new Error(`PANIC: unprotected error in call to Lua API (${lua.lua_tojsstring(L, -1)})`);
};

const luaL_argerror = function(L, arg, extramsg) {
    let ar = new lua.lua_Debug();

    if (!lua.lua_getstack(L, 0, ar))  /* no stack frame? */
        return luaL_error(L, lua.to_luastring("bad argument #%d (%s)"), arg, extramsg);

    lua.lua_getinfo(L, ['n'.charCodeAt(0)], ar);

    if (lua.to_jsstring(ar.namewhat) === "method") {
        arg--;  /* do not count 'self' */
        if (arg === 0)  /* error is in the self argument itself? */
            return luaL_error(L, lua.to_luastring("calling '%s' on bad self (%s)"), ar.name, extramsg);
    }

    if (ar.name === null)
        ar.name = pushglobalfuncname(L, ar) ? lua.lua_tostring(L, -1) : ["?".charCodeAt(0)];

    return luaL_error(L, lua.to_luastring("bad argument #%d to '%s' (%s)"), arg, ar.name, extramsg);
};

const typeerror = function(L, arg, tname) {
    let typearg;
    if (luaL_getmetafield(L, arg, lua.to_luastring("__name", true)) === lua.LUA_TSTRING)
        typearg = lua.lua_tostring(L, -1);
    else if (lua.lua_type(L, arg) === lua.LUA_TLIGHTUSERDATA)
        typearg = lua.to_luastring("light userdata", true);
    else
        typearg = luaL_typename(L, arg);

    let msg = lua.lua_pushfstring(L, lua.to_luastring("%s expected, got %s"), tname, typearg);
    return luaL_argerror(L, arg, msg);
};

const luaL_where = function(L, level) {
    let ar = new lua.lua_Debug();
    if (lua.lua_getstack(L, level, ar)) {
        lua.lua_getinfo(L, lua.to_luastring("Sl", true), ar);
        if (ar.currentline > 0) {
            lua.lua_pushfstring(L, lua.to_luastring("%s:%d: "), ar.short_src, ar.currentline);
            return;
        }
    }
    lua.lua_pushstring(L, []);
};

const luaL_error = function(L, fmt, ...argp) {
    luaL_where(L, 1);
    lua.lua_pushvfstring(L, fmt, argp);
    lua.lua_concat(L, 2);
    return lua.lua_error(L);
};

/* Unlike normal lua, we pass in an error object */
const luaL_fileresult = function(L, stat, fname, e) {
    if (stat) {
        lua.lua_pushboolean(L, 1);
        return 1;
    } else {
        lua.lua_pushnil(L);
        if (fname)
            lua.lua_pushstring(L, lua.to_luastring(`${lua.to_jsstring(fname)}: ${e.message}`));
        else
            lua.lua_pushstring(L, lua.to_luastring(e.message));
        lua.lua_pushinteger(L, -e.errno);
        return 3;
    }
};

/* Unlike normal lua, we pass in an error object */
const luaL_execresult = function(L, e) {
    let what, stat;
    if (e === null) {
        lua.lua_pushboolean(L, 1);
        lua.lua_pushliteral(L, "exit");
        lua.lua_pushinteger(L, 0);
        return 3;
    } else if (e.status) {
        what = "exit";
        stat = e.status;
    } else if (e.signal) {
        what = "signal";
        stat = e.signal;
    } else {
        /* XXX: node seems to have e.errno as a string instead of a number */
        return luaL_fileresult(L, 0, null, e);
    }
    lua.lua_pushnil(L);
    lua.lua_pushliteral(L, what);
    lua.lua_pushinteger(L, stat);
    return 3;
};

const luaL_getmetatable = function(L, n) {
    return lua.lua_getfield(L, lua.LUA_REGISTRYINDEX, n);
};

const luaL_newmetatable = function(L, tname) {
    if (luaL_getmetatable(L, tname) !== lua.LUA_TNIL)  /* name already in use? */
        return 0;  /* leave previous value on top, but return 0 */
    lua.lua_pop(L, 1);
    lua.lua_createtable(L, 0, 2);  /* create metatable */
    lua.lua_pushstring(L, tname);
    lua.lua_setfield(L, -2, lua.to_luastring("__name"));  /* metatable.__name = tname */
    lua.lua_pushvalue(L, -1);
    lua.lua_setfield(L, lua.LUA_REGISTRYINDEX, tname);  /* registry.name = metatable */
    return 1;

};

const luaL_setmetatable = function(L, tname) {
    luaL_getmetatable(L, tname);
    lua.lua_setmetatable(L, -2);
};

const luaL_testudata = function(L, ud, tname) {
    let p = lua.lua_touserdata(L, ud);
    if (p !== null) {  /* value is a userdata? */
        if (lua.lua_getmetatable(L, ud)) {  /* does it have a metatable? */
            luaL_getmetatable(L, tname);  /* get correct metatable */
            if (!lua.lua_rawequal(L, -1, -2))  /* not the same? */
                p = null;  /* value is a userdata with wrong metatable */
            lua.lua_pop(L, 2);  /* remove both metatables */
            return p;
        }
    }
    return null;  /* value is not a userdata with a metatable */
};

const luaL_checkudata = function(L, ud, tname) {
    let p = luaL_testudata(L, ud, tname);
    if (p === null) typeerror(L, ud, tname);
    return p;
};

const luaL_checkoption = function(L, arg, def, lst) {
    let name = def ? luaL_optstring(L, arg, def) : luaL_checkstring(L, arg);
    for (let i = 0; lst[i]; i++)
        if (lst[i].join('|') === name.join('|'))
            return i;
    return luaL_argerror(L, arg, lua.lua_pushfstring(L, lua.to_luastring("invalid option '%s'"), name));
};

const tag_error = function(L, arg, tag) {
    typeerror(L, arg, lua.lua_typename(L, tag));
};

const luaL_newstate = function() {
    let L = lua.lua_newstate();
    if (L) lua.lua_atpanic(L, panic);
    return L;
};


const luaL_typename = function(L, i) {
    return lua.lua_typename(L, lua.lua_type(L, i));
};

const luaL_argcheck = function(L, cond, arg, extramsg) {
    if (!cond) luaL_argerror(L, arg, extramsg);
};

const luaL_checkany = function(L, arg) {
    if (lua.lua_type(L, arg) === lua.LUA_TNONE)
        luaL_argerror(L, arg, lua.to_luastring("value expected", true));
};

const luaL_checktype = function(L, arg, t) {
    if (lua.lua_type(L, arg) !== t)
        tag_error(L, arg, t);
};

const luaL_checkstring = function(L, n) {
    return luaL_checklstring(L, n, null);
};

const luaL_checklstring = function(L, arg) {
    let s = lua.lua_tolstring(L, arg);
    if (s === null || s === undefined) tag_error(L, arg, lua.LUA_TSTRING);
    return s;
};

const luaL_optlstring = function(L, arg, def) {
    if (lua.lua_type(L, arg) <= 0) {
        return def;
    } else return luaL_checklstring(L, arg);
};

const luaL_optstring = luaL_optlstring;

const interror = function(L, arg) {
    if (lua.lua_isnumber(L, arg))
        luaL_argerror(L, arg, lua.to_luastring("number has no integer representation", true));
    else
        tag_error(L, arg, lua.LUA_TNUMBER);
};

const luaL_checknumber = function(L, arg) {
    let d = lua.lua_tonumberx(L, arg);
    if (d === false)
        tag_error(L, arg, lua.LUA_TNUMBER);
    return d;
};

const luaL_optnumber = function(L, arg, def) {
    return luaL_opt(L, luaL_checknumber, arg, def);
};

const luaL_checkinteger = function(L, arg) {
    let d = lua.lua_tointeger(L, arg);
    if (d === false)
        interror(L, arg);
    return d;
};

const luaL_optinteger = function(L, arg, def) {
    return luaL_opt(L, luaL_checkinteger, arg, def);
};

const luaL_prepbuffsize = function(B, sz) {
    return B;
};

const luaL_buffinit = function(L, B) {
    B.L = L;
    B.b = [];
};

const luaL_buffinitsize = function(L, B, sz) {
    luaL_buffinit(L, B);
    return B;
};

const LUAL_BUFFERSIZE = 8192;

const luaL_prepbuffer = function(B) {
    return luaL_prepbuffsize(B, LUAL_BUFFERSIZE);
};

const luaL_addlstring = function(B, s, l) {
    B.b = B.b.concat(s.slice(0, l));
};

const luaL_addstring = luaL_addlstring;

const luaL_pushresult = function(B) {
    let L = B.L;
    lua.lua_pushstring(L, B.b);
};

const luaL_addchar = function(B, c) {
    B.b.push(c);
};

const luaL_addsize = function(B, s) {
    B.n += s;
};

const luaL_pushresultsize = function(B, sz) {
    luaL_addsize(B, sz);
    luaL_pushresult(B);
};

const luaL_addvalue = function(B) {
    let L = B.L;
    let s = lua.lua_tostring(L, -1);
    // TODO: buffonstack ? necessary ?
    luaL_addstring(B, s);
    lua.lua_remove(L, -1);
};

const luaL_opt = function(L, f, n, d) {
    return lua.lua_type(L, n) <= 0 ? d : f(L, n);
};

const getS = function(L, ud) {
    let s = ud.string;
    ud.string = null;
    return s;
};

const luaL_loadbufferx = function(L, buff, size, name, mode) {
    return lua.lua_load(L, getS, {string: buff}, name, mode);
};

const luaL_loadbuffer = function(L, s, sz, n) {
    return luaL_loadbufferx(L, s, sz, n, null);
};

const luaL_loadstring = function(L, s) {
    return luaL_loadbuffer(L, s, s.length, s);
};

const luaL_dostring = function(L, s) {
    return (luaL_loadstring(L, s) || lua.lua_pcall(L, 0, lua.LUA_MULTRET, 0));
};

const luaL_getmetafield = function(L, obj, event) {
    if (!lua.lua_getmetatable(L, obj))
        return lua.LUA_TNIL;
    else {
        lua.lua_pushstring(L, event);
        let tt = lua.lua_rawget(L, -2);
        if (tt === lua.LUA_TNIL)
            lua.lua_pop(L, 2);
        return tt;
    }
};

const luaL_callmeta = function(L, obj, event) {
    obj = lua.lua_absindex(L, obj);
    if (luaL_getmetafield(L, obj, event) === lua.LUA_TNIL)
        return false;

    lua.lua_pushvalue(L, obj);
    lua.lua_call(L, 1, 1);

    return true;
};

const luaL_len = function(L, idx) {
    lua.lua_len(L, idx);
    let l = lua.lua_tointegerx(L, -1);
    if (l === false)
        luaL_error(L, lua.to_luastring("object length is not an integer", true));
    lua.lua_pop(L, 1);  /* remove object */
    return l;
};

const luaL_tolstring = function(L, idx) {
    if (luaL_callmeta(L, idx, lua.to_luastring("__tostring", true))) {
        if (!lua.lua_isstring(L, -1))
            luaL_error(L, lua.to_luastring("'__tostring' must return a string", true));
    } else {
        let t = lua.lua_type(L, idx);
        switch(t) {
            case lua.LUA_TNUMBER: {
                if (lua.lua_isinteger(L, idx))
                    lua.lua_pushfstring(L, lua.to_luastring("%I"), lua.lua_tointeger(L, idx));
                else
                    lua.lua_pushfstring(L, lua.to_luastring("%f"), lua.lua_tonumber(L, idx));
                break;
            }
            case lua.LUA_TSTRING:
                lua.lua_pushvalue(L, idx);
                break;
            case lua.LUA_TBOOLEAN:
                lua.lua_pushliteral(L, (lua.lua_toboolean(L, idx) ? "true" : "false"));
                break;
            case lua.LUA_TNIL:
                lua.lua_pushliteral(L, "nil");
                break;
            default:
                let tt = luaL_getmetafield(L, idx, lua.to_luastring("__name", true));
                let kind = tt === lua.LUA_TSTRING ? lua.lua_tostring(L, -1) : luaL_typename(L, idx);
                lua.lua_pushfstring(L, lua.to_luastring("%s: %p"), kind, lua.lua_topointer(L, idx));
                if (tt !== lua.LUA_TNIL)
                    lua.lua_remove(L, -2);
                break;
        }
    }

    return lua.lua_tolstring(L, -1);
};

/*
** Stripped-down 'require': After checking "loaded" table, calls 'openf'
** to open a module, registers the result in 'package.loaded' table and,
** if 'glb' is true, also registers the result in the global table.
** Leaves resulting module on the top.
*/
const luaL_requiref = function(L, modname, openf, glb) {
    luaL_getsubtable(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(LUA_LOADED_TABLE));
    lua.lua_getfield(L, -1, modname); /* LOADED[modname] */
    if (!lua.lua_toboolean(L, -1)) {  /* package not already loaded? */
        lua.lua_pop(L, 1);  /* remove field */
        lua.lua_pushcfunction(L, openf);
        lua.lua_pushstring(L, modname);  /* argument to open function */
        lua.lua_call(L, 1, 1);  /* call 'openf' to open module */
        lua.lua_pushvalue(L, -1);  /* make copy of module (call result) */
        lua.lua_setfield(L, -3, modname);  /* LOADED[modname] = module */
    }
    lua.lua_remove(L, -2);  /* remove LOADED table */
    if (glb) {
        lua.lua_pushvalue(L, -1);  /* copy of module */
        lua.lua_setglobal(L, modname);  /* _G[modname] = module */
    }
};

const find_subarray = function(arr, subarr, from_index) {
    var i = from_index >>> 0,
        sl = subarr.length,
        l = arr.length + 1 - sl;

    loop: for (; i < l; i++) {
        for (let j = 0; j < sl; j++)
            if (arr[i+j] !== subarr[j])
                continue loop;
        return i;
    }
    return -1;
};

const luaL_gsub = function(L, s, p, r) {
    let wild;
    let b = [];
    while ((wild = find_subarray(s, p)) >= 0) {
        b.push(...s.slice(0, wild)); /* push prefix */
        b.push(...r);  /* push replacement in place of pattern */
        s = s.slice(wild + p.length);  /* continue after 'p' */
    }
    b.push(...s);  /* push last suffix */
    lua.lua_pushstring(L, b);
    return lua.lua_tostring(L, -1);
};

/*
** ensure that stack[idx][fname] has a table and push that table
** into the stack
*/
const luaL_getsubtable = function(L, idx, fname) {
    if (lua.lua_getfield(L, idx, fname) === lua.LUA_TTABLE)
        return true;  /* table already there */
    else {
        lua.lua_pop(L, 1);  /* remove previous result */
        idx = lua.lua_absindex(L, idx);
        lua.lua_newtable(L);
        lua.lua_pushvalue(L, -1);  /* copy to be left at top */
        lua.lua_setfield(L, idx, fname);  /* assign new table to field */
        return false;  /* false, because did not find table there */
    }
};

/*
** set functions from list 'l' into table at top - 'nup'; each
** function gets the 'nup' elements at the top as upvalues.
** Returns with only the table at the stack.
*/
const luaL_setfuncs = function(L, l, nup) {
    luaL_checkstack(L, nup, lua.to_luastring("too many upvalues", true));
    for (let lib in l) {  /* fill the table with given functions */
        for (let i = 0; i < nup; i++)  /* copy upvalues to the top */
            lua.lua_pushvalue(L, -nup);
        lua.lua_pushcclosure(L, l[lib], nup);  /* closure with those upvalues */
        lua.lua_setfield(L, -(nup + 2), lua.to_luastring(lib));
    }
    lua.lua_pop(L, nup);  /* remove upvalues */
};

/*
** Ensures the stack has at least 'space' extra slots, raising an error
** if it cannot fulfill the request. (The error handling needs a few
** extra slots to format the error message. In case of an error without
** this extra space, Lua will generate the same 'stack overflow' error,
** but without 'msg'.)
*/
const luaL_checkstack = function(L, space, msg) {
    if (!lua.lua_checkstack(L, space)) {
        if (msg)
            luaL_error(L, lua.to_luastring("stack overflow (%s)"), msg);
        else
            luaL_error(L, lua.to_luastring('stack overflow', true));
    }
};

const luaL_newlibtable = function(L) {
    lua.lua_createtable(L);
};

const luaL_newlib = function(L, l) {
    lua.lua_createtable(L);
    luaL_setfuncs(L, l, 0);
};

/* predefined references */
const LUA_NOREF  = -2;
const LUA_REFNIL = -1;

const luaL_ref = function(L, t) {
    let ref;
    if (lua.lua_isnil(L, -1)) {
        lua.lua_pop(L, 1);  /* remove from stack */
        return LUA_REFNIL;  /* 'nil' has a unique fixed reference */
    }
    t = lua.lua_absindex(L, t);
    lua.lua_rawgeti(L, t, 0);  /* get first free element */
    ref = lua.lua_tointeger(L, -1);  /* ref = t[freelist] */
    lua.lua_pop(L, 1);  /* remove it from stack */
    if (ref !== 0) {  /* any free element? */
        lua.lua_rawgeti(L, t, ref);  /* remove it from list */
        lua.lua_rawseti(L, t, 0);  /* (t[freelist] = t[ref]) */
    }
    else  /* no free elements */
        ref = lua.lua_rawlen(L, t) + 1;  /* get a new reference */
    lua.lua_rawseti(L, t, ref);
    return ref;
};


const luaL_unref = function(L, t, ref) {
    if (ref >= 0) {
        t = lua.lua_absindex(L, t);
        lua.lua_rawgeti(L, t, 0);
        lua.lua_rawseti(L, t, ref);  /* t[ref] = t[freelist] */
        lua.lua_pushinteger(L, ref);
        lua.lua_rawseti(L, t, 0);  /* t[freelist] = ref */
    }
};


const errfile = function(L, what, fnameindex, error) {
    let serr = error.message;
    let filename = lua.lua_tostring(L, fnameindex).slice(1);
    lua.lua_pushstring(L, lua.to_luastring(`cannot ${what} ${lua.to_jsstring(filename)}: ${serr}`));
    lua.lua_remove(L, fnameindex);
    return lua.LUA_ERRFILE;
};

let getc = function() {
    return null;
};

const utf8_bom = [0XEF, 0XBB, 0XBF];  /* UTF-8 BOM mark */
const skipBOM = function(lf) {
    lf.n = 0;
    let c;
    let p = 0;
    do {
        c = getc(lf);
        if (c === null || c !== utf8_bom[p]) return c;
        p++;
        lf.buff[lf.n++] = c;  /* to be read by the parser */
    } while (p < utf8_bom.length);
    lf.n = 0;  /* prefix matched; discard it */
    return getc(lf);  /* return next character */
};

/*
** reads the first character of file 'f' and skips an optional BOM mark
** in its beginning plus its first line if it starts with '#'. Returns
** true if it skipped the first line.  In any case, '*cp' has the
** first "valid" character of the file (after the optional BOM and
** a first-line comment).
*/
const skipcomment = function(lf) {
    let c = skipBOM(lf);
    if (c === '#'.charCodeAt(0)) {  /* first line is a comment (Unix exec. file)? */
        do {  /* skip first line */
            c = getc(lf);
        } while (c && c !== '\n'.charCodeAt(0));

        return {
            skipped: true,
            c: getc(lf)  /* skip end-of-line, if present */
        };
    } else {
        return {
            skipped: false,
            c: c
        };
    }
};

class LoadF {
    constructor() {
        this.n = NaN;  /* number of pre-read characters */
        this.f = null;  /* file being read */
        this.buff =  true ? new Array(1024) : new Buffer(1024);  /* area for reading file */
        this.pos = 0;  /* current position in file */
        this.err = void 0;
    }
}

if (true) {
    const getF = function(L, ud) {
        let lf = ud;

        if (lf.f !== null && lf.n > 0) {  /* are there pre-read characters to be read? */
            let bytes = lf.n; /* return them (chars already in buffer) */
            lf.n = 0;  /* no more pre-read characters */
            lf.f = lf.f.slice(lf.pos);  /* we won't use lf.buff anymore */
            return lf.buff.slice(0, bytes);
        }

        let f = lf.f;
        lf.f = null;
        return f;
    };

    getc = function(lf) {
        return lf.pos < lf.f.length ? lf.f[lf.pos++] : null;
    };

    const luaL_loadfilex = function(L, filename, mode) {
        let lf = new LoadF();
        let fnameindex = lua.lua_gettop(L) + 1;  /* index of filename on the stack */
        if (filename === null) {
            throw new Error(`Can't read stdin in the browser`);
        } else {
            let jsfilename = lua.to_jsstring(filename);
            lua.lua_pushliteral(L, `@${jsfilename}`);

            let xhr = new XMLHttpRequest();
            xhr.open("GET", jsfilename, false);
            //xhr.responseType = "arraybuffer";
            xhr.send();

            if (xhr.status === 200) {
                /* TODO: Synchronous xhr alway return a js string */
                lf.f = lua.to_luastring(xhr.response);
            } else {
                lf.err = xhr.status;
                return errfile(L, "open", fnameindex, { message: `${xhr.status}: ${xhr.statusText}` });
            }
        }
        let com = skipcomment(lf);
        /* check for signature first, as we don't want to add line number corrections in binary case */
        if (com.c === lua.LUA_SIGNATURE.charCodeAt(0) && filename) {  /* binary file? */
            /* no need to re-open in node.js */
        } else if (com.skipped) { /* read initial portion */
            lf.buff[lf.n++] = '\n'.charCodeAt(0);  /* add line to correct line numbers */
        }
        if (com.c !== null)
            lf.buff[lf.n++] = com.c; /* 'c' is the first character of the stream */
        let status = lua.lua_load(L, getF, lf, lua.lua_tostring(L, -1), mode);
        let readstatus = lf.err;
        if (readstatus) {
            lua.lua_settop(L, fnameindex);  /* ignore results from 'lua_load' */
            return errfile(L, "read", fnameindex, readstatus);
        }
        lua.lua_remove(L, fnameindex);
        return status;
    };

    const luaL_loadfile = function(L, filename) {
        return luaL_loadfilex(L, filename, null);
    };

    const luaL_dofile = function(L, filename) {
        return (luaL_loadfile(L, filename) || lua.lua_pcall(L, 0, lua.LUA_MULTRET, 0));
    };

    module.exports.luaL_dofile    = luaL_dofile;
    module.exports.luaL_loadfilex = luaL_loadfilex;
    module.exports.luaL_loadfile  = luaL_loadfile;
} else {
    const fs = require('fs');

    const getF = function(L, ud) {
        let lf = ud;
        let bytes = 0;
        if (lf.n > 0) {  /* are there pre-read characters to be read? */
            bytes = lf.n; /* return them (chars already in buffer) */
            lf.n = 0;  /* no more pre-read characters */
        } else {  /* read a block from file */
            lf.buff.fill(0);
            try {
                bytes = fs.readSync(lf.f, lf.buff, 0, lf.buff.length, lf.pos); /* read block */
            } catch(e) {
                lf.err = e;
                bytes = 0;
            }
            lf.pos += bytes;
        }
        if (bytes > 0)
            return lf.buff.slice(0, bytes); /* slice on a node.js Buffer is 'free' */
        else return null;
    };

    getc = function(lf) {
        let b = new Buffer(1);
        let bytes = fs.readSync(lf.f, b, 0, 1, lf.pos);
        lf.pos += bytes;
        return bytes > 0 ? b.readUInt8() : null;
    };

    const luaL_loadfilex = function(L, filename, mode) {
        let lf = new LoadF();
        let fnameindex = lua.lua_gettop(L) + 1;  /* index of filename on the stack */
        if (filename === null) {
            lua.lua_pushliteral(L, "=stdin");
            lf.f = process.stdin.fd;
        } else {
            let jsfilename = lua.to_jsstring(filename);
            lua.lua_pushliteral(L, `@${jsfilename}`);
            try {
                lf.f = fs.openSync(jsfilename, "r");
                if (!fs.fstatSync(lf.f).isFile())
                    throw new Error(`${jsfilename} is not a readable file`);
            } catch (e) {
                return errfile(L, "open", fnameindex, e);
            }
        }
        let com = skipcomment(lf);
        /* check for signature first, as we don't want to add line number corrections in binary case */
        if (com.c === lua.LUA_SIGNATURE.charCodeAt(0) && filename) {  /* binary file? */
            /* no need to re-open in node.js */
        } else if (com.skipped) { /* read initial portion */
            lf.buff[lf.n++] = '\n'.charCodeAt(0);  /* add line to correct line numbers */
        }
        if (com.c !== null)
            lf.buff[lf.n++] = com.c; /* 'c' is the first character of the stream */
        let status = lua.lua_load(L, getF, lf, lua.lua_tostring(L, -1), mode);
        let readstatus = lf.err;
        if (filename) try { fs.closeSync(lf.f); } catch(e) {}  /* close file (even in case of errors) */
        if (readstatus) {
            lua.lua_settop(L, fnameindex);  /* ignore results from 'lua_load' */
            return errfile(L, "read", fnameindex, readstatus);
        }
        lua.lua_remove(L, fnameindex);
        return status;
    };

    const luaL_loadfile = function(L, filename) {
        return luaL_loadfilex(L, filename, null);
    };

    const luaL_dofile = function(L, filename) {
        return (luaL_loadfile(L, filename) || lua.lua_pcall(L, 0, lua.LUA_MULTRET, 0));
    };

    module.exports.luaL_dofile    = luaL_dofile;
    module.exports.luaL_loadfilex = luaL_loadfilex;
    module.exports.luaL_loadfile  = luaL_loadfile;
}

const lua_writestringerror = function(s) {
    if (process.stderr) process.stderr.write(s);
    else console.error(s);
};


const luaL_checkversion = function(L) {
    let ver = lua.LUA_VERSION_NUM;
    let sz = LUAL_NUMSIZES;
    let v = lua.lua_version(L);
    if (sz != LUAL_NUMSIZES)  /* check numeric types */
        luaL_error(L, lua.to_luastring("core and library have incompatible numeric types"));
    if (v != lua.lua_version(null))
        luaL_error(L, lua.to_luastring("multiple Lua VMs detected"));
    else if (v !== ver)
        luaL_error(L, lua.to_luastring("version mismatch: app. needs %f, Lua core provides %f"), ver, v);
};

module.exports.LUA_FILEHANDLE       = LUA_FILEHANDLE;
module.exports.LUA_LOADED_TABLE     = LUA_LOADED_TABLE;
module.exports.LUA_NOREF            = LUA_NOREF;
module.exports.LUA_PRELOAD_TABLE    = LUA_PRELOAD_TABLE;
module.exports.LUA_REFNIL           = LUA_REFNIL;
module.exports.luaL_Buffer          = luaL_Buffer;
module.exports.luaL_addchar         = luaL_addchar;
module.exports.luaL_addlstring      = luaL_addlstring;
module.exports.luaL_addsize         = luaL_addsize;
module.exports.luaL_addstring       = luaL_addstring;
module.exports.luaL_addvalue        = luaL_addvalue;
module.exports.luaL_argcheck        = luaL_argcheck;
module.exports.luaL_argerror        = luaL_argerror;
module.exports.luaL_buffinit        = luaL_buffinit;
module.exports.luaL_buffinitsize    = luaL_buffinitsize;
module.exports.luaL_callmeta        = luaL_callmeta;
module.exports.luaL_checkany        = luaL_checkany;
module.exports.luaL_checkinteger    = luaL_checkinteger;
module.exports.luaL_checklstring    = luaL_checklstring;
module.exports.luaL_checknumber     = luaL_checknumber;
module.exports.luaL_checkoption     = luaL_checkoption;
module.exports.luaL_checkstack      = luaL_checkstack;
module.exports.luaL_checkstring     = luaL_checkstring;
module.exports.luaL_checktype       = luaL_checktype;
module.exports.luaL_checkudata      = luaL_checkudata;
module.exports.luaL_checkversion    = luaL_checkversion;
module.exports.luaL_dostring        = luaL_dostring;
module.exports.luaL_error           = luaL_error;
module.exports.luaL_execresult      = luaL_execresult;
module.exports.luaL_fileresult      = luaL_fileresult;
module.exports.luaL_getmetafield    = luaL_getmetafield;
module.exports.luaL_getmetatable    = luaL_getmetatable;
module.exports.luaL_getsubtable     = luaL_getsubtable;
module.exports.luaL_gsub            = luaL_gsub;
module.exports.luaL_len             = luaL_len;
module.exports.luaL_loadbuffer      = luaL_loadbuffer;
module.exports.luaL_loadbufferx     = luaL_loadbufferx;
module.exports.luaL_loadstring      = luaL_loadstring;
module.exports.luaL_newlib          = luaL_newlib;
module.exports.luaL_newlibtable     = luaL_newlibtable;
module.exports.luaL_newmetatable    = luaL_newmetatable;
module.exports.luaL_newstate        = luaL_newstate;
module.exports.luaL_opt             = luaL_opt;
module.exports.luaL_optinteger      = luaL_optinteger;
module.exports.luaL_optlstring      = luaL_optlstring;
module.exports.luaL_optnumber       = luaL_optnumber;
module.exports.luaL_optstring       = luaL_optstring;
module.exports.luaL_prepbuffer      = luaL_prepbuffer;
module.exports.luaL_prepbuffsize    = luaL_prepbuffsize;
module.exports.luaL_pushresult      = luaL_pushresult;
module.exports.luaL_pushresultsize  = luaL_pushresultsize;
module.exports.luaL_ref             = luaL_ref;
module.exports.luaL_requiref        = luaL_requiref;
module.exports.luaL_setfuncs        = luaL_setfuncs;
module.exports.luaL_setmetatable    = luaL_setmetatable;
module.exports.luaL_testudata       = luaL_testudata;
module.exports.luaL_tolstring       = luaL_tolstring;
module.exports.luaL_traceback       = luaL_traceback;
module.exports.luaL_typename        = luaL_typename;
module.exports.luaL_unref           = luaL_unref;
module.exports.luaL_where           = luaL_where;
module.exports.lua_writestringerror = lua_writestringerror;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert = __webpack_require__(0);

const defs    = __webpack_require__(1);
const lapi    = __webpack_require__(22);
const ldebug  = __webpack_require__(11);
const lfunc   = __webpack_require__(12);
const llimit  = __webpack_require__(5);
const lobject = __webpack_require__(3);
const lopcodes= __webpack_require__(16);
const lparser = __webpack_require__(27);
const lstate  = __webpack_require__(13);
const lstring = __webpack_require__(9);
const ltm     = __webpack_require__(14);
const luaconf = __webpack_require__(10);
const lundump = __webpack_require__(42);
const lvm     = __webpack_require__(15);
const lzio    = __webpack_require__(21);

const CT = defs.constant_types;
const TS = defs.thread_status;

const adjust_top = function(L, newtop) {
    if (L.top < newtop) {
        while (L.top < newtop)
            L.stack[L.top++] = new lobject.TValue(CT.LUA_TNIL, null);
    } else {
        while (L.top > newtop)
            delete L.stack[--L.top];
    }
};

const seterrorobj = function(L, errcode, oldtop) {
    let current_top = L.top;

    /* extend stack so that L.stack[oldtop] is sure to exist */
    while (L.top < oldtop + 1)
        L.stack[L.top++] = new lobject.TValue(CT.LUA_TNIL, null);

    switch (errcode) {
        case TS.LUA_ERRMEM: {
            lobject.setsvalue2s(L, oldtop, lstring.luaS_newliteral(L, "not enough memory"));
            break;
        }
        case TS.LUA_ERRERR: {
            lobject.setsvalue2s(L, oldtop, lstring.luaS_newliteral(L, "error in error handling"));
            break;
        }
        default: {
            lobject.setobjs2s(L, oldtop, current_top - 1);
        }
    }

    while (L.top > oldtop + 1)
        delete L.stack[--L.top];
};

const ERRORSTACKSIZE = luaconf.LUAI_MAXSTACK + 200;

const luaD_reallocstack = function(L, newsize) {
    assert(newsize <= luaconf.LUAI_MAXSTACK || newsize == ERRORSTACKSIZE);
    assert(L.stack_last == L.stack.length - lstate.EXTRA_STACK);
    L.stack.length = newsize;
    L.stack_last = newsize - lstate.EXTRA_STACK;
};

const luaD_growstack = function(L, n) {
    let size = L.stack.length;
    if (size > luaconf.LUAI_MAXSTACK)
        luaD_throw(L, TS.LUA_ERRERR);
    else {
        let needed = L.top + n + lstate.EXTRA_STACK;
        let newsize = 2 * size;
        if (newsize > luaconf.LUAI_MAXSTACK) newsize = luaconf.LUAI_MAXSTACK;
        if (newsize < needed) newsize = needed;
        if (newsize > luaconf.LUAI_MAXSTACK) {  /* stack overflow? */
            luaD_reallocstack(L, ERRORSTACKSIZE);
            ldebug.luaG_runerror(L, defs.to_luastring("stack overflow", true));
        }
        else
            luaD_reallocstack(L, newsize);
    }
};

const luaD_checkstack = function(L, n) {
    if (L.stack_last - L.top <= n)
        luaD_growstack(L, n);
};

const stackinuse = function(L) {
    let lim = L.top;
    for (let ci = L.ci; ci !== null; ci = ci.previous) {
        if (lim < ci.top) lim = ci.top;
    }
    assert(lim <= L.stack_last);
    return lim + 1; /* part of stack in use */
};

const luaD_shrinkstack = function(L) {
    let inuse = stackinuse(L);
    let goodsize = inuse + Math.floor(inuse / 8) + 2*lstate.EXTRA_STACK;
    if (goodsize > luaconf.LUAI_MAXSTACK)
        goodsize = luaconf.LUAI_MAXSTACK;  /* respect stack limit */
    if (L.stack.length > luaconf.LUAI_MAXSTACK)  /* had been handling stack overflow? */
        lstate.luaE_freeCI(L);  /* free all CIs (list grew because of an error) */
    /* if thread is currently not handling a stack overflow and its
     good size is smaller than current size, shrink its stack */
    if (inuse <= (luaconf.LUAI_MAXSTACK - lstate.EXTRA_STACK) && goodsize < L.stack.length)
        luaD_reallocstack(L, goodsize);
};

const luaD_inctop = function(L) {
    luaD_checkstack(L, 1);
    L.stack[L.top++] = new lobject.TValue(CT.LUA_TNIL, null);
};

/*
** Prepares a function call: checks the stack, creates a new CallInfo
** entry, fills in the relevant information, calls hook if needed.
** If function is a JS function, does the call, too. (Otherwise, leave
** the execution ('luaV_execute') to the caller, to allow stackless
** calls.) Returns true iff function has been executed (JS function).
*/
const luaD_precall = function(L, off, nresults) {
    let func = L.stack[off];

    switch(func.type) {
        case CT.LUA_TCCL:
        case CT.LUA_TLCF: {
            let f = func.type === CT.LUA_TCCL ? func.value.f : func.value;

            luaD_checkstack(L, defs.LUA_MINSTACK);
            let ci = lstate.luaE_extendCI(L);
            ci.funcOff = off;
            ci.nresults = nresults;
            ci.func = func;
            ci.top = L.top + defs.LUA_MINSTACK;
            assert(ci.top <= L.stack_last);
            ci.callstatus = 0;
            if (L.hookmask & defs.LUA_MASKCALL)
                luaD_hook(L, defs.LUA_HOOKCALL, -1);
            let n = f(L); /* do the actual call */

            assert(typeof n == "number" && n >= 0 && (n|0) === n, "invalid return value from JS function (expected integer)");
            assert(n < L.top - L.ci.funcOff, "not enough elements in the stack");

            luaD_poscall(L, ci, L.top - n, n);

            return true;
        }
        case CT.LUA_TLCL: {
            let base;
            let p = func.value.p;
            let n = L.top - off - 1;
            let fsize = p.maxstacksize;
            luaD_checkstack(L, fsize);
            if (p.is_vararg) {
                base = adjust_varargs(L, p, n);
            } else {
                for (; n < p.numparams; n++)
                    L.stack[L.top++] = new lobject.TValue(CT.LUA_TNIL, null); // complete missing arguments
                base = off + 1;
            }

            let ci = lstate.luaE_extendCI(L);
            ci.funcOff = off;
            ci.nresults = nresults;
            ci.func = func;
            ci.l_base = base;
            ci.top = base + fsize;
            adjust_top(L, ci.top);
            ci.l_code = p.code;
            ci.l_savedpc = 0;
            ci.callstatus = lstate.CIST_LUA;
            if (L.hookmask & defs.LUA_MASKCALL)
                callhook(L, ci);
            return false;
        }
        default:
            luaD_checkstack(L, 1);
            tryfuncTM(L, off, func);
            return luaD_precall(L, off, nresults);
    }
};

const luaD_poscall = function(L, ci, firstResult, nres) {
    let wanted = ci.nresults;

    if (L.hookmask & (defs.LUA_MASKRET | defs.LUA_MASKLINE)) {
        if (L.hookmask & defs.LUA_MASKRET)
            luaD_hook(L, defs.LUA_HOOKRET, -1);
        L.oldpc = ci.previous.l_savedpc;  /* 'oldpc' for caller function */
    }

    let res = ci.funcOff;
    L.ci = ci.previous;
    L.ci.next = null;
    return moveresults(L, firstResult, res, nres, wanted);
};

const moveresults = function(L, firstResult, res, nres, wanted) {
    switch (wanted) {
        case 0:
            break;
        case 1: {
            if (nres === 0)
                L.stack[res].setnilvalue();
            else {
                lobject.setobjs2s(L, res, firstResult); /* move it to proper place */
            }
            break;
        }
        case defs.LUA_MULTRET: {
            for (let i = 0; i < nres; i++)
                lobject.setobjs2s(L, res + i, firstResult + i);
            for (let i=L.top; i>=(res + nres); i--)
                delete L.stack[i];
            L.top = res + nres;
            return false;
        }
        default: {
            let i;
            if (wanted <= nres) {
                for (i = 0; i < wanted; i++)
                    lobject.setobjs2s(L, res + i, firstResult + i);
            } else {
                for (i = 0; i < nres; i++)
                    lobject.setobjs2s(L, res + i, firstResult + i);
                for (; i < wanted; i++) {
                    if (res+i >= L.top)
                        L.stack[res + i] = new lobject.TValue(CT.LUAT_NIL, null);
                    else
                        L.stack[res + i].setnilvalue();
                }
            }
            break;
        }
    }
    let newtop = res + wanted; /* top points after the last result */
    for (let i=L.top; i>=newtop; i--)
        delete L.stack[i];
    L.top = newtop;
    return true;
};

/*
** Call a hook for the given event. Make sure there is a hook to be
** called. (Both 'L->hook' and 'L->hookmask', which triggers this
** function, can be changed asynchronously by signals.)
*/
const luaD_hook = function(L, event, line) {
    let hook = L.hook;
    if (hook && L.allowhook) {  /* make sure there is a hook */
        let ci = L.ci;
        let top = L.top;
        let ci_top = ci.top;
        let ar = new defs.lua_Debug();
        ar.event = event;
        ar.currentline = line;
        ar.i_ci = ci;
        luaD_checkstack(L, defs.LUA_MINSTACK);  /* ensure minimum stack size */
        ci.top = L.top + defs.LUA_MINSTACK;
        assert(ci.top <= L.stack_last);
        L.allowhook = 0;  /* cannot call hooks inside a hook */
        ci.callstatus |= lstate.CIST_HOOKED;
        hook(L, ar);
        assert(!L.allowhook);
        L.allowhook = 1;
        ci.top = ci_top;
        adjust_top(L, top);
        ci.callstatus &= ~lstate.CIST_HOOKED;
    }
};

const callhook = function(L, ci) {
    let hook = defs.LUA_HOOKCALL;
    ci.l_savedpc++;  /* hooks assume 'pc' is already incremented */
    if ((ci.previous.callstatus & lstate.CIST_LUA) &&
      ci.previous.l_code[ci.previous.l_savedpc - 1].opcode == lopcodes.OpCodesI.OP_TAILCALL) {
        ci.callstatus |= lstate.CIST_TAIL;
        hook = defs.LUA_HOOKTAILCALL;
    }
    luaD_hook(L, hook, -1);
    ci.l_savedpc--;  /* correct 'pc' */
};

const adjust_varargs = function(L, p, actual) {
    let nfixargs = p.numparams;
    /* move fixed parameters to final position */
    let fixed = L.top - actual; /* first fixed argument */
    let base = L.top; /* final position of first argument */

    let i;
    for (i = 0; i < nfixargs && i < actual; i++) {
        lobject.pushobj2s(L, L.stack[fixed + i]);
        L.stack[fixed + i].setnilvalue();
    }

    for (; i < nfixargs; i++)
        L.stack[L.top++] = new lobject.TValue(CT.LUA_TNIL, null);

    return base;
};

const tryfuncTM = function(L, off, func) {
    let tm = ltm.luaT_gettmbyobj(L, func, ltm.TMS.TM_CALL);
    if (!tm.ttisfunction(tm))
        ldebug.luaG_typeerror(L, func, defs.to_luastring("call", true));
    /* Open a hole inside the stack at 'func' */
    lobject.pushobj2s(L, L.stack[L.top-1]); /* push top of stack again */
    for (let p = L.top-2; p > off; p--)
        lobject.setobjs2s(L, p, p-1); /* move other items up one */
    lobject.setobj2s(L, off, tm); /* tag method is the new function to be called */
};

/*
** Check appropriate error for stack overflow ("regular" overflow or
** overflow while handling stack overflow). If 'nCalls' is larger than
** LUAI_MAXCCALLS (which means it is handling a "regular" overflow) but
** smaller than 9/8 of LUAI_MAXCCALLS, does not report an error (to
** allow overflow handling to work)
*/
const stackerror = function(L) {
    if (L.nCcalls === llimit.LUAI_MAXCCALLS)
        ldebug.luaG_runerror(L, defs.to_luastring("JS stack overflow", true));
    else if (L.nCcalls >= llimit.LUAI_MAXCCALLS + (llimit.LUAI_MAXCCALLS >> 3))
        luaD_throw(L, TS.LUA_ERRERR);  /* error while handing stack error */
};

/*
** Call a function (JS or Lua). The function to be called is at func.
** The arguments are on the stack, right after the function.
** When returns, all the results are on the stack, starting at the original
** function position.
*/
const luaD_call = function(L, off, nResults) {
    if (++L.nCcalls >= llimit.LUAI_MAXCCALLS)
        stackerror(L);
    if (!luaD_precall(L, off, nResults))
        lvm.luaV_execute(L);
    L.nCcalls--;
};

const luaD_throw = function(L, errcode) {
    if (L.errorJmp) {  /* thread has an error handler? */
        L.errorJmp.status = errcode;  /* set status */
        throw L.errorJmp;
    } else {  /* thread has no error handler */
        let g = L.l_G;
        L.status = errcode;  /* mark it as dead */
        if (g.mainthread.errorJmp) {  /* main thread has a handler? */
            g.mainthread.stack[g.mainthread.top++] = L.stack[L.top - 1];  /* copy error obj. */
            luaD_throw(g.mainthread, errcode);  /* re-throw in main thread */
        } else {  /* no handler at all; abort */
            let panic = g.panic;
            if (panic) {  /* panic function? */
                seterrorobj(L, errcode, L.top);  /* assume EXTRA_STACK */
                if (L.ci.top < L.top)
                    L.ci.top = L.top;  /* pushing msg. can break this invariant */
                panic(L);  /* call panic function (last chance to jump out) */
            }
            throw new Error(`Aborted ${errcode}`);
        }
    }
};

const luaD_rawrunprotected = function(L, f, ud) {
    let oldnCcalls = L.nCcalls;
    let lj = { // TODO: necessary when using try/catch ? (ldo.c:47-52)
        status: TS.LUA_OK,
        previous: L.errorJmp /* chain new error handler */
    };
    L.errorJmp = lj;

    try {
        f(L, ud);
    } catch (e) {
        if (lj.status === TS.LUA_OK) {
            /* error was not thrown via luaD_throw, i.e. it is a JS error */
            /* run user error handler (if it exists) */
            let atnativeerror = L.l_G.atnativeerror;
            if (atnativeerror) {
                try {
                    lj.status = TS.LUA_OK;

                    lapi.lua_pushcfunction(L, atnativeerror);
                    lapi.lua_pushlightuserdata(L, e);
                    luaD_callnoyield(L, L.top - 2, 1);

                    /* Now run the message handler (if it exists) */
                    /* copy of luaG_errormsg without the throw */
                    if (L.errfunc !== 0) {  /* is there an error handling function? */
                        let errfunc = L.errfunc;
                        lobject.pushobj2s(L, L.stack[L.top - 1]); /* move argument */
                        lobject.setobjs2s(L, L.top - 2, errfunc); /* push function */
                        luaD_callnoyield(L, L.top - 2, 1);
                    }

                    lj.status = TS.LUA_ERRRUN;
                } catch(e2) {
                    if (lj.status === TS.LUA_OK) {
                        /* also failed */
                        lj.status = -1;
                    }
                }
            } else {
                lj.status = -1;
            }
        }
    }

    L.errorJmp = lj.previous;
    L.nCcalls = oldnCcalls;

    return lj.status;

};

/*
** Completes the execution of an interrupted C function, calling its
** continuation function.
*/
const finishCcall = function(L, status) {
    let ci = L.ci;

    /* must have a continuation and must be able to call it */
    assert(ci.c_k !== null && L.nny === 0);
    /* error status can only happen in a protected call */
    assert(ci.callstatus & lstate.CIST_YPCALL || status === TS.LUA_YIELD);

    if (ci.callstatus & TS.CIST_YPCALL) {  /* was inside a pcall? */
        ci.callstatus &= ~TS.CIST_YPCALL;  /* continuation is also inside it */
        L.errfunc = ci.c_old_errfunc;  /* with the same error function */
    }

    /* finish 'lua_callk'/'lua_pcall'; CIST_YPCALL and 'errfunc' already
       handled */
    if (ci.nresults === defs.LUA_MULTRET && L.ci.top < L.top) L.ci.top = L.top;
    let c_k = ci.c_k; /* don't want to call as method */
    let n = c_k(L, status, ci.c_ctx);  /* call continuation function */
    assert(n < (L.top - L.ci.funcOff), "not enough elements in the stack");
    luaD_poscall(L, ci, L.top - n, n);  /* finish 'luaD_precall' */
};

/*
** Executes "full continuation" (everything in the stack) of a
** previously interrupted coroutine until the stack is empty (or another
** interruption long-jumps out of the loop). If the coroutine is
** recovering from an error, 'ud' points to the error status, which must
** be passed to the first continuation function (otherwise the default
** status is LUA_YIELD).
*/
const unroll = function(L, ud) {
    if (ud !== null)  /* error status? */
        finishCcall(L, ud);  /* finish 'lua_pcallk' callee */

    while (L.ci !== L.base_ci) {  /* something in the stack */
        if (!(L.ci.callstatus & lstate.CIST_LUA))  /* C function? */
            finishCcall(L, TS.LUA_YIELD);  /* complete its execution */
        else {  /* Lua function */
            lvm.luaV_finishOp(L);  /* finish interrupted instruction */
            lvm.luaV_execute(L);  /* execute down to higher C 'boundary' */
        }
    }
};

/*
** Try to find a suspended protected call (a "recover point") for the
** given thread.
*/
const findpcall = function(L) {
    for (let ci = L.ci; ci !== null; ci = ci.previous) {  /* search for a pcall */
        if (ci.callstatus & lstate.CIST_YPCALL)
            return ci;
    }

    return null;  /* no pending pcall */
};

/*
** Recovers from an error in a coroutine. Finds a recover point (if
** there is one) and completes the execution of the interrupted
** 'luaD_pcall'. If there is no recover point, returns zero.
*/
const recover = function(L, status) {
    let ci = findpcall(L);
    if (ci === null) return 0;  /* no recovery point */
    /* "finish" luaD_pcall */
    let oldtop = ci.extra;
    lfunc.luaF_close(L, oldtop);
    seterrorobj(L, status, oldtop);
    L.ci = ci;
    L.allowhook = ci.callstatus & lstate.CIST_OAH;  /* restore original 'allowhook' */
    L.nny = 0;  /* should be zero to be yieldable */
    luaD_shrinkstack(L);
    L.errfunc = ci.c_old_errfunc;
    return 1;  /* continue running the coroutine */
};

/*
** Signal an error in the call to 'lua_resume', not in the execution
** of the coroutine itself. (Such errors should not be handled by any
** coroutine error handler and should not kill the coroutine.)
*/
const resume_error = function(L, msg, narg) {
    let ts = lstring.luaS_newliteral(L, msg);
    if (narg === 0) {
        lobject.pushsvalue2s(L, ts);
        assert(L.top <= L.ci.top, "stack overflow");
    } else {
        /* remove args from the stack */
        for (let i=1; i<narg; i++)
            delete L.stack[--L.top];
        lobject.setsvalue2s(L, L.top-1, ts);  /* push error message */
    }
    return TS.LUA_ERRRUN;
};

/*
** Do the work for 'lua_resume' in protected mode. Most of the work
** depends on the status of the coroutine: initial state, suspended
** inside a hook, or regularly suspended (optionally with a continuation
** function), plus erroneous cases: non-suspended coroutine or dead
** coroutine.
*/
const resume = function(L, n) {
    let firstArg = L.top - n;  /* first argument */
    let ci = L.ci;
    if (L.status === TS.LUA_OK) {  /* starting a coroutine? */
        if (!luaD_precall(L, firstArg - 1, defs.LUA_MULTRET))  /* Lua function? */
            lvm.luaV_execute(L);  /* call it */
    } else {  /* resuming from previous yield */
        assert(L.status === TS.LUA_YIELD);
        L.status = TS.LUA_OK;  /* mark that it is running (again) */
        ci.funcOff = ci.extra;
        ci.func = L.stack[ci.funcOff];

        if (ci.callstatus & lstate.CIST_LUA)  /* yielded inside a hook? */
            lvm.luaV_execute(L);  /* just continue running Lua code */
        else {  /* 'common' yield */
            if (ci.c_k !== null) {  /* does it have a continuation function? */
                n = ci.c_k(L, TS.LUA_YIELD, ci.c_ctx); /* call continuation */
                assert(n < (L.top - L.ci.funcOff), "not enough elements in the stack");
                firstArg = L.top - n;  /* yield results come from continuation */
            }

            luaD_poscall(L, ci, firstArg, n);  /* finish 'luaD_precall' */
        }

        unroll(L, null);  /* run continuation */
    }
};

const lua_resume = function(L, from, nargs) {
    let oldnny = L.nny;  /* save "number of non-yieldable" calls */

    if (L.status === TS.LUA_OK) {  /* may be starting a coroutine */
        if (L.ci !== L.base_ci)  /* not in base level? */
            return resume_error(L, "cannot resume non-suspended coroutine", nargs);
    } else if (L.status !== TS.LUA_YIELD)
        return resume_error(L, "cannot resume dead coroutine", nargs);

    L.nCcalls = from ? from.nCcalls + 1 : 1;
    if (L.nCcalls >= llimit.LUAI_MAXCCALLS)
        return resume_error(L, "JS stack overflow", nargs);

    L.nny = 0;  /* allow yields */

    assert((L.status === TS.LUA_OK ? nargs + 1: nargs) < (L.top - L.ci.funcOff),
        "not enough elements in the stack");

    let status = luaD_rawrunprotected(L, resume, nargs);
    if (status === -1)  /* error calling 'lua_resume'? */
        status = TS.LUA_ERRRUN;
    else {  /* continue running after recoverable errors */
        while (status > TS.LUA_YIELD && recover(L, status)) {
            /* unroll continuation */
            status = luaD_rawrunprotected(L, unroll, status);
        }

        if (status > TS.LUA_YIELD) {  /* unrecoverable error? */
            L.status = status;  /* mark thread as 'dead' */
            seterrorobj(L, status, L.top);  /* push error message */
            L.ci.top = L.top;
        } else
            assert(status === L.status);  /* normal end or yield */
    }

    L.nny = oldnny;  /* restore 'nny' */
    L.nCcalls--;
    assert(L.nCcalls === (from ? from.nCcalls : 0));
    return status;
};

const lua_isyieldable = function(L) {
    return L.nny === 0;
};

const lua_yieldk = function(L, nresults, ctx, k) {
    let ci = L.ci;
    assert(nresults < (L.top - L.ci.funcOff), "not enough elements in the stack");

    if (L.nny > 0) {
        if (L !== L.l_G.mainthread)
            ldebug.luaG_runerror(L, defs.to_luastring("attempt to yield across a JS-call boundary", true));
        else
            ldebug.luaG_runerror(L, defs.to_luastring("attempt to yield from outside a coroutine", true));
    }

    L.status = TS.LUA_YIELD;
    ci.extra = ci.funcOff;  /* save current 'func' */
    if (ci.callstatus & lstate.CIST_LUA)  /* inside a hook? */
        assert(k === null, "hooks cannot continue after yielding");
    else {
        ci.c_k = k;
        if (k !== null)  /* is there a continuation? */
            ci.c_ctx = ctx;  /* save context */
        ci.funcOff = L.top - nresults - 1;  /* protect stack below results */
        ci.func = L.stack[ci.funcOff];
        luaD_throw(L, TS.LUA_YIELD);
    }

    assert(ci.callstatus & lstate.CIST_HOOKED);  /* must be inside a hook */
    return 0;  /* return to 'luaD_hook' */
};

const lua_yield = function(L, n) {
    lua_yieldk(L, n, 0, null);
};

const luaD_pcall = function(L, func, u, old_top, ef) {
    let old_ci = L.ci;
    let old_allowhooks = L.allowhook;
    let old_nny = L.nny;
    let old_errfunc = L.errfunc;
    L.errfunc = ef;

    let status = luaD_rawrunprotected(L, func, u);

    if (status !== TS.LUA_OK) {
        lfunc.luaF_close(L, old_top);
        seterrorobj(L, status, old_top);
        L.ci = old_ci;
        L.allowhook = old_allowhooks;
        L.nny = old_nny;
        luaD_shrinkstack(L);
    }

    L.errfunc = old_errfunc;

    return status;
};

/*
** Similar to 'luaD_call', but does not allow yields during the call
*/
const luaD_callnoyield = function(L, off, nResults) {
  L.nny++;
  luaD_call(L, off, nResults);
  L.nny--;
};

/*
** Execute a protected parser.
*/
class SParser {
    constructor(z, name, mode) {  /* data to 'f_parser' */
        this.z = z;
        this.buff = new lzio.MBuffer();  /* dynamic structure used by the scanner */
        this.dyd = new lparser.Dyndata();  /* dynamic structures used by the parser */
        this.mode = mode;
        this.name = name;
    }
}

const checkmode = function(L, mode, x) {
    if (mode && mode.indexOf(x[0]) === -1) {
        lapi.lua_pushstring(L, defs.to_luastring(`attempt to load a ${defs.to_jsstring(x)} chunk (mode is '${defs.to_jsstring(mode)}')`));
        luaD_throw(L, TS.LUA_ERRSYNTAX);
    }
};

const f_parser = function(L, p) {
    let cl;
    let c = p.z.zgetc();  /* read first character */
    if (c === defs.LUA_SIGNATURE.charCodeAt(0)) {
        checkmode(L, p.mode, defs.to_luastring("binary", true));
        cl = lundump.luaU_undump(L, p.z, p.name);
    } else {
        checkmode(L, p.mode, defs.to_luastring("text", true));
        cl = lparser.luaY_parser(L, p.z, p.buff, p.dyd, p.name, c);
    }

    assert(cl.nupvalues === cl.p.upvalues.length);
    lfunc.luaF_initupvals(L, cl);
};

const luaD_protectedparser = function(L, z, name, mode) {
    let p = new SParser(z, name, mode);
    L.nny++;  /* cannot yield during parsing */
    let status = luaD_pcall(L, f_parser, p, L.top, L.errfunc);
    L.nny--;
    return status;
};

module.exports.adjust_top           = adjust_top;
module.exports.luaD_call            = luaD_call;
module.exports.luaD_callnoyield     = luaD_callnoyield;
module.exports.luaD_checkstack      = luaD_checkstack;
module.exports.luaD_growstack       = luaD_growstack;
module.exports.luaD_hook            = luaD_hook;
module.exports.luaD_inctop          = luaD_inctop;
module.exports.luaD_pcall           = luaD_pcall;
module.exports.luaD_poscall         = luaD_poscall;
module.exports.luaD_precall         = luaD_precall;
module.exports.luaD_protectedparser = luaD_protectedparser;
module.exports.luaD_rawrunprotected = luaD_rawrunprotected;
module.exports.luaD_reallocstack    = luaD_reallocstack;
module.exports.luaD_throw           = luaD_throw;
module.exports.lua_isyieldable      = lua_isyieldable;
module.exports.lua_resume           = lua_resume;
module.exports.lua_yield            = lua_yield;
module.exports.lua_yieldk           = lua_yieldk;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert = __webpack_require__(0);

const defs    = __webpack_require__(1);
const ldebug  = __webpack_require__(11);
const lobject = __webpack_require__(3);
const lstring = __webpack_require__(9);
const lstate  = __webpack_require__(13);
const CT      = defs.constant_types;

/* used to prevent conflicts with lightuserdata keys */
let lightuserdata_hashes = new WeakMap();
const get_lightuserdata_hash = function(v) {
    let hash = lightuserdata_hashes.get(v);
    if (!hash) {
        /* Hash should be something unique that is a valid WeakMap key
           so that it ends up in dead_weak when removed from a table */
        hash = {};
        lightuserdata_hashes.set(v, hash);
    }
    return hash;
};

const table_hash = function(L, key) {
    switch(key.type) {
    case CT.LUA_TNIL:
        return ldebug.luaG_runerror(L, defs.to_luastring("table index is nil", true));
    case CT.LUA_TNUMFLT:
        if (isNaN(key.value))
            return ldebug.luaG_runerror(L, defs.to_luastring("table index is NaN", true));
        /* fall through */
    case CT.LUA_TNUMINT: /* takes advantage of floats and integers being same in JS */
    case CT.LUA_TBOOLEAN:
    case CT.LUA_TTABLE:
    case CT.LUA_TLCL:
    case CT.LUA_TLCF:
    case CT.LUA_TCCL:
    case CT.LUA_TUSERDATA:
    case CT.LUA_TTHREAD:
        return key.value;
    case CT.LUA_TSHRSTR:
    case CT.LUA_TLNGSTR:
        return lstring.luaS_hashlongstr(key.tsvalue());
    case CT.LUA_TLIGHTUSERDATA:
        let v = key.value;
        switch(typeof v) {
        case "string":
            /* possible conflict with LUA_TSTRING.
               prefix this string with "*" so they don't clash */
            return "*" + v;
        case "number":
            /* possible conflict with LUA_TNUMBER.
               turn into string and prefix with "#" to avoid clash with other strings */
            return "#" + v;
        case "boolean":
            /* possible conflict with LUA_TBOOLEAN. use strings ?true and ?false instead */
            return v?"?true":"?false";
        case "function":
            /* possible conflict with LUA_TLCF.
               indirect via a weakmap */
            return get_lightuserdata_hash(v);
        case "object":
            /* v could be a lua_State, CClosure, LClosure, Table or Userdata from this state as returned by lua_topointer */
            if ((v instanceof lstate.lua_State && v.l_G === L.l_G) ||
                v instanceof Table ||
                v instanceof lobject.Udata ||
                v instanceof lobject.LClosure ||
                v instanceof lobject.CClosure) {
                /* indirect via a weakmap */
                return get_lightuserdata_hash(v);
            }
            /* fall through */
        default:
            return v;
        }
    default:
        throw new Error("unknown key type: " + key.type);
    }
};

class Table {
    constructor(L) {
        this.id = L.l_G.id_counter++;
        this.strong = new Map();
        this.dead_strong = new Map();
        this.dead_weak = void 0; /* initialised when needed */
        this.f = void 0; /* first entry */
        this.l = void 0; /* last entry */
        this.metatable = null;
        this.flags = ~0;
    }
}

const invalidateTMcache = function(t) {
    t.flags = 0;
};

const add = function(t, hash, key, value) {
    t.dead_strong.clear();
    t.dead_weak = void 0;
    let prev = null;
    let entry = {
        key: key,
        value: value,
        p: prev = t.l,
        n: void 0
    };
    if (!t.f) t.f = entry;
    if (prev) prev.n = entry;
    t.strong.set(hash, entry);
    t.l = entry;
};

const is_valid_weakmap_key = function(k) {
    return typeof k === 'object' ? k !== null : typeof k === 'function';
};

/* Move out of 'strong' part and into 'dead' part. */
const mark_dead = function(t, hash) {
    let e = t.strong.get(hash);
    if (e) {
        e.key.setdeadvalue();
        e.value = void 0;
        let next = e.n;
        let prev = e.p;
        e.p = void 0; /* no need to know previous item any more */
        if(prev) prev.n = next;
        if(next) next.p = prev;
        if(t.f === e) t.f = next;
        if(t.l === e) t.l = prev;
        t.strong.delete(hash);
        if (is_valid_weakmap_key(hash)) {
            if (!t.dead_weak) t.dead_weak = new WeakMap();
            t.dead_weak.set(hash, e);
        } else {
            /* can't be used as key in weakmap */
            t.dead_strong.set(hash, e);
        }
    }
};

const luaH_new = function(L) {
    return new Table(L);
};

const getgeneric = function(t, hash) {
    let v = t.strong.get(hash);
    return v ? v.value : lobject.luaO_nilobject;
};

const luaH_getint = function(t, key) {
    assert(typeof key == "number" && (key|0) === key);
    return getgeneric(t, key);
};

const luaH_getstr = function(t, key) {
    assert(key instanceof lstring.TString);
    return getgeneric(t, lstring.luaS_hashlongstr(key));
};

const luaH_get = function(L, t, key) {
    assert(key instanceof lobject.TValue);
    if (key.ttisnil() || (key.ttisfloat() && isNaN(key.value)))
        return lobject.luaO_nilobject;
    return getgeneric(t, table_hash(L, key));
};

const setgeneric = function(t, hash, key) {
    let v = t.strong.get(hash);
    if (v)
        return v.value;

    let kv = key.value;
    if ((key.ttisfloat() && (kv|0) === kv)) { /* does index fit in an integer? */
        /* insert it as an integer */
        key = new lobject.TValue(CT.LUA_TNUMINT, kv);
    } else {
        key = new lobject.TValue(key.type, kv);
    }
    let tv = new lobject.TValue(CT.LUA_TNIL, null);
    add(t, hash, key, tv);
    return tv;
};

const luaH_setint = function(t, key, value) {
    assert(typeof key == "number" && (key|0) === key && value instanceof lobject.TValue);
    let hash = key; /* table_hash known result */
    if (value.ttisnil()) {
        mark_dead(t, hash);
        return;
    }
    let v = t.strong.get(hash);
    if (v) {
        let tv = v.value;
        tv.setfrom(value);
    } else {
        let k = new lobject.TValue(CT.LUA_TNUMINT, key);
        let v = new lobject.TValue(value.type, value.value);
        add(t, hash, k, v);
    }
};

const luaH_set = function(L, t, key) {
    assert(key instanceof lobject.TValue);
    let hash = table_hash(L, key);
    return setgeneric(t, hash, key);
};

const luaH_delete = function(L, t, key) {
    assert(key instanceof lobject.TValue);
    let hash = table_hash(L, key);
    return mark_dead(t, hash);
};

/*
** Try to find a boundary in table 't'. A 'boundary' is an integer index
** such that t[i] is non-nil and t[i+1] is nil (and 0 if t[1] is nil).
*/
const luaH_getn = function(t) {
    let i = 0;
    let j = t.strong.size + 1; /* use known size of Map to bound search */
    /* now do a binary search between them */
    while (j - i > 1) {
        let m = Math.floor((i+j)/2);
        if (luaH_getint(t, m).ttisnil()) j = m;
        else i = m;
    }
    return i;
};

const luaH_next = function(L, table, keyI) {
    let keyO = L.stack[keyI];

    let entry;
    if (keyO.type === CT.LUA_TNIL) {
        entry = table.f;
        if (!entry)
            return false;
    } else {
        /* First find current key */
        let hash = table_hash(L, keyO);
        /* Look in main part of table */
        entry = table.strong.get(hash);
        if (entry) {
            entry = entry.n;
            if (!entry)
                return false;
        } else {
            /* Try dead keys */
            entry = (table.dead_weak && table.dead_weak.get(hash)) || table.dead_strong.get(hash);
            if (!entry)
                /* item not in table */
                return ldebug.luaG_runerror(L, defs.to_luastring("invalid key to 'next'"));
            /* Iterate until either out of keys, or until finding a non-dead key */
            do {
                entry = entry.n;
                if (!entry)
                    return false;
            } while (entry.key.ttisdeadkey());
        }
    }
    lobject.setobj2s(L, keyI, entry.key);
    lobject.setobj2s(L, keyI+1, entry.value);
    return true;
};

module.exports.invalidateTMcache = invalidateTMcache;
module.exports.luaH_delete  = luaH_delete;
module.exports.luaH_get     = luaH_get;
module.exports.luaH_getint  = luaH_getint;
module.exports.luaH_getn    = luaH_getn;
module.exports.luaH_getstr  = luaH_getstr;
module.exports.luaH_set     = luaH_set;
module.exports.luaH_setint  = luaH_setint;
module.exports.luaH_new     = luaH_new;
module.exports.luaH_next    = luaH_next;
module.exports.Table        = Table;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(0);

const defs = __webpack_require__(1);

class TString {

    constructor(L, str) {
        this.hash = null;
        this.realstring = str;
    }

    getstr() {
        return this.realstring;
    }

    tsslen() {
        return this.realstring.length;
    }

}

const luaS_eqlngstr = function(a, b) {
    assert(a instanceof TString);
    assert(b instanceof TString);
    return a == b || (a.realstring.length == b.realstring.length && a.realstring.join() == b.realstring.join());
};

/* converts strings (arrays) to a consistent map key
   make sure this doesn't conflict with any of the anti-collision strategies in ltable */
const luaS_hash = function(str) {
    assert(defs.is_luastring(str));
    return str.map(e => `${e}|`).join('');
};

const luaS_hashlongstr = function(ts) {
    assert(ts instanceof TString);
    if(ts.hash === null) {
        ts.hash = luaS_hash(ts.getstr());
    }
    return ts.hash;
};

/* variant that takes ownership of array */
const luaS_bless = function(L, str) {
    return new TString(L, str);
};

/* makes a copy */
const luaS_new = function(L, str) {
    return luaS_bless(L, str.slice(0));
};

/* takes a js string */
const luaS_newliteral = function(L, str) {
    return luaS_bless(L, defs.to_luastring(str));
};

module.exports.luaS_eqlngstr    = luaS_eqlngstr;
module.exports.luaS_hash        = luaS_hash;
module.exports.luaS_hashlongstr = luaS_hashlongstr;
module.exports.luaS_bless       = luaS_bless;
module.exports.luaS_new         = luaS_new;
module.exports.luaS_newliteral  = luaS_newliteral;
module.exports.TString          = TString;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const llimit = __webpack_require__(5);
const sprintf = __webpack_require__(25).sprintf;

/*
@@ LUAI_MAXSTACK limits the size of the Lua stack.
** CHANGE it if you need a different limit. This limit is arbitrary;
** its only purpose is to stop Lua from consuming unlimited stack
** space (and to reserve some numbers for pseudo-indices).
*/
/* TODO: put back to 1000000. Node would go out of memory in some cases (e.g. travis) */
const LUAI_MAXSTACK = 100000;

/*
@@ LUA_IDSIZE gives the maximum size for the description of the source
@@ of a function in debug information.
** CHANGE it if you want a different size.
*/
const LUA_IDSIZE = 60;

const lua_integer2str = function(n) {
    return sprintf(LUA_INTEGER_FMT, n);
};

const lua_number2str = function(n) {
    return sprintf(LUA_NUMBER_FMT, n);
};

const lua_numbertointeger = function(n) {
    return n >= llimit.MIN_INT && n < -llimit.MIN_INT ? n : false;
};

const LUA_INTEGER_FRMLEN = "";
const LUA_NUMBER_FRMLEN = "";

const LUA_INTEGER_FMT = `%${LUA_INTEGER_FRMLEN}d`;
const LUA_NUMBER_FMT  = "%.14g";

const lua_getlocaledecpoint = function() {
    return (1.1).toLocaleString().substring(1, 2);
};

// See: http://croquetweak.blogspot.fr/2014/08/deconstructing-floats-frexp-and-ldexp.html
const frexp = function(value) {
    if (value === 0) return [value, 0];
    var data = new DataView(new ArrayBuffer(8));
    data.setFloat64(0, value);
    var bits = (data.getUint32(0) >>> 20) & 0x7FF;
    if (bits === 0) { // denormal
        data.setFloat64(0, value * Math.pow(2, 64));  // exp + 64
        bits = ((data.getUint32(0) >>> 20) & 0x7FF) - 64;
    }
    var exponent = bits - 1022;
    var mantissa = ldexp(value, -exponent);
    return [mantissa, exponent];
};

const ldexp = function(mantissa, exponent) {
    var steps = Math.min(3, Math.ceil(Math.abs(exponent) / 1023));
    var result = mantissa;
    for (var i = 0; i < steps; i++)
        result *= Math.pow(2, Math.floor((exponent + i) / steps));
    return result;
};

module.exports.frexp                 = frexp;
module.exports.ldexp                 = ldexp;
module.exports.LUAI_MAXSTACK         = LUAI_MAXSTACK;
module.exports.LUA_IDSIZE            = LUA_IDSIZE;
module.exports.LUA_INTEGER_FMT       = LUA_INTEGER_FMT;
module.exports.LUA_INTEGER_FRMLEN    = LUA_INTEGER_FRMLEN;
module.exports.LUA_NUMBER_FMT        = LUA_NUMBER_FMT;
module.exports.LUA_NUMBER_FRMLEN     = LUA_NUMBER_FRMLEN;
module.exports.lua_getlocaledecpoint = lua_getlocaledecpoint;
module.exports.lua_integer2str       = lua_integer2str;
module.exports.lua_number2str        = lua_number2str;
module.exports.lua_numbertointeger   = lua_numbertointeger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert = __webpack_require__(0);

const defs     = __webpack_require__(1);
const ldo      = __webpack_require__(7);
const lfunc    = __webpack_require__(12);
const lobject  = __webpack_require__(3);
const lopcodes = __webpack_require__(16);
const lstate   = __webpack_require__(13);
const ltable   = __webpack_require__(8);
const ltm      = __webpack_require__(14);
const luaconf  = __webpack_require__(10);
const lvm      = __webpack_require__(15);

const CT = defs.constant_types;
const TS = defs.thread_status;

const currentpc = function(ci) {
    assert(ci.callstatus & lstate.CIST_LUA);
    return ci.l_savedpc - 1;
};

const currentline = function(ci) {
    return ci.func.value.p.lineinfo.length !== 0 ? ci.func.value.p.lineinfo[currentpc(ci)] : -1;
};

/*
** If function yielded, its 'func' can be in the 'extra' field. The
** next function restores 'func' to its correct value for debugging
** purposes. (It exchanges 'func' and 'extra'; so, when called again,
** after debugging, it also "re-restores" ** 'func' to its altered value.
*/
const swapextra = function(L) {
    if (L.status === TS.LUA_YIELD) {
        let ci = L.ci;  /* get function that yielded */
        let temp = ci.funcOff;  /* exchange its 'func' and 'extra' values */
        ci.func = L.stack[ci.extra];
        ci.funcOff = ci.extra;
        ci.extra = temp;
    }
};

const lua_sethook = function(L, func, mask, count) {
    if (func === null || mask === 0) {  /* turn off hooks? */
        mask = 0;
        func = null;
    }
    if (L.ci.callstatus & lstate.CIST_LUA)
        L.oldpc = L.ci.l_savedpc;
    L.hook = func;
    L.basehookcount = count;
    L.hookcount = L.basehookcount;
    L.hookmask = mask;
};

const lua_gethook = function(L) {
    return L.hook;
};


const lua_gethookmask = function(L) {
    return L.hookmask;
};


const lua_gethookcount = function(L) {
    return L.basehookcount;
};

const lua_getstack = function(L, level, ar) {
    let ci;
    let status;
    if (level < 0) return 0;  /* invalid (negative) level */
    for (ci = L.ci; level > 0 && ci !== L.base_ci; ci = ci.previous)
        level--;
    if (level === 0 && ci !== L.base_ci) {  /* level found? */
        status = 1;
        ar.i_ci = ci;
    } else
        status = 0;  /* no such level */
    return status;
};

const upvalname = function(p, uv) {
    assert(uv < p.upvalues.length);
    let s = p.upvalues[uv].name;
    if (s === null) return ["?".charCodeAt(0)];
    return s.getstr();
};

const findvararg = function(ci, n) {
    let nparams = ci.func.value.p.numparams;
    if (n >= ci.l_base - ci.funcOff - nparams)
        return null;  /* no such vararg */
    else {
        return {
            pos: ci.funcOff + nparams + n,
            name: defs.to_luastring("(*vararg)", true)  /* generic name for any vararg */
        };
    }
};

const findlocal = function(L, ci, n) {
    let base, name = null;

    if (ci.callstatus & lstate.CIST_LUA) {
        if (n < 0)  /* access to vararg values? */
            return findvararg(ci, -n);
        else {
            base = ci.l_base;
            name = lfunc.luaF_getlocalname(ci.func.value.p, n, currentpc(ci));
        }
    } else
        base = ci.funcOff + 1;

    if (name === null) {  /* no 'standard' name? */
        let limit = ci === L.ci ? L.top : ci.next.funcOff;
        if (limit - base >= n && n > 0)  /* is 'n' inside 'ci' stack? */
            name = defs.to_luastring("(*temporary)", true);  /* generic name for any valid slot */
        else
            return null;  /* no name */
    }
    return {
        pos: base + (n - 1),
        name: name
    };
};

const lua_getlocal = function(L, ar, n) {
    let name;
    swapextra(L);
    if (ar === null) {  /* information about non-active function? */
        if (!L.stack[L.top - 1].ttisLclosure())  /* not a Lua function? */
            name = null;
        else  /* consider live variables at function start (parameters) */
            name = lfunc.luaF_getlocalname(L.stack[L.top - 1].value.p, n, 0);
    } else {  /* active function; get information through 'ar' */
        let local = findlocal(L, ar.i_ci, n);
        if (local) {
            name = local.name;
            lobject.pushobj2s(L, L.stack[local.pos]);
            assert(L.top <= L.ci.top, "stack overflow");
        } else {
            name = null;
        }
    }
    swapextra(L);
    return name;
};

const lua_setlocal = function(L, ar, n) {
    let name;
    swapextra(L);
    let local = findlocal(L, ar.i_ci, n);
    if (local) {
        name = local.name;
        lobject.setobjs2s(L, local.pos, L.top - 1);
        delete L.stack[--L.top];  /* pop value */
    } else {
        name = null;
    }
    swapextra(L);
    return name;
};

const funcinfo = function(ar, cl) {
    if (cl === null || cl instanceof lobject.CClosure) {
        ar.source = defs.to_luastring("=[JS]", true);
        ar.linedefined = -1;
        ar.lastlinedefined = -1;
        ar.what = ["J".charCodeAt(0)];
    } else {
        let p = cl.p;
        ar.source = p.source ? p.source.getstr() : defs.to_luastring("=?", true);
        ar.linedefined = p.linedefined;
        ar.lastlinedefined = p.lastlinedefined;
        ar.what = ar.linedefined === 0 ? defs.to_luastring("main", true) : defs.to_luastring("Lua", true);
    }

    ar.short_src = lobject.luaO_chunkid(ar.source, luaconf.LUA_IDSIZE);
};

const collectvalidlines = function(L, f) {
    if (f === null || f instanceof lobject.CClosure) {
        L.stack[L.top] = new lobject.TValue(CT.LUA_TNIL, null);
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
    } else {
        let lineinfo = f.p.lineinfo;
        let t = ltable.luaH_new(L);
        L.stack[L.top] = new lobject.TValue(CT.LUA_TTABLE, t);
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
        let v = new lobject.TValue(CT.LUA_TBOOLEAN, true);
        for (let i = 0; i < lineinfo.length; i++)
            ltable.luaH_setint(t, lineinfo[i], v);
    }
};

const getfuncname = function(L, ci) {
    let r = {
        name: null,
        funcname: null
    };
    if (ci === null)
        return null;
    else if (ci.callstatus & lstate.CIST_FIN) {  /* is this a finalizer? */
        r.name = defs.to_luastring("__gc", true);
        r.funcname = defs.to_luastring("metamethod", true);  /* report it as such */
        return r;
    }
    /* calling function is a known Lua function? */
    else if (!(ci.callstatus & lstate.CIST_TAIL) && ci.previous.callstatus & lstate.CIST_LUA)
        return funcnamefromcode(L, ci.previous);
    else return null;  /* no way to find a name */
};

const auxgetinfo = function(L, what, ar, f, ci) {
    let status = 1;
    for (; what.length > 0; what = what.slice(1)) {
        switch (String.fromCharCode(what[0])) {
            case 'S': {
                funcinfo(ar, f);
                break;
            }
            case 'l': {
                ar.currentline = ci && ci.callstatus & lstate.CIST_LUA ? currentline(ci) : -1;
                break;
            }
            case 'u': {
                ar.nups = f === null ? 0 : f.nupvalues;
                if (f === null || f instanceof lobject.CClosure) {
                    ar.isvararg = true;
                    ar.nparams = 0;
                } else {
                    ar.isvararg = f.p.is_vararg;
                    ar.nparams = f.p.numparams;
                }
                break;
            }
            case 't': {
                ar.istailcall = ci ? ci.callstatus & lstate.CIST_TAIL : 0;
                break;
            }
            case 'n': {
                let r = getfuncname(L, ci);
                if (r === null) {
                    ar.namewhat = [];
                    ar.name = null;
                } else {
                    ar.namewhat = r.funcname;
                    ar.name = r.name;
                }
                break;
            }
            case 'L':
            case 'f':  /* handled by lua_getinfo */
                break;
            default: status = 0;  /* invalid option */
        }
    }

    return status;
};

const lua_getinfo = function(L, what, ar) {
    let status, cl, ci, func;
    swapextra(L);
    if (what[0] === '>'.charCodeAt(0)) {
        ci = null;
        func = L.stack[L.top - 1];
        assert(L, func.ttisfunction(), "function expected");
        what = what.slice(1);  /* skip the '>' */
        L.top--;  /* pop function */
    } else {
        ci = ar.i_ci;
        func = ci.func;
        assert(ci.func.ttisfunction());
    }

    cl = func.ttisclosure() ? func.value : null;
    status = auxgetinfo(L, what, ar, cl, ci);
    if (what.indexOf('f'.charCodeAt(0)) >= 0) {
        lobject.pushobj2s(L, func);
        assert(L.top <= L.ci.top, "stack overflow");
    }

    swapextra(L);
    if (what.indexOf('L'.charCodeAt(0)) >= 0)
        collectvalidlines(L, cl);

    return status;
};

const kname = function(p, pc, c) {
    let r = {
        name: null,
        funcname: null
    };

    if (lopcodes.ISK(c)) {  /* is 'c' a constant? */
        let kvalue = p.k[lopcodes.INDEXK(c)];
        if (kvalue.ttisstring()) {  /* literal constant? */
            r.name = kvalue.svalue();  /* it is its own name */
            return r;
        }
        /* else no reasonable name found */
    } else {  /* 'c' is a register */
        let what = getobjname(p, pc, c); /* search for 'c' */
        if (what && what.funcname[0] === 'c'.charCodeAt(0)) {  /* found a constant name? */
            return what;  /* 'name' already filled */
        }
        /* else no reasonable name found */
    }
    r.name = [defs.char["?"]];
    return r;  /* no reasonable name found */
};

const filterpc = function(pc, jmptarget) {
    if (pc < jmptarget)  /* is code conditional (inside a jump)? */
        return -1;  /* cannot know who sets that register */
    else return pc;  /* current position sets that register */
};

/*
** try to find last instruction before 'lastpc' that modified register 'reg'
*/
const findsetreg = function(p, lastpc, reg) {
    let setreg = -1;  /* keep last instruction that changed 'reg' */
    let jmptarget = 0;  /* any code before this address is conditional */
    let OCi = lopcodes.OpCodesI;
    for (let pc = 0; pc < lastpc; pc++) {
        let i = p.code[pc];
        let a = i.A;
        switch (i.opcode) {
            case OCi.OP_LOADNIL: {
                let b = i.B;
                if (a <= reg && reg <= a + b)  /* set registers from 'a' to 'a+b' */
                    setreg = filterpc(pc, jmptarget);
                break;
            }
            case OCi.OP_TFORCALL: {
                if (reg >= a + 2)  /* affect all regs above its base */
                    setreg = filterpc(pc, jmptarget);
                break;
            }
            case OCi.OP_CALL:
            case OCi.OP_TAILCALL: {
                if (reg >= a)  /* affect all registers above base */
                    setreg = filterpc(pc, jmptarget);
                break;
            }
            case OCi.OP_JMP: {
                let b = i.sBx;
                let dest = pc + 1 + b;
                /* jump is forward and do not skip 'lastpc'? */
                if (pc < dest && dest <= lastpc) {
                    if (dest > jmptarget)
                        jmptarget = dest;  /* update 'jmptarget' */
                }
                break;
            }
            default:
                if (lopcodes.testAMode(i.opcode) && reg === a)
                    setreg = filterpc(pc, jmptarget);
                break;
        }
    }

    return setreg;
};


const getobjname = function(p, lastpc, reg) {
    let r = {
        name: lfunc.luaF_getlocalname(p, reg + 1, lastpc),
        funcname: null
    };

    if (r.name) {  /* is a local? */
        r.funcname = defs.to_luastring("local", true);
        return r;
    }

    /* else try symbolic execution */
    let pc = findsetreg(p, lastpc, reg);
    let OCi = lopcodes.OpCodesI;
    if (pc !== -1) {  /* could find instruction? */
        let i = p.code[pc];
        switch (i.opcode) {
            case OCi.OP_MOVE: {
                let b = i.B;  /* move from 'b' to 'a' */
                if (b < i.A)
                    return getobjname(p, pc, b);  /* get name for 'b' */
                break;
            }
            case OCi.OP_GETTABUP:
            case OCi.OP_GETTABLE: {
                let k = i.C;  /* key index */
                let t = i.B;  /* table index */
                let vn = i.opcode === OCi.OP_GETTABLE ? lfunc.luaF_getlocalname(p, t + 1, pc) : upvalname(p, t);
                r.name = kname(p, pc, k).name;
                r.funcname = vn && defs.to_jsstring(vn) === "_ENV" ? defs.to_luastring("global", true) : defs.to_luastring("field", true);
                return r;
            }
            case OCi.OP_GETUPVAL: {
                r.name = upvalname(p, i.B);
                r.funcname = defs.to_luastring("upvalue", true);
                return r;
            }
            case OCi.OP_LOADK:
            case OCi.OP_LOADKX: {
                let b = i.opcode === OCi.OP_LOADK ? i.Bx : p.code[pc + 1].Ax;
                if (p.k[b].ttisstring()) {
                    r.name = p.k[b].svalue();
                    r.funcname = defs.to_luastring("constant", true);
                    return r;
                }
                break;
            }
            case OCi.OP_SELF: {
                let k = i.C;
                r.name = kname(p, pc, k).name;
                r.funcname = defs.to_luastring("method", true);
                return r;
            }
            default: break;
        }
    }

    return null;
};

/*
** Try to find a name for a function based on the code that called it.
** (Only works when function was called by a Lua function.)
** Returns what the name is (e.g., "for iterator", "method",
** "metamethod") and sets '*name' to point to the name.
*/
const funcnamefromcode = function(L, ci) {
    let r = {
        name: null,
        funcname: null
    };

    let tm = 0;  /* (initial value avoids warnings) */
    let p = ci.func.value.p;  /* calling function */
    let pc = currentpc(ci);  /* calling instruction index */
    let i = p.code[pc];  /* calling instruction */
    let OCi = lopcodes.OpCodesI;

    if (ci.callstatus & lstate.CIST_HOOKED) {
        r.name = [defs.char["?"]];
        r.funcname = defs.to_luastring("hook", true);
        return r;
    }

    switch (i.opcode) {
        case OCi.OP_CALL:
        case OCi.OP_TAILCALL:
            return getobjname(p, pc, i.A);  /* get function name */
        case OCi.OP_TFORCALL:
            r.name = defs.to_luastring("for iterator", true);
            r.funcname = defs.to_luastring("for iterator", true);
            return r;
        /* other instructions can do calls through metamethods */
        case OCi.OP_SELF:
        case OCi.OP_GETTABUP:
        case OCi.OP_GETTABLE:
            tm = ltm.TMS.TM_INDEX;
            break;
        case OCi.OP_SETTABUP:
        case OCi.OP_SETTABLE:
            tm = ltm.TMS.TM_NEWINDEX;
            break;
        case OCi.OP_ADD:    tm = ltm.TMS.TM_ADD;    break;
        case OCi.OP_SUB:    tm = ltm.TMS.TM_SUB;    break;
        case OCi.OP_MUL:    tm = ltm.TMS.TM_MUL;    break;
        case OCi.OP_MOD:    tm = ltm.TMS.TM_MOD;    break;
        case OCi.OP_POW:    tm = ltm.TMS.TM_POW;    break;
        case OCi.OP_DIV:    tm = ltm.TMS.TM_DIV;    break;
        case OCi.OP_IDIV:   tm = ltm.TMS.TM_IDIV;   break;
        case OCi.OP_BAND:   tm = ltm.TMS.TM_BAND;   break;
        case OCi.OP_BOR:    tm = ltm.TMS.TM_BOR;    break;
        case OCi.OP_BXOR:   tm = ltm.TMS.TM_BXOR;   break;
        case OCi.OP_SHL:    tm = ltm.TMS.TM_SHL;    break;
        case OCi.OP_SHR:    tm = ltm.TMS.TM_SHR;    break;
        case OCi.OP_UNM:    tm = ltm.TMS.TM_UNM;    break;
        case OCi.OP_BNOT:   tm = ltm.TMS.TM_BNOT;   break;
        case OCi.OP_LEN:    tm = ltm.TMS.TM_LEN;    break;
        case OCi.OP_CONCAT: tm = ltm.TMS.TM_CONCAT; break;
        case OCi.OP_EQ:     tm = ltm.TMS.TM_EQ;     break;
        case OCi.OP_LT:     tm = ltm.TMS.TM_LT;     break;
        case OCi.OP_LE:     tm = ltm.TMS.TM_LE;     break;
        default:
            return null;  /* cannot find a reasonable name */
    }

    r.name = L.l_G.tmname[tm].getstr();
    r.funcname = defs.to_luastring("metamethod", true);
    return r;
};

const isinstack = function(L, ci, o) {
    for (let i = ci.l_base; i < ci.top; i++) {
        if (L.stack[i] === o)
            return i;
    }

    return false;
};

/*
** Checks whether value 'o' came from an upvalue. (That can only happen
** with instructions OP_GETTABUP/OP_SETTABUP, which operate directly on
** upvalues.)
*/
const getupvalname = function(L, ci, o) {
    let c = ci.func.value;
    for (let i = 0; i < c.nupvalues; i++) {
        if (c.upvals[i].v === o) {
            return {
                name: upvalname(c.p, i),
                funcname: defs.to_luastring('upvalue', true)
            };
        }
    }

    return null;
};

const varinfo = function(L, o) {
    let ci = L.ci;
    let kind = null;
    if (ci.callstatus & lstate.CIST_LUA) {
        kind = getupvalname(L, ci, o);  /* check whether 'o' is an upvalue */
        let stkid = isinstack(L, ci, o);
        if (!kind && stkid)  /* no? try a register */
            kind = getobjname(ci.func.value.p, currentpc(ci), stkid - ci.l_base);
    }

    return kind ? lobject.luaO_pushfstring(L, defs.to_luastring(" (%s '%s')", true), kind.funcname, kind.name) : defs.to_luastring("", true);
};

const luaG_typeerror = function(L, o, op) {
    let t = ltm.luaT_objtypename(L, o);
    luaG_runerror(L, defs.to_luastring("attempt to %s a %s value%s", true), op, t, varinfo(L, o));
};

const luaG_concaterror = function(L, p1, p2) {
    if (p1.ttisstring() || lvm.cvt2str(p1)) p1 = p2;
    luaG_typeerror(L, p1, defs.to_luastring('concatenate', true));
};

/*
** Error when both values are convertible to numbers, but not to integers
*/
const luaG_opinterror = function(L, p1, p2, msg) {
    if (lvm.tonumber(p1) === false)
        p2 = p1;
    luaG_typeerror(L, p2, msg);
};

const luaG_ordererror = function(L, p1, p2) {
    let t1 = ltm.luaT_objtypename(L, p1);
    let t2 = ltm.luaT_objtypename(L, p2);
    if (t1.join() === t2.join())
        luaG_runerror(L, defs.to_luastring("attempt to compare two %s values", true), t1);
    else
        luaG_runerror(L, defs.to_luastring("attempt to compare %s with %s", true), t1, t2);
};

/* add src:line information to 'msg' */
const luaG_addinfo = function(L, msg, src, line) {
    let buff;
    if (src)
        buff = lobject.luaO_chunkid(src.getstr(), luaconf.LUA_IDSIZE);
    else
        buff = ['?'.charCodeAt(0)];

    return lobject.luaO_pushfstring(L, defs.to_luastring("%s:%d: %s", true), buff, line, msg);
};

const luaG_runerror = function(L, fmt, ...argp) {
    let ci = L.ci;
    let msg = lobject.luaO_pushvfstring(L, fmt, argp);
    if (ci.callstatus & lstate.CIST_LUA)  /* if Lua function, add source:line information */
        luaG_addinfo(L, msg, ci.func.value.p.source, currentline(ci));
    luaG_errormsg(L);
};

const luaG_errormsg = function(L) {
    if (L.errfunc !== 0) {  /* is there an error handling function? */
        let errfunc = L.errfunc;
        lobject.pushobj2s(L, L.stack[L.top - 1]); /* move argument */
        lobject.setobjs2s(L, L.top - 2, errfunc); /* push function */
        ldo.luaD_callnoyield(L, L.top - 2, 1);
    }

    ldo.luaD_throw(L, TS.LUA_ERRRUN);
};

/*
** Error when both values are convertible to numbers, but not to integers
*/
const luaG_tointerror = function(L, p1, p2) {
    let temp = lvm.tointeger(p1);
    if (temp === false)
        p2 = p1;
    luaG_runerror(L, defs.to_luastring("number%s has no integer representation", true), varinfo(L, p2));
};

const luaG_traceexec = function(L) {
    let ci = L.ci;
    let mask = L.hookmask;
    let counthook = (--L.hookcount === 0 && (mask & defs.LUA_MASKCOUNT));
    if (counthook)
        L.hookcount = L.basehookcount;  /* reset count */
    else if (!(mask & defs.LUA_MASKLINE))
        return;  /* no line hook and count != 0; nothing to be done */
    if (ci.callstatus & lstate.CIST_HOOKYIELD) {  /* called hook last time? */
        ci.callstatus &= ~lstate.CIST_HOOKYIELD;  /* erase mark */
        return;  /* do not call hook again (VM yielded, so it did not move) */
    }
    if (counthook)
        ldo.luaD_hook(L, defs.LUA_HOOKCOUNT, -1);  /* call count hook */
    if (mask & defs.LUA_MASKLINE) {
        let p = ci.func.value.p;
        let npc = ci.l_savedpc - 1; // pcRel(ci.u.l.savedpc, p);
        let newline = p.lineinfo.length !== 0 ? p.lineinfo[npc] : -1;
        if (npc === 0 ||  /* call linehook when enter a new function, */
            ci.l_savedpc <= L.oldpc ||  /* when jump back (loop), or when */
            newline !== (p.lineinfo.length !== 0 ? p.lineinfo[L.oldpc - 1] : -1))  /* enter a new line */
            ldo.luaD_hook(L, defs.LUA_HOOKLINE, newline);  /* call line hook */
    }
    L.oldpc = ci.l_savedpc;
    if (L.status === TS.LUA_YIELD) {  /* did hook yield? */
        if (counthook)
            L.hookcount = 1;  /* undo decrement to zero */
        ci.l_savedpc--;  /* undo increment (resume will increment it again) */
        ci.callstatus |= lstate.CIST_HOOKYIELD;  /* mark that it yielded */
        ci.funcOff = L.top - 1;  /* protect stack below results */
        ci.func = L.stack[ci.funcOff];
        ldo.luaD_throw(L, TS.LUA_YIELD);
    }
};

module.exports.luaG_addinfo     = luaG_addinfo;
module.exports.luaG_concaterror = luaG_concaterror;
module.exports.luaG_errormsg    = luaG_errormsg;
module.exports.luaG_opinterror  = luaG_opinterror;
module.exports.luaG_ordererror  = luaG_ordererror;
module.exports.luaG_runerror    = luaG_runerror;
module.exports.luaG_tointerror  = luaG_tointerror;
module.exports.luaG_traceexec   = luaG_traceexec;
module.exports.luaG_typeerror   = luaG_typeerror;
module.exports.lua_gethook      = lua_gethook;
module.exports.lua_gethookcount = lua_gethookcount;
module.exports.lua_gethookmask  = lua_gethookmask;
module.exports.lua_getinfo      = lua_getinfo;
module.exports.lua_getlocal     = lua_getlocal;
module.exports.lua_getstack     = lua_getstack;
module.exports.lua_sethook      = lua_sethook;
module.exports.lua_setlocal     = lua_setlocal;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */

const assert  = __webpack_require__(0);

const defs    = __webpack_require__(1);
const lobject = __webpack_require__(3);
const CT      = defs.constant_types;

class Proto {

    constructor(L) {
        this.id = L.l_G.id_counter++;
        this.k = [];              // constants used by the function
        this.p = [];              // functions defined inside the function
        this.code = [];           // opcodes
        this.cache = null;        // last-created closure with this prototype
        this.lineinfo = [];       // map from opcodes to source lines (debug information)
        this.upvalues = [];       // upvalue information
        this.numparams = 0;       // number of fixed parameters
        this.is_vararg = false;
        this.maxstacksize = 0;    // number of registers needed by this function
        this.locvars = [];        // information about local variables (debug information)
        this.linedefined = 0;     // debug information
        this.lastlinedefined = 0; // debug information
        this.source = null;       // used for debug information
    }

}

class UpVal {

    constructor(L) {
        this.id = L.l_G.id_counter++;
        this.v = void 0; /* if open: reference to TValue on stack. if closed: TValue */
        this.vOff = void 0; /* if open: index on stack. if closed: undefined */
        this.refcount = 0;
        this.open_next = null; /* linked list (when open) */
    }

    isopen() {
        return this.vOff !== void 0;
    }

}

const luaF_newLclosure = function(L, n) {
    let c = new lobject.LClosure(L, n);
    return c;
};


const luaF_findupval = function(L, level) {
    let prevp;
    let p = L.openupval;
    while (p !== null && p.vOff >= level) {
        assert(p.isopen());
        if (p.vOff === level) /* found a corresponding upvalue? */
            return p; /* return it */
        prevp = p;
        p = p.open_next;
    }
    /* not found: create a new upvalue */
    let uv = new UpVal(L);
    /* link it to list of open upvalues */
    uv.open_next = p;
    if (prevp)
        prevp.open_next = uv;
    else
        L.openupval = uv;
    uv.v = L.stack[level]; /* current value lives in the stack */
    uv.vOff = level;
    return uv;
};

const luaF_close = function(L, level) {
    while (L.openupval !== null && L.openupval.vOff >= level) {
        let uv = L.openupval;
        assert(uv.isopen());
        L.openupval = uv.open_next; /* remove from 'open' list */
        if (uv.refcount === 0) { /* no references? */
            /* free upvalue */
            uv.v = void 0;
            uv.open_next = null;
        } else {
            let from = uv.v;
            uv.v = new lobject.TValue(from.type, from.value);
        }
        uv.vOff = void 0;
    }
};

/*
** fill a closure with new closed upvalues
*/
const luaF_initupvals = function(L, cl) {
    for (let i = 0; i < cl.nupvalues; i++) {
        let uv = new UpVal(L);
        uv.refcount = 1;
        uv.v = new lobject.TValue(CT.LUA_TNIL, null);
        cl.upvals[i] = uv;
    }
};

/*
** Look for n-th local variable at line 'line' in function 'func'.
** Returns null if not found.
*/
const luaF_getlocalname = function(f, local_number, pc) {
    for (let i = 0; i < f.locvars.length && f.locvars[i].startpc <= pc; i++) {
        if (pc < f.locvars[i].endpc) {  /* is variable active? */
            local_number--;
            if (local_number === 0)
                return f.locvars[i].varname.getstr();
        }
    }
    return null;  /* not found */
};


module.exports.MAXUPVAL          = 255;
module.exports.Proto             = Proto;
module.exports.UpVal             = UpVal;
module.exports.luaF_findupval    = luaF_findupval;
module.exports.luaF_close        = luaF_close;
module.exports.luaF_getlocalname = luaF_getlocalname;
module.exports.luaF_initupvals   = luaF_initupvals;
module.exports.luaF_newLclosure  = luaF_newLclosure;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert               = __webpack_require__(0);

const defs                 = __webpack_require__(1);
const lobject              = __webpack_require__(3);
const ldo                  = __webpack_require__(7);
const lapi                 = __webpack_require__(22);
const ltable               = __webpack_require__(8);
const lfunc                = __webpack_require__(12);
const ltm                  = __webpack_require__(14);
const CT                   = defs.constant_types;
const TS                   = defs.thread_status;
const LUA_NUMTAGS          = CT.LUA_NUMTAGS;

const EXTRA_STACK = 5;

const BASIC_STACK_SIZE = 2 * defs.LUA_MINSTACK;

class CallInfo {

    constructor() {
        this.func = null;
        this.funcOff = NaN;
        this.top = NaN;
        this.previous = null;
        this.next = null;

        /* only for Lua functions */
        this.l_base = NaN; /* base for this function */
        this.l_code = null; /* reference to this.func.p.code */
        this.l_savedpc = NaN; /* offset into l_code */
        /* only for JS functions */
        this.c_k = null;  /* continuation in case of yields */
        this.c_old_errfunc = null;
        this.c_ctx = null;  /* context info. in case of yields */

        this.nresults = NaN;
        this.callstatus = NaN;
    }

}

class lua_State {

    constructor(g) {
        this.id = g.id_counter++;

        this.base_ci = new CallInfo(); /* CallInfo for first level (C calling Lua) */
        this.top = NaN; /* first free slot in the stack */
        this.stack_last = NaN; /* last free slot in the stack */
        this.oldpc = NaN; /* last pc traced */

        /* preinit_thread */
        this.l_G = g;
        this.stack = null;
        this.ci = null;
        this.errorJmp = null;
        this.nCcalls = 0;
        this.hook = null;
        this.hookmask = 0;
        this.basehookcount = 0;
        this.allowhook = 1;
        this.hookcount = this.basehookcount;
        this.openupval = null;
        this.nny = 1;
        this.status = TS.LUA_OK;
        this.errfunc = 0;
    }

}

class global_State {

    constructor() {
        this.id_counter = 0; /* used to give objects unique ids */

        this.mainthread = null;
        this.l_registry = new lobject.TValue(CT.LUA_TNIL, null);
        this.panic = null;
        this.atnativeerror = null;
        this.version = null;
        this.tmname = new Array(ltm.TMS.TM_N);
        this.mt = new Array(LUA_NUMTAGS);
    }

}

const luaE_extendCI = function(L) {
    let ci = new CallInfo();
    L.ci.next = ci;
    ci.previous = L.ci;
    ci.next = null;
    L.ci = ci;
    return ci;
};

const luaE_freeCI = function(L) {
    let ci = L.ci;
    ci.next = null;
};

const stack_init = function(L1, L) {
    L1.stack = new Array(BASIC_STACK_SIZE);
    L1.top = 0;
    L1.stack_last = BASIC_STACK_SIZE - EXTRA_STACK;
    /* initialize first ci */
    let ci = L1.base_ci;
    ci.next = ci.previous = null;
    ci.callstatus = 0;
    ci.funcOff = L1.top;
    ci.func = L1.stack[L1.top];
    L1.stack[L1.top++] = new lobject.TValue(CT.LUA_TNIL, null);
    ci.top = L1.top + defs.LUA_MINSTACK;
    L1.ci = ci;
};

const freestack = function(L) {
    L.ci = L.base_ci;
    luaE_freeCI(L);
    L.stack = null;
};

/*
** Create registry table and its predefined values
*/
const init_registry = function(L, g) {
    let registry = ltable.luaH_new(L);
    g.l_registry.sethvalue(registry);
    ltable.luaH_setint(registry, defs.LUA_RIDX_MAINTHREAD, new lobject.TValue(CT.LUA_TTHREAD, L));
    ltable.luaH_setint(registry, defs.LUA_RIDX_GLOBALS, new lobject.TValue(CT.LUA_TTABLE, ltable.luaH_new(L)));
};

/*
** open parts of the state that may cause memory-allocation errors.
** ('g->version' !== NULL flags that the state was completely build)
*/
const f_luaopen = function(L) {
    let g = L.l_G;
    stack_init(L, L);
    init_registry(L, g);
    ltm.luaT_init(L);
    g.version = lapi.lua_version(null);
};

const lua_newthread = function(L) {
    let g = L.l_G;
    let L1 = new lua_State(g);
    L.stack[L.top] = new lobject.TValue(CT.LUA_TTHREAD, L1);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    L1.hookmask = L.hookmask;
    L1.basehookcount = L.basehookcount;
    L1.hook = L.hook;
    L1.hookcount = L1.basehookcount;
    stack_init(L1, L);
    return L1;
};

const luaE_freethread = function(L, L1) {
    lfunc.luaF_close(L1, L1.stack);
    freestack(L1);
};

const lua_newstate = function() {
    let g = new global_State();
    let L = new lua_State(g);
    g.mainthread = L;

    if (ldo.luaD_rawrunprotected(L, f_luaopen, null) !== TS.LUA_OK) {
        L = null;
    }

    return L;
};

const close_state = function(L) {
    lfunc.luaF_close(L, L.stack);  /* close all upvalues for this thread */
    freestack(L);
};

const lua_close = function(L) {
    L = L.l_G.mainthread;  /* only the main thread can be closed */
    close_state(L);
};

module.exports.lua_State       = lua_State;
module.exports.CallInfo        = CallInfo;
module.exports.CIST_OAH        = (1<<0);  /* original value of 'allowhook' */
module.exports.CIST_LUA        = (1<<1);  /* call is running a Lua function */
module.exports.CIST_HOOKED     = (1<<2);  /* call is running a debug hook */
module.exports.CIST_FRESH      = (1<<3);  /* call is running on a fresh invocation of luaV_execute */
module.exports.CIST_YPCALL     = (1<<4);  /* call is a yieldable protected call */
module.exports.CIST_TAIL       = (1<<5);  /* call was tail called */
module.exports.CIST_HOOKYIELD  = (1<<6);  /* last hook called yielded */
module.exports.CIST_LEQ        = (1<<7);  /* using __lt for __le */
module.exports.CIST_FIN        = (1<<8);   /* call is running a finalizer */
module.exports.EXTRA_STACK     = EXTRA_STACK;
module.exports.lua_close       = lua_close;
module.exports.lua_newstate    = lua_newstate;
module.exports.lua_newthread   = lua_newthread;
module.exports.luaE_extendCI   = luaE_extendCI;
module.exports.luaE_freeCI     = luaE_freeCI;
module.exports.luaE_freethread = luaE_freethread;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert  = __webpack_require__(0);

const defs    = __webpack_require__(1);
const lobject = __webpack_require__(3);
const ldo     = __webpack_require__(7);
const lstate  = __webpack_require__(13);
const lstring = __webpack_require__(9);
const ltable  = __webpack_require__(8);
const ldebug  = __webpack_require__(11);
const lvm     = __webpack_require__(15);
const CT      = defs.constant_types;

const luaT_typenames_ = [
    "no value",
    "nil",
    "boolean",
    "userdata",
    "number",
    "string",
    "table",
    "function",
    "userdata",
    "thread",
    "proto" /* this last case is used for tests only */
].map(e => defs.to_luastring(e));

const ttypename = function(t) {
    return luaT_typenames_[t + 1];
};


/*
* WARNING: if you change the order of this enumeration,
* grep "ORDER TM" and "ORDER OP"
*/
const TMS = {
    TM_INDEX:    0,
    TM_NEWINDEX: 1,
    TM_GC:       2,
    TM_MODE:     3,
    TM_LEN:      4,
    TM_EQ:       5,  /* last tag method with fast access */
    TM_ADD:      6,
    TM_SUB:      7,
    TM_MUL:      8,
    TM_MOD:      9,
    TM_POW:     10,
    TM_DIV:     11,
    TM_IDIV:    12,
    TM_BAND:    13 ,
    TM_BOR:     14,
    TM_BXOR:    15,
    TM_SHL:     16,
    TM_SHR:     17,
    TM_UNM:     18,
    TM_BNOT:    19,
    TM_LT:      20,
    TM_LE:      21,
    TM_CONCAT:  22,
    TM_CALL:    23,
    TM_N:       24  /* number of elements in the enum */
};

const luaT_init = function(L) {
    L.l_G.tmname[TMS.TM_INDEX]    = new lstring.luaS_new(L, defs.to_luastring("__index", true));
    L.l_G.tmname[TMS.TM_NEWINDEX] = new lstring.luaS_new(L, defs.to_luastring("__newindex", true));
    L.l_G.tmname[TMS.TM_GC]       = new lstring.luaS_new(L, defs.to_luastring("__gc", true));
    L.l_G.tmname[TMS.TM_MODE]     = new lstring.luaS_new(L, defs.to_luastring("__mode", true));
    L.l_G.tmname[TMS.TM_LEN]      = new lstring.luaS_new(L, defs.to_luastring("__len", true));
    L.l_G.tmname[TMS.TM_EQ]       = new lstring.luaS_new(L, defs.to_luastring("__eq", true));
    L.l_G.tmname[TMS.TM_ADD]      = new lstring.luaS_new(L, defs.to_luastring("__add", true));
    L.l_G.tmname[TMS.TM_SUB]      = new lstring.luaS_new(L, defs.to_luastring("__sub", true));
    L.l_G.tmname[TMS.TM_MUL]      = new lstring.luaS_new(L, defs.to_luastring("__mul", true));
    L.l_G.tmname[TMS.TM_MOD]      = new lstring.luaS_new(L, defs.to_luastring("__mod", true));
    L.l_G.tmname[TMS.TM_POW]      = new lstring.luaS_new(L, defs.to_luastring("__pow", true));
    L.l_G.tmname[TMS.TM_DIV]      = new lstring.luaS_new(L, defs.to_luastring("__div", true));
    L.l_G.tmname[TMS.TM_IDIV]     = new lstring.luaS_new(L, defs.to_luastring("__idiv", true));
    L.l_G.tmname[TMS.TM_BAND]     = new lstring.luaS_new(L, defs.to_luastring("__band", true));
    L.l_G.tmname[TMS.TM_BOR]      = new lstring.luaS_new(L, defs.to_luastring("__bor", true));
    L.l_G.tmname[TMS.TM_BXOR]     = new lstring.luaS_new(L, defs.to_luastring("__bxor", true));
    L.l_G.tmname[TMS.TM_SHL]      = new lstring.luaS_new(L, defs.to_luastring("__shl", true));
    L.l_G.tmname[TMS.TM_SHR]      = new lstring.luaS_new(L, defs.to_luastring("__shr", true));
    L.l_G.tmname[TMS.TM_UNM]      = new lstring.luaS_new(L, defs.to_luastring("__unm", true));
    L.l_G.tmname[TMS.TM_BNOT]     = new lstring.luaS_new(L, defs.to_luastring("__bnot", true));
    L.l_G.tmname[TMS.TM_LT]       = new lstring.luaS_new(L, defs.to_luastring("__lt", true));
    L.l_G.tmname[TMS.TM_LE]       = new lstring.luaS_new(L, defs.to_luastring("__le", true));
    L.l_G.tmname[TMS.TM_CONCAT]   = new lstring.luaS_new(L, defs.to_luastring("__concat", true));
    L.l_G.tmname[TMS.TM_CALL]     = new lstring.luaS_new(L, defs.to_luastring("__call", true));
};

/*
** Return the name of the type of an object. For tables and userdata
** with metatable, use their '__name' metafield, if present.
*/
const __name = defs.to_luastring('__name', true);
const luaT_objtypename = function(L, o) {
    let mt;
    if ((o.ttistable() && (mt = o.value.metatable) !== null) ||
        (o.ttisfulluserdata() && (mt = o.value.metatable) !== null)) {
        let name = ltable.luaH_getstr(mt, lstring.luaS_bless(L, __name));
        if (name.ttisstring())
            return name.svalue();
    }
    return ttypename(o.ttnov());
};

const luaT_callTM = function(L, f, p1, p2, p3, hasres) {
    let func = L.top;

    lobject.pushobj2s(L, f); /* push function (assume EXTRA_STACK) */
    lobject.pushobj2s(L, p1); /* 1st argument */
    lobject.pushobj2s(L, p2); /* 2nd argument */

    if (!hasres)  /* no result? 'p3' is third argument */
        lobject.pushobj2s(L, p3); /* 3rd argument */

    if (L.ci.callstatus & lstate.CIST_LUA)
        ldo.luaD_call(L, func, hasres);
    else
        ldo.luaD_callnoyield(L, func, hasres);

    if (hasres) {  /* if has result, move it to its place */
        let tv = L.stack[L.top-1];
        delete L.stack[--L.top];
        p3.setfrom(tv);
    }
};

const luaT_callbinTM = function(L, p1, p2, res, event) {
    let tm = luaT_gettmbyobj(L, p1, event);
    if (tm.ttisnil())
        tm = luaT_gettmbyobj(L, p2, event);
    if (tm.ttisnil()) return false;
    luaT_callTM(L, tm, p1, p2, res, 1);
    return true;
};

const luaT_trybinTM = function(L, p1, p2, res, event) {
    if (!luaT_callbinTM(L, p1, p2, res, event)) {
        switch (event) {
            case TMS.TM_CONCAT:
                ldebug.luaG_concaterror(L, p1, p2);
            case TMS.TM_BAND: case TMS.TM_BOR: case TMS.TM_BXOR:
            case TMS.TM_SHL: case TMS.TM_SHR: case TMS.TM_BNOT: {
                let n1 = lvm.tonumber(p1);
                let n2 = lvm.tonumber(p2);
                if (n1 !== false && n2 !== false)
                    ldebug.luaG_tointerror(L, p1, p2);
                else
                    ldebug.luaG_opinterror(L, p1, p2, defs.to_luastring("perform bitwise operation on", true));
            }
            default:
                ldebug.luaG_opinterror(L, p1, p2, defs.to_luastring("perform arithmetic on", true));
        }
    }
};

const luaT_callorderTM = function(L, p1, p2, event) {
    let res = new lobject.TValue();
    if (!luaT_callbinTM(L, p1, p2, res, event))
        return null;
    else
        return !res.l_isfalse();
};

const fasttm = function(l, et, e) {
    return et === null ? null :
        (et.flags & (1 << e)) ? null : luaT_gettm(et, e, l.l_G.tmname[e]);
};

const luaT_gettm = function(events, event, ename) {
    const tm = ltable.luaH_getstr(events, ename);
    assert(event <= TMS.TM_EQ);
    if (tm.ttisnil()) {  /* no tag method? */
        events.flags |= 1<<event;  /* cache this fact */
        return null;
    }
    else return tm;
};

const luaT_gettmbyobj = function(L, o, event) {
    let mt;
    switch(o.ttnov()) {
        case CT.LUA_TTABLE:
        case CT.LUA_TUSERDATA:
            mt = o.value.metatable;
            break;
        default:
            mt = L.l_G.mt[o.ttnov()];
    }

    return mt ? ltable.luaH_getstr(mt, L.l_G.tmname[event]) : lobject.luaO_nilobject;
};

module.exports.fasttm           = fasttm;
module.exports.TMS              = TMS;
module.exports.luaT_callTM      = luaT_callTM;
module.exports.luaT_callbinTM   = luaT_callbinTM;
module.exports.luaT_trybinTM    = luaT_trybinTM;
module.exports.luaT_callorderTM = luaT_callorderTM;
module.exports.luaT_gettm       = luaT_gettm;
module.exports.luaT_gettmbyobj  = luaT_gettmbyobj;
module.exports.luaT_init        = luaT_init;
module.exports.luaT_objtypename = luaT_objtypename;
module.exports.ttypename        = ttypename;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert = __webpack_require__(0);

const defs        = __webpack_require__(1);
const lopcodes    = __webpack_require__(16);
const luaconf     = __webpack_require__(10);
const lobject     = __webpack_require__(3);
const lfunc       = __webpack_require__(12);
const lstate      = __webpack_require__(13);
const lstring     = __webpack_require__(9);
const llimit      = __webpack_require__(5);
const ldo         = __webpack_require__(7);
const ltm         = __webpack_require__(14);
const ltable      = __webpack_require__(8);
const ldebug      = __webpack_require__(11);
const CT          = defs.constant_types;
const LUA_MULTRET = defs.LUA_MULTRET;

/*
** finish execution of an opcode interrupted by an yield
*/
const luaV_finishOp = function(L) {
    let ci = L.ci;
    let OCi = lopcodes.OpCodesI;
    let base = ci.l_base;
    let inst = ci.l_code[ci.l_savedpc - 1];  /* interrupted instruction */
    let op = inst.opcode;

    switch (op) {  /* finish its execution */
        case OCi.OP_ADD: case OCi.OP_SUB: case OCi.OP_MUL: case OCi.OP_DIV: case OCi.OP_IDIV:
        case OCi.OP_BAND: case OCi.OP_BOR: case OCi.OP_BXOR: case OCi.OP_SHL: case OCi.OP_SHR:
        case OCi.OP_MOD: case OCi.OP_POW:
        case OCi.OP_UNM: case OCi.OP_BNOT: case OCi.OP_LEN:
        case OCi.OP_GETTABUP: case OCi.OP_GETTABLE: case OCi.OP_SELF: {
            lobject.setobjs2s(L, base + inst.A, L.top-1);
            delete L.stack[--L.top];
            break;
        }
        case OCi.OP_LE: case OCi.OP_LT: case OCi.OP_EQ: {
            let res = !L.stack[L.top - 1].l_isfalse();
            delete L.stack[--L.top];
            if (ci.callstatus & lstate.CIST_LEQ) {  /* "<=" using "<" instead? */
                assert(op === OCi.OP_LE);
                ci.callstatus ^= lstate.CIST_LEQ;  /* clear mark */
                res = !res;  /* negate result */
            }
            assert(ci.l_code[ci.l_savedpc].opcode === OCi.OP_JMP);
            if (res !== (inst.A ? true : false))  /* condition failed? */
                ci.l_savedpc++;  /* skip jump instruction */
            break;
        }
        case OCi.OP_CONCAT: {
            let top = L.top - 1;  /* top when 'luaT_trybinTM' was called */
            let b = inst.B;  /* first element to concatenate */
            let total = top - 1 - (base + b);  /* yet to concatenate */
            lobject.setobjs2s(L, top - 2, top);  /* put TM result in proper position */
            if (total > 1) {  /* are there elements to concat? */
                L.top = top - 1;  /* top is one after last element (at top-2) */
                luaV_concat(L, total);  /* concat them (may yield again) */
            }
            /* move final result to final position */
            lobject.setobjs2s(L, ci.l_base + inst.A, L.top - 1);
            ldo.adjust_top(L, ci.top);  /* restore top */
            break;
        }
        case OCi.OP_TFORCALL: {
            assert(ci.l_code[ci.l_savedpc].opcode === OCi.OP_TFORLOOP);
            ldo.adjust_top(L, ci.top);  /* correct top */
            break;
        }
        case OCi.OP_CALL: {
            if (inst.C - 1 >= 0)  /* nresults >= 0? */
                ldo.adjust_top(L, ci.top);  /* adjust results */
            break;
        }
    }
};

const RA = function(L, base, i) {
   return base + i.A;
};

const RB = function(L, base, i) {
   return base + i.B;
};

const RC = function(L, base, i) {
   return base + i.C;
};

const RKB = function(L, base, k, i) {
    return lopcodes.ISK(i.B) ? k[lopcodes.INDEXK(i.B)] : L.stack[base + i.B];
};

const RKC = function(L, base, k, i) {
    return lopcodes.ISK(i.C) ? k[lopcodes.INDEXK(i.C)] : L.stack[base + i.C];
};

const luaV_execute = function(L) {
    const OCi = lopcodes.OpCodesI;
    let ci = L.ci;

    ci.callstatus |= lstate.CIST_FRESH;
    newframe:
    for (;;) {
        assert(ci === L.ci);
        let cl = ci.func.value;
        let k = cl.p.k;
        let base = ci.l_base;

        let i = ci.l_code[ci.l_savedpc++];

        if (L.hookmask & (defs.LUA_MASKLINE | defs.LUA_MASKCOUNT)) {
            ldebug.luaG_traceexec(L);
        }

        let ra = RA(L, base, i);
        let opcode = i.opcode;

        switch (opcode) {
            case OCi.OP_MOVE: {
                lobject.setobjs2s(L, ra, RB(L, base, i));
                break;
            }
            case OCi.OP_LOADK: {
                let konst = k[i.Bx];
                lobject.setobj2s(L, ra, konst);
                break;
            }
            case OCi.OP_LOADKX: {
                assert(ci.l_code[ci.l_savedpc].opcode === OCi.OP_EXTRAARG);
                let konst = k[ci.l_code[ci.l_savedpc++].Ax];
                lobject.setobj2s(L, ra, konst);
                break;
            }
            case OCi.OP_LOADBOOL: {
                L.stack[ra].setbvalue(i.B !== 0);

                if (i.C !== 0)
                    ci.l_savedpc++; /* skip next instruction (if C) */

                break;
            }
            case OCi.OP_LOADNIL: {
                for (let j = 0; j <= i.B; j++)
                    L.stack[ra + j].setnilvalue();
                break;
            }
            case OCi.OP_GETUPVAL: {
                let b = i.B;
                lobject.setobj2s(L, ra, cl.upvals[b].v);
                break;
            }
            case OCi.OP_GETTABUP: {
                let upval = cl.upvals[i.B].v;
                let rc = RKC(L, base, k, i);
                luaV_gettable(L, upval, rc, ra);
                break;
            }
            case OCi.OP_GETTABLE: {
                let rb = L.stack[RB(L, base, i)];
                let rc = RKC(L, base, k, i);
                luaV_gettable(L, rb, rc, ra);
                break;
            }
            case OCi.OP_SETTABUP: {
                let upval = cl.upvals[i.A].v;
                let rb = RKB(L, base, k, i);
                let rc = RKC(L, base, k, i);
                settable(L, upval, rb, rc);
                break;
            }
            case OCi.OP_SETUPVAL: {
                let uv = cl.upvals[i.B];
                uv.v.setfrom(L.stack[ra]);
                break;
            }
            case OCi.OP_SETTABLE: {
                let table = L.stack[ra];
                let key = RKB(L, base, k, i);
                let v = RKC(L, base, k, i);

                settable(L, table, key, v);
                break;
            }
            case OCi.OP_NEWTABLE: {
                L.stack[ra].sethvalue(ltable.luaH_new(L));
                break;
            }
            case OCi.OP_SELF: {
                let rb = RB(L, base, i);
                let rc = RKC(L, base, k, i);
                lobject.setobjs2s(L, ra + 1, rb);
                luaV_gettable(L, L.stack[rb], rc, ra);
                break;
            }
            case OCi.OP_ADD: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if (op1.ttisinteger() && op2.ttisinteger()) {
                    L.stack[ra].setivalue((op1.value + op2.value)|0);
                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(numberop1 + numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_ADD);
                }
                break;
            }
            case OCi.OP_SUB: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if (op1.ttisinteger() && op2.ttisinteger()) {
                    L.stack[ra].setivalue((op1.value - op2.value)|0);
                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(numberop1 - numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_SUB);
                }
                break;
            }
            case OCi.OP_MUL: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if (op1.ttisinteger() && op2.ttisinteger()) {
                    L.stack[ra].setivalue(Math.imul(op1.value, op2.value));
                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(numberop1 * numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_MUL);
                }
                break;
            }
            case OCi.OP_MOD: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if (op1.ttisinteger() && op2.ttisinteger()) {
                    L.stack[ra].setivalue(luaV_mod(L, op1.value, op2.value));
                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(llimit.luai_nummod(L, numberop1, numberop2));
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_MOD);
                }
                break;
            }
            case OCi.OP_POW: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(Math.pow(numberop1, numberop2));
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_POW);
                }
                break;
            }
            case OCi.OP_DIV: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(numberop1 / numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_DIV);
                }
                break;
            }
            case OCi.OP_IDIV: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if (op1.ttisinteger() && op2.ttisinteger()) {
                    L.stack[ra].setivalue(luaV_div(L, op1.value, op2.value));
                } else if ((numberop1 = tonumber(op1)) !== false && (numberop2 = tonumber(op2)) !== false) {
                    L.stack[ra].setfltvalue(Math.floor(numberop1 / numberop2));
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_IDIV);
                }
                break;
            }
            case OCi.OP_BAND: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
                    L.stack[ra].setivalue(numberop1 & numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_BAND);
                }
                break;
            }
            case OCi.OP_BOR: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
                    L.stack[ra].setivalue(numberop1 | numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_BOR);
                }
                break;
            }
            case OCi.OP_BXOR: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
                    L.stack[ra].setivalue(numberop1 ^ numberop2);
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_BXOR);
                }
                break;
            }
            case OCi.OP_SHL: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
                    L.stack[ra].setivalue(luaV_shiftl(numberop1, numberop2));
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_SHL);
                }
                break;
            }
            case OCi.OP_SHR: {
                let op1 = RKB(L, base, k, i);
                let op2 = RKC(L, base, k, i);
                let numberop1, numberop2;

                if ((numberop1 = tointeger(op1)) !== false && (numberop2 = tointeger(op2)) !== false) {
                    L.stack[ra].setivalue(luaV_shiftl(numberop1, -numberop2));
                } else {
                    ltm.luaT_trybinTM(L, op1, op2, L.stack[ra], ltm.TMS.TM_SHR);
                }
                break;
            }
            case OCi.OP_UNM: {
                let op = L.stack[RB(L, base, i)];
                let numberop;

                if (op.ttisinteger()) {
                    L.stack[ra].setivalue((-op.value)|0);
                } else if ((numberop = tonumber(op)) !== false) {
                    L.stack[ra].setfltvalue(-numberop);
                } else {
                    ltm.luaT_trybinTM(L, op, op, L.stack[ra], ltm.TMS.TM_UNM);
                }
                break;
            }
            case OCi.OP_BNOT: {
                let op = L.stack[RB(L, base, i)];

                if (op.ttisinteger()) {
                    L.stack[ra].setivalue(~op.value);
                } else {
                    ltm.luaT_trybinTM(L, op, op, L.stack[ra], ltm.TMS.TM_BNOT);
                }
                break;
            }
            case OCi.OP_NOT: {
                let op = L.stack[RB(L, base, i)];
                L.stack[ra].setbvalue(op.l_isfalse());
                break;
            }
            case OCi.OP_LEN: {
                luaV_objlen(L, L.stack[ra], L.stack[RB(L, base, i)]);
                break;
            }
            case OCi.OP_CONCAT: {
                let b = i.B;
                let c = i.C;
                L.top = base + c + 1; /* mark the end of concat operands */
                luaV_concat(L, c - b + 1);
                let rb = base + b;
                lobject.setobjs2s(L, ra, rb);
                ldo.adjust_top(L, ci.top); /* restore top */
                break;
            }
            case OCi.OP_JMP: {
                dojump(L, ci, i, 0);
                break;
            }
            case OCi.OP_EQ: {
                if (luaV_equalobj(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
                    ci.l_savedpc++;
                else
                    donextjump(L, ci);
                break;
            }
            case OCi.OP_LT: {
                if (luaV_lessthan(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
                    ci.l_savedpc++;
                else
                    donextjump(L, ci);
                break;
            }
            case OCi.OP_LE: {
                if (luaV_lessequal(L, RKB(L, base, k, i), RKC(L, base, k, i)) !== i.A)
                    ci.l_savedpc++;
                else
                    donextjump(L, ci);
                break;
            }
            case OCi.OP_TEST: {
                if (i.C ? L.stack[ra].l_isfalse() : !L.stack[ra].l_isfalse())
                    ci.l_savedpc++;
                else
                    donextjump(L, ci);
                break;
            }
            case OCi.OP_TESTSET: {
                let rbIdx = RB(L, base, i);
                let rb = L.stack[rbIdx];
                if (i.C ? rb.l_isfalse() : !rb.l_isfalse())
                    ci.l_savedpc++;
                else {
                    lobject.setobjs2s(L, ra, rbIdx);
                    donextjump(L, ci);
                }
                break;
            }
            case OCi.OP_CALL: {
                let b = i.B;
                let nresults = i.C - 1;
                if (b !== 0) ldo.adjust_top(L, ra+b);  /* else previous instruction set top */
                if (ldo.luaD_precall(L, ra, nresults)) {
                    if (nresults >= 0)
                        ldo.adjust_top(L, ci.top);  /* adjust results */
                } else {
                    ci = L.ci;
                    continue newframe;
                }

                break;
            }
            case OCi.OP_TAILCALL: {
                let b = i.B;
                if (b !== 0) ldo.adjust_top(L, ra+b);  /* else previous instruction set top */
                if (ldo.luaD_precall(L, ra, LUA_MULTRET)) { // JS function
                } else {
                    /* tail call: put called frame (n) in place of caller one (o) */
                    let nci = L.ci;
                    let oci = nci.previous;
                    let nfunc = nci.func;
                    let nfuncOff = nci.funcOff;
                    let ofuncOff = oci.funcOff;
                    let lim = nci.l_base + nfunc.value.p.numparams;
                    if (cl.p.p.length > 0) lfunc.luaF_close(L, oci.l_base);
                    for (let aux = 0; nfuncOff + aux < lim; aux++)
                        lobject.setobjs2s(L, ofuncOff + aux, nfuncOff + aux);
                    oci.l_base = ofuncOff + (nci.l_base - nfuncOff);
                    oci.top = ofuncOff + (L.top - nfuncOff);
                    ldo.adjust_top(L, oci.top);  /* correct top */
                    oci.l_code = nci.l_code;
                    oci.l_savedpc = nci.l_savedpc;
                    oci.callstatus |= lstate.CIST_TAIL;
                    oci.next = null;
                    ci = L.ci = oci;

                    assert(L.top === oci.l_base + L.stack[ofuncOff].value.p.maxstacksize);

                    continue newframe;
                }
                break;
            }
            case OCi.OP_RETURN: {
                if (cl.p.p.length > 0) lfunc.luaF_close(L, base);
                let b = ldo.luaD_poscall(L, ci, ra, (i.B !== 0 ? i.B - 1 : L.top - ra));

                if (ci.callstatus & lstate.CIST_FRESH)
                    return; /* external invocation: return */
                /* invocation via reentry: continue execution */
                ci = L.ci;
                if (b) ldo.adjust_top(L, ci.top);
                assert(ci.callstatus & lstate.CIST_LUA);
                assert(ci.l_code[ci.l_savedpc - 1].opcode === OCi.OP_CALL);
                continue newframe;
            }
            case OCi.OP_FORLOOP: {
                if (L.stack[ra].ttisinteger()) { /* integer loop? */
                    let step = L.stack[ra + 2].value;
                    let idx = (L.stack[ra].value + step)|0;
                    let limit = L.stack[ra + 1].value;

                    if (0 < step ? idx <= limit : limit <= idx) {
                        ci.l_savedpc += i.sBx;
                        L.stack[ra].chgivalue(idx);  /* update internal index... */
                        L.stack[ra + 3].setivalue(idx);
                    }
                } else { /* floating loop */
                    let step = L.stack[ra + 2].value;
                    let idx = L.stack[ra].value + step;
                    let limit = L.stack[ra + 1].value;

                    if (0 < step ? idx <= limit : limit <= idx) {
                        ci.l_savedpc += i.sBx;
                        L.stack[ra].chgfltvalue(idx);  /* update internal index... */
                        L.stack[ra + 3].setfltvalue(idx);
                    }
                }
                break;
            }
            case OCi.OP_FORPREP: {
                let init = L.stack[ra];
                let plimit = L.stack[ra + 1];
                let pstep = L.stack[ra + 2];
                let forlim;

                if (init.ttisinteger() && pstep.ttisinteger() && (forlim = forlimit(plimit, pstep.value))) {
                    /* all values are integer */
                    let initv = forlim.stopnow ? 0 : init.value;
                    plimit.value = forlim.ilimit;
                    init.value = (initv - pstep.value)|0;
                } else { /* try making all values floats */
                    let nlimit, nstep, ninit;
                    if ((nlimit = tonumber(plimit)) === false)
                        ldebug.luaG_runerror(L, defs.to_luastring("'for' limit must be a number", true));
                    L.stack[ra + 1].setfltvalue(nlimit);
                    if ((nstep = tonumber(pstep)) === false)
                        ldebug.luaG_runerror(L, defs.to_luastring("'for' step must be a number", true));
                    L.stack[ra + 2].setfltvalue(nstep);
                    if ((ninit = tonumber(init)) === false)
                        ldebug.luaG_runerror(L, defs.to_luastring("'for' initial value must be a number", true));
                    L.stack[ra].setfltvalue(ninit - nstep);
                }

                ci.l_savedpc += i.sBx;
                break;
            }
            case OCi.OP_TFORCALL: {
                let cb = ra + 3; /* call base */
                lobject.setobjs2s(L, cb+2, ra+2);
                lobject.setobjs2s(L, cb+1, ra+1);
                lobject.setobjs2s(L, cb, ra);
                ldo.adjust_top(L, cb+3);  /* func. + 2 args (state and index) */
                ldo.luaD_call(L, cb, i.C);
                ldo.adjust_top(L, ci.top);
                /* go straight to OP_TFORLOOP */
                i = ci.l_code[ci.l_savedpc++];
                ra = RA(L, base, i);
                assert(i.opcode === OCi.OP_TFORLOOP);
            }
            /* fall through */
            case OCi.OP_TFORLOOP: {
                if (!L.stack[ra + 1].ttisnil()) { /* continue loop? */
                    lobject.setobjs2s(L, ra, ra + 1); /* save control variable */
                    ci.l_savedpc += i.sBx; /* jump back */
                }
                break;
            }
            case OCi.OP_SETLIST: {
                let n = i.B;
                let c = i.C;

                if (n === 0) n = L.top - ra - 1;

                if (c === 0) {
                    assert(ci.l_code[ci.l_savedpc].opcode === OCi.OP_EXTRAARG);
                    c = ci.l_code[ci.l_savedpc++].Ax;
                }

                let h = L.stack[ra].value;
                let last = ((c - 1) * lopcodes.LFIELDS_PER_FLUSH) + n;

                for (; n > 0; n--) {
                    ltable.luaH_setint(h, last--, L.stack[ra + n]);
                }
                ldo.adjust_top(L, ci.top);  /* correct top (in case of previous open call) */
                break;
            }
            case OCi.OP_CLOSURE: {
                let p = cl.p.p[i.Bx];
                let ncl = getcached(p, cl.upvals, L.stack, base);  /* cached closure */
                if (ncl === null)  /* no match? */
                    pushclosure(L, p, cl.upvals, base, ra);  /* create a new one */
                else
                    L.stack[ra].setclLvalue(ncl);
                break;
            }
            case OCi.OP_VARARG: {
                let b = i.B - 1;
                let n = base - ci.funcOff - cl.p.numparams - 1;
                let j;

                if (n < 0) /* less arguments than parameters? */
                    n = 0; /* no vararg arguments */

                if (b < 0) {
                    b = n;  /* get all var. arguments */
                    ldo.luaD_checkstack(L, n);
                    ldo.adjust_top(L, ra + n);
                }

                for (j = 0; j < b && j < n; j++)
                    lobject.setobjs2s(L, ra + j, base - n + j);

                for (; j < b; j++) /* complete required results with nil */
                    L.stack[ra + j].setnilvalue();
                break;
            }
            case OCi.OP_EXTRAARG: {
                throw Error("invalid opcode");
            }
        }
    }
};

const dojump = function(L, ci, i, e) {
    let a = i.A;
    if (a !== 0) lfunc.luaF_close(L, ci.l_base + a - 1);
    ci.l_savedpc += i.sBx + e;
};

const donextjump = function(L, ci) {
    dojump(L, ci, ci.l_code[ci.l_savedpc], 1);
};


const luaV_lessthan = function(L, l, r) {
    if (l.ttisnumber() && r.ttisnumber())
        return LTnum(l, r) ? 1 : 0;
    else if (l.ttisstring() && r.ttisstring())
        return l_strcmp(l.tsvalue(), r.tsvalue()) < 0 ? 1 : 0;
    else {
        let res = ltm.luaT_callorderTM(L, l, r, ltm.TMS.TM_LT);
        if (res === null)
            ldebug.luaG_ordererror(L, l, r);
        return res ? 1 : 0;
    }
};

const luaV_lessequal = function(L, l, r) {
    if (l.ttisnumber() && r.ttisnumber())
        return LEnum(l, r) ? 1 : 0;
    else if (l.ttisstring() && r.ttisstring())
        return l_strcmp(l.tsvalue(), r.tsvalue()) <= 0 ? 1 : 0;
    else {
        let res = ltm.luaT_callorderTM(L, l, r, ltm.TMS.TM_LE);
        if (res !== null)
            return res ? 1 : 0;
    }
    /* try 'lt': */
    L.ci.callstatus |= lstate.CIST_LEQ; /* mark it is doing 'lt' for 'le' */
    let res = ltm.luaT_callorderTM(L, r, l, ltm.TMS.TM_LT);
    L.ci.callstatus ^= lstate.CIST_LEQ; /* clear mark */
    if (res === null)
        ldebug.luaG_ordererror(L, l, r);
    return res ? 0 : 1; /* result is negated */
};

const luaV_equalobj = function(L, t1, t2) {
    if (t1.ttype() !== t2.ttype()) { /* not the same variant? */
        if (t1.ttnov() !== t2.ttnov() || t1.ttnov() !== CT.LUA_TNUMBER)
            return 0; /* only numbers can be equal with different variants */
        else { /* two numbers with different variants */
            /* OPTIMIZATION: instead of calling luaV_tointeger we can just let JS do the comparison */
            return (t1.value === t2.value) ? 1 : 0;
        }
    }

    let tm;

    /* values have same type and same variant */
    switch(t1.ttype()) {
        case CT.LUA_TNIL:
            return 1;
        case CT.LUA_TBOOLEAN:
            return t1.value == t2.value ? 1 : 0; // Might be 1 or true
        case CT.LUA_TLIGHTUSERDATA:
        case CT.LUA_TNUMINT:
        case CT.LUA_TNUMFLT:
        case CT.LUA_TLCF:
            return t1.value === t2.value ? 1 : 0;
        case CT.LUA_TSHRSTR:
        case CT.LUA_TLNGSTR: {
            return lstring.luaS_eqlngstr(t1.tsvalue(), t2.tsvalue()) ? 1 : 0;
        }
        case CT.LUA_TUSERDATA:
        case CT.LUA_TTABLE:
            if (t1.value === t2.value) return 1;
            else if (L === null) return 0;

            tm = ltm.fasttm(L, t1.value.metatable, ltm.TMS.TM_EQ);
            if (tm === null)
                tm = ltm.fasttm(L, t2.value.metatable, ltm.TMS.TM_EQ);
            break;
        default:
            return t1.value === t2.value ? 1 : 0;
    }

    if (tm === null) /* no TM? */
        return 0;

    let tv = new lobject.TValue(); /* doesn't use the stack */
    ltm.luaT_callTM(L, tm, t1, t2, tv, 1);
    return tv.l_isfalse() ? 0 : 1;
};

const luaV_rawequalobj = function(t1, t2) {
    return luaV_equalobj(null, t1, t2);
};

const forlimit = function(obj, step) {
    let stopnow = false;
    let ilimit = luaV_tointeger(obj, step < 0 ? 2 : 1);
    if (ilimit === false) {
        let n = tonumber(obj);
        if (n === false)
            return false;

        if (0 < n) {
            ilimit = llimit.LUA_MAXINTEGER;
            if (step < 0) stopnow = true;
        } else {
            ilimit = llimit.LUA_MININTEGER;
            if (step >= 0) stopnow = true;
        }
    }

    return {
        stopnow: stopnow,
        ilimit: ilimit
    };
};

/*
** try to convert a value to an integer, rounding according to 'mode':
** mode === 0: accepts only integral values
** mode === 1: takes the floor of the number
** mode === 2: takes the ceil of the number
*/
const luaV_tointeger = function(obj, mode) {
    if (obj.ttisfloat()) {
        let n = obj.value;
        let f = Math.floor(n);

        if (n !== f) { /* not an integral value? */
            if (mode === 0)
                return false;  /* fails if mode demands integral value */
            else if (mode > 1)  /* needs ceil? */
                f += 1;  /* convert floor to ceil (remember: n !== f) */
        }

        return luaconf.lua_numbertointeger(f);
    } else if (obj.ttisinteger()) {
        return obj.value;
    } else if (cvt2num(obj)) {
        let v = lobject.luaO_str2num(obj.svalue());
        if (v !== false)
            return luaV_tointeger(v, mode);
    }

    return false;
};

const tointeger = function(o) {
    return o.ttisinteger() ? o.value : luaV_tointeger(o, 0);
};

const tonumber = function(o) {
    if (o.ttnov() === CT.LUA_TNUMBER)
        return o.value;

    if (cvt2num(o)) { /* string convertible to number? */
        let v = lobject.luaO_str2num(o.svalue());
        if (v !== false)
            return v.value;
    }

    return false;
};

/*
** Return 'l < r', for numbers.
** As fengari uses javascript numbers for both floats and integers and has
** correct semantics, we can just compare values.
*/
const LTnum = function(l, r) {
    return l.value < r.value;
};

/*
** Return 'l <= r', for numbers.
*/
const LEnum = function(l, r) {
    return l.value <= r.value;
};

/*
** Compare two strings 'ls' x 'rs', returning an integer smaller-equal-
** -larger than zero if 'ls' is smaller-equal-larger than 'rs'.
*/
const l_strcmp = function(ls, rs) {
    let l = lstring.luaS_hashlongstr(ls);
    let r = lstring.luaS_hashlongstr(rs);
    /* In fengari we assume string hash has same collation as byte values */
    if (l === r)
        return 0;
    else if (l < r)
        return -1;
    else
        return 1;
};

/*
** Main operation 'ra' = #rb'.
*/
const luaV_objlen = function(L, ra, rb) {
    let tm;
    switch(rb.ttype()) {
        case CT.LUA_TTABLE: {
            let h = rb.value;
            tm = ltm.fasttm(L, h.metatable, ltm.TMS.TM_LEN);
            if (tm !== null) break; /* metamethod? break switch to call it */
            ra.setivalue(ltable.luaH_getn(h)); /* else primitive len */
            return;
        }
        case CT.LUA_TSHRSTR:
        case CT.LUA_TLNGSTR:
            ra.setivalue(rb.vslen());
            return;
        default: {
            tm = ltm.luaT_gettmbyobj(L, rb, ltm.TMS.TM_LEN);
            if (tm.ttisnil())
                ldebug.luaG_typeerror(L, rb, defs.to_luastring("get length of", true));
            break;
        }
    }

    ltm.luaT_callTM(L, tm, rb, rb, ra, 1);
};

const luaV_div = function(L, m, n) {
    if (n === 0)
        ldebug.luaG_runerror(L, defs.to_luastring("attempt to divide by zero"));
    return Math.floor(m / n)|0;
};

// % semantic on negative numbers is different in js
const luaV_mod = function(L, m, n) {
    if (n === 0)
        ldebug.luaG_runerror(L, defs.to_luastring("attempt to perform 'n%%0'"));
    return (m - Math.floor(m / n) * n)|0;
};

const NBITS = 32;

const luaV_shiftl = function(x, y) {
    if (y < 0) {  /* shift right? */
        if (y <= -NBITS) return 0;
        else return x >>> -y;
    }
    else {  /* shift left */
        if (y >= NBITS) return 0;
        else return x << y;
    }
};

/*
** check whether cached closure in prototype 'p' may be reused, that is,
** whether there is a cached closure with the same upvalues needed by
** new closure to be created.
*/
const getcached = function(p, encup, stack, base) {
    let c = p.cache;
    if (c !== null) {  /* is there a cached closure? */
        let uv = p.upvalues;
        let nup = uv.length;
        for (let i = 0; i < nup; i++) {  /* check whether it has right upvalues */
            let v = uv[i].instack ? stack[base + uv[i].idx] : encup[uv[i].idx].v;
            if (c.upvals[i].v !== v)
                return null;  /* wrong upvalue; cannot reuse closure */
        }
    }
    return c;  /* return cached closure (or NULL if no cached closure) */
};

/*
** create a new Lua closure, push it in the stack, and initialize
** its upvalues.
*/
const pushclosure = function(L, p, encup, base, ra) {
    let nup = p.upvalues.length;
    let uv = p.upvalues;
    let ncl = new lobject.LClosure(L, nup);
    ncl.p = p;
    L.stack[ra].setclLvalue(ncl);
    for (let i = 0; i < nup; i++) {
        if (uv[i].instack)
            ncl.upvals[i] = lfunc.luaF_findupval(L, base + uv[i].idx);
        else
            ncl.upvals[i] = encup[uv[i].idx];
        ncl.upvals[i].refcount++;
    }
    p.cache = ncl;  /* save it on cache for reuse */
};

const cvt2str = function(o) {
    return o.ttisnumber();
};

const cvt2num = function(o) {
    return o.ttisstring();
};

const tostring = function(L, i) {
    let o = L.stack[i];

    if (o.ttisstring()) return true;

    if (cvt2str(o)) {
        lobject.luaO_tostring(L, o);
        return true;
    }

    return false;
};

const isemptystr = function(o) {
    return o.ttisstring() && o.vslen() === 0;
};

/*
** Main operation for concatenation: concat 'total' values in the stack,
** from 'L->top - total' up to 'L->top - 1'.
*/
const luaV_concat = function(L, total) {
    assert(total >= 2);
    do {
        let top = L.top;
        let n = 2; /* number of elements handled in this pass (at least 2) */

        if (!(L.stack[top-2].ttisstring() || cvt2str(L.stack[top-2])) || !tostring(L, top - 1)) {
            ltm.luaT_trybinTM(L, L.stack[top-2], L.stack[top-1], L.stack[top-2], ltm.TMS.TM_CONCAT);
        } else if (isemptystr(L.stack[top-1])) {
            tostring(L, top - 2);
        } else if (isemptystr(L.stack[top-2])) {
            lobject.setobjs2s(L, top - 2, top - 1);
        } else {
            /* at least two non-empty string values; get as many as possible */
            let toconcat = new Array(total);
            toconcat[total-1] = L.stack[top-1].svalue();
            for (n = 1; n < total; n++) {
                if (!tostring(L, top - n - 1)) {
                    toconcat = toconcat.slice(total-n);
                    break;
                }
                toconcat[total-n-1] = L.stack[top - n - 1].svalue();
            }
            let ts = lstring.luaS_bless(L, Array.prototype.concat.apply([], toconcat));
            lobject.setsvalue2s(L, top - n, ts);
        }
        total -= n - 1; /* got 'n' strings to create 1 new */
        /* popped 'n' strings and pushed one */
        for (; L.top > top-(n-1);)
            delete L.stack[--L.top];
    } while (total > 1); /* repeat until only 1 result left */
};

const MAXTAGLOOP = 2000;

const luaV_gettable = function(L, t, key, ra) {
    for (let loop = 0; loop < MAXTAGLOOP; loop++) {
        let tm;

        if (!t.ttistable()) {
            tm = ltm.luaT_gettmbyobj(L, t, ltm.TMS.TM_INDEX);
            if (tm.ttisnil())
                ldebug.luaG_typeerror(L, t, defs.to_luastring('index', true)); /* no metamethod */
            /* else will try the metamethod */
        } else {
            let slot = ltable.luaH_get(L, t.value, key);
            if (!slot.ttisnil()) {
                lobject.setobj2s(L, ra, slot);
                return;
            } else { /* 't' is a table */
                tm = ltm.fasttm(L, t.value.metatable, ltm.TMS.TM_INDEX);  /* table's metamethod */
                if (tm === null) { /* no metamethod? */
                    L.stack[ra].setnilvalue(); /* result is nil */
                    return;
                }
            }
            /* else will try the metamethod */
        }
        if (tm.ttisfunction()) { /* is metamethod a function? */
            ltm.luaT_callTM(L, tm, t, key, L.stack[ra], 1); /* call it */
            return;
        }
        t = tm;  /* else try to access 'tm[key]' */
    }

    ldebug.luaG_runerror(L, defs.to_luastring("'__index' chain too long; possible loop", true));
};

const settable = function(L, t, key, val) {
    for (let loop = 0; loop < MAXTAGLOOP; loop++) {
        let tm;
        if (t.ttistable()) {
            let h = t.value; /* save 't' table */
            let slot = ltable.luaH_set(L, h, key);
            if (!slot.ttisnil() || (tm = ltm.fasttm(L, h.metatable, ltm.TMS.TM_NEWINDEX)) === null) {
                if (val.ttisnil())
                    ltable.luaH_delete(L, h, key);
                else
                    slot.setfrom(val);
                ltable.invalidateTMcache(h);
                return;
            }
            /* else will try the metamethod */
        } else { /* not a table; check metamethod */
            if ((tm = ltm.luaT_gettmbyobj(L, t, ltm.TMS.TM_NEWINDEX)).ttisnil())
                ldebug.luaG_typeerror(L, t, defs.to_luastring('index', true));
        }
        /* try the metamethod */
        if (tm.ttisfunction()) {
            ltm.luaT_callTM(L, tm, t, key, val, 0);
            return;
        }
        t = tm;  /* else repeat assignment over 'tm' */
    }

    ldebug.luaG_runerror(L, defs.to_luastring("'__newindex' chain too long; possible loop", true));
};


module.exports.cvt2str          = cvt2str;
module.exports.cvt2num          = cvt2num;
module.exports.luaV_gettable    = luaV_gettable;
module.exports.luaV_concat      = luaV_concat;
module.exports.luaV_div         = luaV_div;
module.exports.luaV_equalobj    = luaV_equalobj;
module.exports.luaV_execute     = luaV_execute;
module.exports.luaV_finishOp    = luaV_finishOp;
module.exports.luaV_lessequal   = luaV_lessequal;
module.exports.luaV_lessthan    = luaV_lessthan;
module.exports.luaV_mod         = luaV_mod;
module.exports.luaV_objlen      = luaV_objlen;
module.exports.luaV_rawequalobj = luaV_rawequalobj;
module.exports.luaV_shiftl      = luaV_shiftl;
module.exports.luaV_tointeger   = luaV_tointeger;
module.exports.settable         = settable;
module.exports.tointeger        = tointeger;
module.exports.tonumber         = tonumber;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const OpCodes = [
    "MOVE",
    "LOADK",
    "LOADKX",
    "LOADBOOL",
    "LOADNIL",
    "GETUPVAL",
    "GETTABUP",
    "GETTABLE",
    "SETTABUP",
    "SETUPVAL",
    "SETTABLE",
    "NEWTABLE",
    "SELF",
    "ADD",
    "SUB",
    "MUL",
    "MOD",
    "POW",
    "DIV",
    "IDIV",
    "BAND",
    "BOR",
    "BXOR",
    "SHL",
    "SHR",
    "UNM",
    "BNOT",
    "NOT",
    "LEN",
    "CONCAT",
    "JMP",
    "EQ",
    "LT",
    "LE",
    "TEST",
    "TESTSET",
    "CALL",
    "TAILCALL",
    "RETURN",
    "FORLOOP",
    "FORPREP",
    "TFORCALL",
    "TFORLOOP",
    "SETLIST",
    "CLOSURE",
    "VARARG",
    "EXTRAARG"
];

const OpCodesI = {
    OP_MOVE:     0,
    OP_LOADK:    1,
    OP_LOADKX:   2,
    OP_LOADBOOL: 3,
    OP_LOADNIL:  4,
    OP_GETUPVAL: 5,
    OP_GETTABUP: 6,
    OP_GETTABLE: 7,
    OP_SETTABUP: 8,
    OP_SETUPVAL: 9,
    OP_SETTABLE: 10,
    OP_NEWTABLE: 11,
    OP_SELF:     12,
    OP_ADD:      13,
    OP_SUB:      14,
    OP_MUL:      15,
    OP_MOD:      16,
    OP_POW:      17,
    OP_DIV:      18,
    OP_IDIV:     19,
    OP_BAND:     20,
    OP_BOR:      21,
    OP_BXOR:     22,
    OP_SHL:      23,
    OP_SHR:      24,
    OP_UNM:      25,
    OP_BNOT:     26,
    OP_NOT:      27,
    OP_LEN:      28,
    OP_CONCAT:   29,
    OP_JMP:      30,
    OP_EQ:       31,
    OP_LT:       32,
    OP_LE:       33,
    OP_TEST:     34,
    OP_TESTSET:  35,
    OP_CALL:     36,
    OP_TAILCALL: 37,
    OP_RETURN:   38,
    OP_FORLOOP:  39,
    OP_FORPREP:  40,
    OP_TFORCALL: 41,
    OP_TFORLOOP: 42,
    OP_SETLIST:  43,
    OP_CLOSURE:  44,
    OP_VARARG:   45,
    OP_EXTRAARG: 46
};

/*
** masks for instruction properties. The format is:
** bits 0-1: op mode
** bits 2-3: C arg mode
** bits 4-5: B arg mode
** bit 6: instruction set register A
** bit 7: operator is a test (next instruction must be a jump)
*/
const OpArgN = 0;  /* argument is not used */
const OpArgU = 1;  /* argument is used */
const OpArgR = 2;  /* argument is a register or a jump offset */
const OpArgK = 3;  /* argument is a constant or register/constant */

/* basic instruction format */
const iABC  = 0;
const iABx  = 1;
const iAsBx = 2;
const iAx   = 3;

const luaP_opmodes = [
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_MOVE */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgN << 2 | iABx,   /* OP_LOADK */
    0 << 7 | 1 << 6 | OpArgN << 4 | OpArgN << 2 | iABx,   /* OP_LOADKX */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_LOADBOOL */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_LOADNIL */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_GETUPVAL */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgK << 2 | iABC,   /* OP_GETTABUP */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgK << 2 | iABC,   /* OP_GETTABLE */
    0 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SETTABUP */
    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_SETUPVAL */
    0 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SETTABLE */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_NEWTABLE */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgK << 2 | iABC,   /* OP_SELF */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_ADD */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SUB */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_MUL */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_MOD */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_POW */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_DIV */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_IDIV */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BAND */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BOR */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_BXOR */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SHL */
    0 << 7 | 1 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_SHR */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_UNM */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_BNOT */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_NOT */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iABC,   /* OP_LEN */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgR << 2 | iABC,   /* OP_CONCAT */
    0 << 7 | 0 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_JMP */
    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_EQ */
    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_LT */
    1 << 7 | 0 << 6 | OpArgK << 4 | OpArgK << 2 | iABC,   /* OP_LE */
    1 << 7 | 0 << 6 | OpArgN << 4 | OpArgU << 2 | iABC,   /* OP_TEST */
    1 << 7 | 1 << 6 | OpArgR << 4 | OpArgU << 2 | iABC,   /* OP_TESTSET */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_CALL */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_TAILCALL */
    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_RETURN */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_FORLOOP */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_FORPREP */
    0 << 7 | 0 << 6 | OpArgN << 4 | OpArgU << 2 | iABC,   /* OP_TFORCALL */
    0 << 7 | 1 << 6 | OpArgR << 4 | OpArgN << 2 | iAsBx,  /* OP_TFORLOOP */
    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgU << 2 | iABC,   /* OP_SETLIST */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABx,   /* OP_CLOSURE */
    0 << 7 | 1 << 6 | OpArgU << 4 | OpArgN << 2 | iABC,   /* OP_VARARG */
    0 << 7 | 0 << 6 | OpArgU << 4 | OpArgU << 2 | iAx     /* OP_EXTRAARG */
];

const getOpMode = function(m) {
    return luaP_opmodes[m] & 3;
};

const getBMode = function(m) {
    return (luaP_opmodes[m] >> 4) & 3;
};

const getCMode = function(m) {
    return (luaP_opmodes[m] >> 2) & 3;
};

const testAMode = function(m) {
    return luaP_opmodes[m] & (1 << 6);
};

const testTMode = function(m) {
    return luaP_opmodes[m] & (1 << 7);
};

const SIZE_C     = 9;
const SIZE_B     = 9;
const SIZE_Bx    = (SIZE_C + SIZE_B);
const SIZE_A     = 8;
const SIZE_Ax    = (SIZE_C + SIZE_B + SIZE_A);
const SIZE_OP    = 6;
const POS_OP     = 0;
const POS_A      = (POS_OP + SIZE_OP);
const POS_C      = (POS_A + SIZE_A);
const POS_B      = (POS_C + SIZE_C);
const POS_Bx     = POS_C;
const POS_Ax     = POS_A;
const MAXARG_Bx  = ((1 << SIZE_Bx) - 1);
const MAXARG_sBx = (MAXARG_Bx >> 1); /* 'sBx' is signed */
const MAXARG_Ax  = ((1<<SIZE_Ax)-1);
const MAXARG_A   = ((1 << SIZE_A) - 1);
const MAXARG_B   = ((1 << SIZE_B) - 1);
const MAXARG_C   = ((1 << SIZE_C) - 1);

/* this bit 1 means constant (0 means register) */
const BITRK      = (1 << (SIZE_B - 1));

const MAXINDEXRK = (BITRK - 1);

/*
** invalid register that fits in 8 bits
*/
const NO_REG     = MAXARG_A;

/* test whether value is a constant */
const ISK = function (x) {
    return x & BITRK;
};

/* gets the index of the constant */
const INDEXK = function (r) {
    return r & ~BITRK;
};

/* code a constant index as a RK value */
const RKASK = function(x) {
    return x | BITRK;
};


/* creates a mask with 'n' 1 bits at position 'p' */
const MASK1 = function(n, p) {
    return ((~((~0)<<(n)))<<(p));
};

/* creates a mask with 'n' 0 bits at position 'p' */
const MASK0 = function(n, p) {
    return (~MASK1(n, p));
};

const GET_OPCODE = function(i) {
    return i.opcode;
};

const SET_OPCODE = function(i, o) {
    i.code = (i.code & MASK0(SIZE_OP, POS_OP)) | ((o << POS_OP) & MASK1(SIZE_OP, POS_OP));
    return fullins(i);
};

const setarg = function(i, v, pos, size) {
    i.code = (i.code & MASK0(size, pos)) | ((v << pos) & MASK1(size, pos));
    return fullins(i);
};

const GETARG_A = function(i) {
    return i.A;
};

const SETARG_A = function(i,v) {
    return setarg(i, v, POS_A, SIZE_A);
};

const GETARG_B = function(i) {
    return i.B;
};

const SETARG_B = function(i,v) {
    return setarg(i, v, POS_B, SIZE_B);
};

const GETARG_C = function(i) {
    return i.C;
};

const SETARG_C = function(i,v) {
    return setarg(i, v, POS_C, SIZE_C);
};

const GETARG_Bx = function(i) {
    return i.Bx;
};

const SETARG_Bx = function(i,v) {
    return setarg(i, v, POS_Bx, SIZE_Bx);
};

const GETARG_Ax = function(i) {
    return i.Ax;
};

const SETARG_Ax = function(i,v) {
    return setarg(i, v, POS_Ax, SIZE_Ax);
};

const GETARG_sBx = function(i) {
    return i.sBx;
};

const SETARG_sBx = function(i, b) {
    return SETARG_Bx(i, b + MAXARG_sBx);
};

/*
** Pre-calculate all possible part of the instruction
*/
const fullins = function(ins) {
    if (typeof ins === "number") {
        return {
            code:   ins,
            opcode: (ins >> POS_OP) & MASK1(SIZE_OP, 0),
            A:      (ins >> POS_A)  & MASK1(SIZE_A,  0),
            B:      (ins >> POS_B)  & MASK1(SIZE_B,  0),
            C:      (ins >> POS_C)  & MASK1(SIZE_C,  0),
            Bx:     (ins >> POS_Bx) & MASK1(SIZE_Bx, 0),
            Ax:     (ins >> POS_Ax) & MASK1(SIZE_Ax, 0),
            sBx:    ((ins >> POS_Bx) & MASK1(SIZE_Bx, 0)) - MAXARG_sBx
        };
    } else {
        let i = ins.code;
        ins.opcode = (i >> POS_OP) & MASK1(SIZE_OP, 0);
        ins.A      = (i >> POS_A)  & MASK1(SIZE_A,  0);
        ins.B      = (i >> POS_B)  & MASK1(SIZE_B,  0);
        ins.C      = (i >> POS_C)  & MASK1(SIZE_C,  0);
        ins.Bx     = (i >> POS_Bx) & MASK1(SIZE_Bx, 0);
        ins.Ax     = (i >> POS_Ax) & MASK1(SIZE_Ax, 0);
        ins.sBx    = ((i >> POS_Bx) & MASK1(SIZE_Bx, 0)) - MAXARG_sBx;
        return ins;
    }
};

const CREATE_ABC = function(o, a, b, c) {
    return fullins(o << POS_OP | a << POS_A | b << POS_B | c << POS_C);
};

const CREATE_ABx = function(o, a, bc) {
    return fullins(o << POS_OP | a << POS_A | bc << POS_Bx);
};

const CREATE_Ax = function(o, a) {
    return fullins(o << POS_OP | a << POS_Ax);
};

/* number of list items to accumulate before a SETLIST instruction */
const LFIELDS_PER_FLUSH = 50;

module.exports.BITRK               = BITRK;
module.exports.CREATE_ABC          = CREATE_ABC;
module.exports.CREATE_ABx          = CREATE_ABx;
module.exports.CREATE_Ax           = CREATE_Ax;
module.exports.GET_OPCODE          = GET_OPCODE;
module.exports.GETARG_A            = GETARG_A;
module.exports.GETARG_B            = GETARG_B;
module.exports.GETARG_C            = GETARG_C;
module.exports.GETARG_Bx           = GETARG_Bx;
module.exports.GETARG_Ax           = GETARG_Ax;
module.exports.GETARG_sBx          = GETARG_sBx;
module.exports.INDEXK              = INDEXK;
module.exports.ISK                 = ISK;
module.exports.LFIELDS_PER_FLUSH   = LFIELDS_PER_FLUSH;
module.exports.MAXARG_A            = MAXARG_A;
module.exports.MAXARG_Ax           = MAXARG_Ax;
module.exports.MAXARG_B            = MAXARG_B;
module.exports.MAXARG_Bx           = MAXARG_Bx;
module.exports.MAXARG_C            = MAXARG_C;
module.exports.MAXARG_sBx          = MAXARG_sBx;
module.exports.MAXINDEXRK          = MAXINDEXRK;
module.exports.NO_REG              = NO_REG;
module.exports.OpArgK              = OpArgK;
module.exports.OpArgN              = OpArgN;
module.exports.OpArgR              = OpArgR;
module.exports.OpArgU              = OpArgU;
module.exports.OpCodes             = OpCodes;
module.exports.OpCodesI            = OpCodesI;
module.exports.POS_A               = POS_A;
module.exports.POS_Ax              = POS_Ax;
module.exports.POS_B               = POS_B;
module.exports.POS_Bx              = POS_Bx;
module.exports.POS_C               = POS_C;
module.exports.POS_OP              = POS_OP;
module.exports.RKASK               = RKASK;
module.exports.SETARG_A            = SETARG_A;
module.exports.SETARG_Ax           = SETARG_Ax;
module.exports.SETARG_B            = SETARG_B;
module.exports.SETARG_Bx           = SETARG_Bx;
module.exports.SETARG_C            = SETARG_C;
module.exports.SETARG_sBx          = SETARG_sBx;
module.exports.SET_OPCODE          = SET_OPCODE;
module.exports.SIZE_A              = SIZE_A;
module.exports.SIZE_Ax             = SIZE_Ax;
module.exports.SIZE_B              = SIZE_B;
module.exports.SIZE_Bx             = SIZE_Bx;
module.exports.SIZE_C              = SIZE_C;
module.exports.SIZE_OP             = SIZE_OP;
module.exports.fullins             = fullins;
module.exports.getBMode            = getBMode;
module.exports.getCMode            = getCMode;
module.exports.getOpMode           = getOpMode;
module.exports.iABC                = iABC;
module.exports.iABx                = iABx;
module.exports.iAsBx               = iAsBx;
module.exports.iAx                 = iAx;
module.exports.testAMode           = testAMode;
module.exports.testTMode           = testTMode;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(0);


class MBuffer {
    constructor() {
        this.buffer = null;
        this.n = 0;
    }
}

const luaZ_buffremove = function(buff, i) {
    buff.n -= i;
};

const luaZ_resetbuffer = function(buff) {
    buff.n = 0;
    buff.buffer = [];
};

class ZIO {
    constructor(L, reader, data) {
        this.L = L;           /* Lua state (for reader) */
        assert(typeof reader == "function", "ZIO requires a reader");
        this.reader = reader; /* reader function */
        this.data = data;     /* additional data */
        this.n = 0;           /* bytes still unread */
        this.buffer = null;
        this.off = 0;         /* current position in buffer */
    }

    zgetc () {
        return ((this.n--) > 0) ? this.buffer[this.off++] : luaZ_fill(this);
    }
}

const EOZ = -1;

const luaZ_fill = function(z) {
    let size;
    let buff = z.reader(z.L, z.data);
    if (buff === null)
        return EOZ;
    if (buff instanceof DataView) {
        z.buffer = new Uint8Array(buff.buffer, buff.byteOffset, buff.byteLength);
        z.off = 0;
        size = buff.byteLength - buff.byteOffset;
    } else {
        assert(typeof buff !== "string", "Should only load binary of array of bytes");
        z.buffer = buff;
        z.off = 0;
        size = buff.length;
    }
    if (size === 0)
        return EOZ;
    z.n = size - 1;
    return z.buffer[z.off++];
};

/* b should be an array-like that will be set to bytes
 * b_offset is the offset at which to start filling */
const luaZ_read = function(z, b, b_offset, n) {
    while (n) {
        if (z.n === 0) { /* no bytes in buffer? */
            if (luaZ_fill(z) === EOZ)
                return n; /* no more input; return number of missing bytes */
            else {
                z.n++;  /* luaZ_fill consumed first byte; put it back */
                z.off--;
            }
        }
        let m = (n <= z.n) ? n : z.n; /* min. between n and z->n */
        for (let i=0; i<m; i++) {
            b[b_offset++] = z.buffer[z.off++];
        }
        z.n -= m;
        if (z.n === 0) // remove reference to input so it can get freed
            z.buffer = null;
        n -= m;
    }

    return 0;
};

module.exports.EOZ              = EOZ;
module.exports.luaZ_buffremove  = luaZ_buffremove;
module.exports.luaZ_fill        = luaZ_fill;
module.exports.luaZ_read        = luaZ_read;
module.exports.luaZ_resetbuffer = luaZ_resetbuffer;
module.exports.MBuffer          = MBuffer;
module.exports.ZIO              = ZIO;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert    = __webpack_require__(0);

const defs      = __webpack_require__(1);
const ldebug    = __webpack_require__(11);
const ldo       = __webpack_require__(7);
const ldump     = __webpack_require__(43);
const lfunc     = __webpack_require__(12);
const lobject   = __webpack_require__(3);
const lstate    = __webpack_require__(13);
const lstring   = __webpack_require__(9);
const ltm       = __webpack_require__(14);
const luaconf   = __webpack_require__(10);
const lvm       = __webpack_require__(15);
const ltable    = __webpack_require__(8);
const lzio      = __webpack_require__(21);
const MAXUPVAL  = lfunc.MAXUPVAL;
const CT        = defs.constant_types;
const TS        = defs.thread_status;
const TValue    = lobject.TValue;
const CClosure  = lobject.CClosure;

const isvalid = function(o) {
    return o !== lobject.luaO_nilobject;
};

const lua_version = function(L) {
    if (L === null) return defs.LUA_VERSION_NUM;
    else return L.l_G.version;
};

const lua_atpanic = function(L, panicf) {
    let old = L.l_G.panic;
    L.l_G.panic = panicf;
    return old;
};

const lua_atnativeerror = function(L, errorf) {
    let old = L.l_G.atnativeerror;
    L.l_G.atnativeerror = errorf;
    return old;
};

// Return value for idx on stack
const index2addr = function(L, idx) {
    let ci = L.ci;
    if (idx > 0) {
        let o = ci.funcOff + idx;
        assert(idx <= ci.top - (ci.funcOff + 1), "unacceptable index");
        if (o >= L.top) return lobject.luaO_nilobject;
        else return L.stack[o];
    } else if (idx > defs.LUA_REGISTRYINDEX) {
        assert(idx !== 0 && -idx <= L.top, "invalid index");
        return L.stack[L.top + idx];
    } else if (idx === defs.LUA_REGISTRYINDEX) {
        return L.l_G.l_registry;
    } else { /* upvalues */
        idx = defs.LUA_REGISTRYINDEX - idx;
        assert(idx <= MAXUPVAL + 1, "upvalue index too large");
        if (ci.func.ttislcf()) /* light C function? */
            return lobject.luaO_nilobject; /* it has no upvalues */
        else {
            return idx <= ci.func.value.nupvalues ? ci.func.value.upvalue[idx - 1] : lobject.luaO_nilobject;
        }
    }
};

// Like index2addr but returns the index on stack; doesn't allow pseudo indices
const index2addr_ = function(L, idx) {
    let ci = L.ci;
    if (idx > 0) {
        let o = ci.funcOff + idx;
        assert(idx <= ci.top - (ci.funcOff + 1), "unacceptable index");
        if (o >= L.top) return null;
        else return o;
    } else if (idx > defs.LUA_REGISTRYINDEX) {
        assert(idx !== 0 && -idx <= L.top, "invalid index");
        return L.top + idx;
    } else { /* registry or upvalue */
        throw Error("attempt to use pseudo-index");
    }
};

const lua_checkstack = function(L, n) {
    let res;
    let ci = L.ci;
    assert(n >= 0, "negative 'n'");
    if (L.stack_last - L.top > n) /* stack large enough? */
        res = true;
    else { /* no; need to grow stack */
        let inuse = L.top + lstate.EXTRA_STACK;
        if (inuse > luaconf.LUAI_MAXSTACK - n)  /* can grow without overflow? */
            res = false;  /* no */
        else { /* try to grow stack */
            ldo.luaD_growstack(L, n);
            res = true;
        }
    }

    if (res && ci.top < L.top + n)
        ci.top = L.top + n;  /* adjust frame top */

    return res;
};

const lua_xmove = function(from, to, n) {
    if (from === to) return;
    assert(n < (from.top - from.ci.funcOff), "not enough elements in the stack");
    assert(from.l_G === to.l_G, "moving among independent states");
    assert(to.ci.top - to.top >= n, "stack overflow");

    from.top -= n;
    for (let i = 0; i < n; i++) {
        to.stack[to.top] = new lobject.TValue();
        lobject.setobj2s(to, to.top, from.stack[from.top + i]);
        delete from.stack[from.top + i];
        to.top++;
    }
};

/*
** basic stack manipulation
*/

/*
** convert an acceptable stack index into an absolute index
*/
const lua_absindex = function(L, idx) {
    return (idx > 0 || idx <= defs.LUA_REGISTRYINDEX)
         ? idx
         : (L.top - L.ci.funcOff) + idx;
};

const lua_gettop = function(L) {
    return L.top - (L.ci.funcOff + 1);
};

const lua_pushvalue = function(L, idx) {
    lobject.pushobj2s(L, index2addr(L, idx));
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_settop = function(L, idx) {
    let func = L.ci.funcOff;
    let newtop;
    if (idx >= 0) {
        assert(idx <= L.stack_last - (func + 1), "new top too large");
        newtop = func + 1 + idx;
    } else {
        assert(-(idx + 1) <= L.top - (func + 1), "invalid new top");
        newtop = L.top + idx + 1; /* 'subtract' index (index is negative) */
    }
    ldo.adjust_top(L, newtop);
};

const lua_pop = function(L, n) {
    lua_settop(L, -n - 1);
};

const reverse = function(L, from, to) {
    for (; from < to; from++, to--) {
        let fromtv = L.stack[from];
        let temp = new TValue(fromtv.type, fromtv.value);
        lobject.setobjs2s(L, from, to);
        lobject.setobj2s(L, to, temp);
    }
};

/*
** Let x = AB, where A is a prefix of length 'n'. Then,
** rotate x n === BA. But BA === (A^r . B^r)^r.
*/
const lua_rotate = function(L, idx, n) {
    let t = L.top - 1;
    let pIdx = index2addr_(L, idx);
    let p = L.stack[pIdx];

    assert(isvalid(p) && idx > defs.LUA_REGISTRYINDEX, "index not in the stack");
    assert((n >= 0 ? n : -n) <= (t - pIdx + 1), "invalid 'n'");

    let m = n >= 0 ? t - n : pIdx - n - 1;  /* end of prefix */

    reverse(L, pIdx, m);
    reverse(L, m + 1, L.top - 1);
    reverse(L, pIdx, L.top - 1);
};

const lua_copy = function(L, fromidx, toidx) {
    let from = index2addr(L, fromidx);
    index2addr(L, toidx).setfrom(from);
};

const lua_remove = function(L, idx) {
    lua_rotate(L, idx, -1);
    lua_pop(L, 1);
};

const lua_insert = function(L, idx) {
    lua_rotate(L, idx, 1);
};

const lua_replace = function(L, idx) {
    lua_copy(L, -1, idx);
    lua_pop(L, 1);
};

/*
** push functions (JS -> stack)
*/

const lua_pushnil = function(L) {
    L.stack[L.top] = new TValue(CT.LUA_TNIL, null);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushnumber = function(L, n) {
    assert(typeof n === "number");

    L.stack[L.top] = new TValue(CT.LUA_TNUMFLT, n);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushinteger = function(L, n) {
    assert(typeof n === "number" && (n|0) === n);
    L.stack[L.top] = new TValue(CT.LUA_TNUMINT, n);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushlstring = function(L, s, len) {
    assert(typeof len === "number");
    let ts;
    if (len === 0) {
        ts = lstring.luaS_bless(L, []);
    } else {
        assert(defs.is_luastring(s) && s.length >= len, "lua_pushlstring expects array of byte");
        ts = lstring.luaS_bless(L, s.slice(0, len));
    }
    lobject.pushsvalue2s(L, ts);
    assert(L.top <= L.ci.top, "stack overflow");

    return ts.value;
};

const lua_pushstring = function (L, s) {
    assert(defs.is_luastring(s) || s === undefined || s === null, "lua_pushstring expects array of byte");

    if (s === undefined || s === null) {
        L.stack[L.top] = new TValue(CT.LUA_TNIL, null);
        L.top++;
    } else {
        let ts = lstring.luaS_new(L, s);
        lobject.pushsvalue2s(L, ts);
        s = ts.getstr(); /* internal copy */
    }
    assert(L.top <= L.ci.top, "stack overflow");

    return s;
};

const lua_pushvfstring = function (L, fmt, argp) {
    assert(defs.is_luastring(fmt));
    return lobject.luaO_pushvfstring(L, fmt, argp);
};

const lua_pushfstring = function (L, fmt, ...argp) {
    assert(defs.is_luastring(fmt));
    return lobject.luaO_pushvfstring(L, fmt, argp);
};

/* Similar to lua_pushstring, but takes a JS string */
const lua_pushliteral = function (L, s) {
    assert(typeof s === "string" || s === undefined || s === null, "lua_pushliteral expects a JS string");

    if (s === undefined || s === null) {
        L.stack[L.top] = new TValue(CT.LUA_TNIL, null);
        L.top++;
    } else {
        let ts = lstring.luaS_newliteral(L, s);
        lobject.pushsvalue2s(L, ts);
        s = ts.getstr(); /* internal copy */
    }
    assert(L.top <= L.ci.top, "stack overflow");

    return s;
};

const lua_pushcclosure = function(L, fn, n) {
    assert(typeof fn === "function");
    assert(typeof n === "number");

    if (n === 0)
        L.stack[L.top] = new TValue(CT.LUA_TLCF, fn);
    else {
        assert(n < L.top - L.ci.funcOff, "not enough elements in the stack");
        assert(n <= MAXUPVAL, "upvalue index too large");

        let cl = new CClosure(L, fn, n);
        for (let i=0; i<n; i++)
            cl.upvalue[i].setfrom(L.stack[L.top - n + i]);
        for (let i=1; i<n; i++)
            delete L.stack[--L.top];
        if (n>0)
            --L.top;
        L.stack[L.top].setclCvalue(cl);
    }
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushjsclosure = lua_pushcclosure;

const lua_pushcfunction = function(L, fn) {
    lua_pushcclosure(L, fn, 0);
};

const lua_pushjsfunction = lua_pushcfunction;

const lua_pushboolean = function(L, b) {
    L.stack[L.top] = new TValue(CT.LUA_TBOOLEAN, b ? true : false);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushlightuserdata = function(L, p) {
    L.stack[L.top] = new TValue(CT.LUA_TLIGHTUSERDATA, p);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const lua_pushthread = function(L) {
    L.stack[L.top] = new TValue(CT.LUA_TTHREAD, L);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    return L.l_G.mainthread === L;
};

const lua_pushglobaltable = function(L) {
    lua_rawgeti(L, defs.LUA_REGISTRYINDEX, defs.LUA_RIDX_GLOBALS);
};

/*
** set functions (stack -> Lua)
*/

/*
** t[k] = value at the top of the stack (where 'k' is a string)
*/
const auxsetstr = function(L, t, k) {
    assert(defs.is_luastring(k), "key must be an array of bytes");

    let str = lstring.luaS_new(L, k);
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    lobject.pushsvalue2s(L, str); /* push 'str' (to make it a TValue) */
    assert(L.top <= L.ci.top, "stack overflow");
    lvm.settable(L, t, L.stack[L.top - 1], L.stack[L.top - 2]);
    /* pop value and key */
    delete L.stack[--L.top];
    delete L.stack[--L.top];
};

const lua_setglobal = function(L, name) {
    auxsetstr(L, ltable.luaH_getint(L.l_G.l_registry.value, defs.LUA_RIDX_GLOBALS), name);
};

const lua_setmetatable = function(L, objindex) {
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let mt;
    let obj = index2addr(L, objindex);
    if (L.stack[L.top - 1].ttisnil())
        mt = null;
    else {
        assert(L.stack[L.top - 1].ttistable(), "table expected");
        mt = L.stack[L.top - 1].value;
    }

    switch (obj.ttnov()) {
        case CT.LUA_TUSERDATA:
        case CT.LUA_TTABLE: {
            obj.value.metatable = mt;
            break;
        }
        default: {
            L.l_G.mt[obj.ttnov()] = mt;
            break;
        }
    }

    delete L.stack[--L.top];
    return true;
};

const lua_settable = function(L, idx) {
    assert(2 < L.top - L.ci.funcOff, "not enough elements in the stack");

    let t = index2addr(L, idx);
    lvm.settable(L, t, L.stack[L.top - 2], L.stack[L.top - 1]);
    delete L.stack[--L.top];
    delete L.stack[--L.top];
};

const lua_setfield = function(L, idx, k) {
    auxsetstr(L, index2addr(L, idx), k);
};

const lua_seti = function(L, idx, n) {
    assert(typeof n === "number" && (n|0) === n);
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let t = index2addr(L, idx);
    L.stack[L.top] = new TValue(CT.LUA_TNUMINT, n);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    lvm.settable(L, t, L.stack[L.top - 1], L.stack[L.top - 2]);
    /* pop value and key */
    delete L.stack[--L.top];
    delete L.stack[--L.top];
};

const lua_rawset = function(L, idx) {
    assert(2 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let o = index2addr(L, idx);
    assert(o.ttistable(), "table expected");
    let k = L.stack[L.top - 2];
    let v = L.stack[L.top - 1];
    if (v.ttisnil()) {
        ltable.luaH_delete(L, o.value, k);
    } else {
        let slot = ltable.luaH_set(L, o.value, k);
        slot.setfrom(v);
    }
    ltable.invalidateTMcache(o.value);
    delete L.stack[--L.top];
    delete L.stack[--L.top];
};

const lua_rawseti = function(L, idx, n) {
    assert(2 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let o = index2addr(L, idx);
    assert(o.ttistable(), "table expected");
    ltable.luaH_setint(o.value, n, L.stack[L.top - 1]);
    delete L.stack[--L.top];
};

const lua_rawsetp = function(L, idx, p) {
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let o = index2addr(L, idx);
    assert(L, o.ttistable(), "table expected");
    let k = new TValue(CT.LUA_TLIGHTUSERDATA, p);
    let v = L.stack[L.top - 1];
    if (v.ttisnil()) {
        ltable.luaH_delete(L, o.value, k);
    } else {
        let slot = ltable.luaH_set(L, o.value, k);
        slot.setfrom(v);
    }
    delete L.stack[--L.top];
};

/*
** get functions (Lua -> stack)
*/

const auxgetstr = function(L, t, k) {
    assert(defs.is_luastring(k), "key must be an array of bytes");
    let str = lstring.luaS_new(L, k);
    lobject.pushsvalue2s(L, str);
    assert(L.top <= L.ci.top, "stack overflow");
    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
    return L.stack[L.top - 1].ttnov();
};

const lua_rawgeti = function(L, idx, n) {
    let t = index2addr(L, idx);
    assert(t.ttistable(), "table expected");
    lobject.pushobj2s(L, ltable.luaH_getint(t.value, n));
    assert(L.top <= L.ci.top, "stack overflow");
    return L.stack[L.top - 1].ttnov();
};

const lua_rawgetp = function(L, idx, p) {
    let t = index2addr(L, idx);
    assert(t.ttistable(), "table expected");
    let k = new TValue(CT.LUA_TLIGHTUSERDATA, p);
    lobject.pushobj2s(L, ltable.luaH_get(L, t.value, k));
    assert(L.top <= L.ci.top, "stack overflow");
    return L.stack[L.top - 1].ttnov();
};

const lua_rawget = function(L, idx) {
    let t = index2addr(L, idx);
    assert(t.ttistable(t), "table expected");
    lobject.setobj2s(L, L.top - 1, ltable.luaH_get(L, t.value, L.stack[L.top - 1]));
    return L.stack[L.top - 1].ttnov();
};

// narray and nrec are mostly useless for this implementation
const lua_createtable = function(L, narray, nrec) {
    let t = new lobject.TValue(CT.LUA_TTABLE, ltable.luaH_new(L));
    L.stack[L.top] = t;
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const luaS_newudata = function(L, size) {
    return new lobject.Udata(L, size);
};

const lua_newuserdata = function(L, size) {
    let u = luaS_newudata(L, size);
    L.stack[L.top] = new lobject.TValue(CT.LUA_TUSERDATA, u);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    return u.data;
};

const aux_upvalue = function(L, fi, n) {
    switch(fi.ttype()) {
        case CT.LUA_TCCL: {  /* C closure */
            let f = fi.value;
            if (!(1 <= n && n <= f.nupvalues)) return null;
            return {
                name: [],
                val: f.upvalue[n-1]
            };
        }
        case CT.LUA_TLCL: {  /* Lua closure */
            let f = fi.value;
            let p = f.p;
            if (!(1 <= n && n <= p.upvalues.length)) return null;
            let name = p.upvalues[n-1].name;
            return {
                name: name ? name.getstr() : defs.to_luastring("(*no name)", true),
                val: f.upvals[n-1].v
            };
        }
        default: return null;  /* not a closure */
    }
};

const lua_getupvalue = function(L, funcindex, n) {
    let up = aux_upvalue(L, index2addr(L, funcindex), n);
    if (up) {
        let name = up.name;
        let val = up.val;
        lobject.pushobj2s(L, val);
        assert(L.top <= L.ci.top, "stack overflow");
        return name;
    }
    return null;
};

const lua_setupvalue = function(L, funcindex, n) {
    let fi = index2addr(L, funcindex);
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let aux = aux_upvalue(L, fi, n);
    if (aux) {
        let name = aux.name;
        let val = aux.val;
        val.setfrom(L.stack[L.top-1]);
        delete L.stack[--L.top];
        return name;
    }
    return null;
};

const lua_newtable = function(L) {
    lua_createtable(L, 0, 0);
};

const lua_register = function(L, n, f) {
    lua_pushcfunction(L, f);
    lua_setglobal(L, n);
};

const lua_getmetatable = function(L, objindex) {
    let obj = index2addr(L, objindex);
    let mt;
    let res = false;
    switch (obj.ttnov()) {
        case CT.LUA_TTABLE:
        case CT.LUA_TUSERDATA:
            mt = obj.value.metatable;
            break;
        default:
            mt = L.l_G.mt[obj.ttnov()];
            break;
    }

    if (mt !== null && mt !== undefined) {
        L.stack[L.top] = new TValue(CT.LUA_TTABLE, mt);
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
        res = true;
    }

    return res;
};

const lua_getuservalue = function(L, idx) {
    let o = index2addr(L, idx);
    assert(L, o.ttisfulluserdata(), "full userdata expected");
    let uv = o.value.uservalue;
    L.stack[L.top] = new TValue(uv.type, uv.value);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    return L.stack[L.top - 1].ttnov();
};

const lua_gettable = function(L, idx) {
    let t = index2addr(L, idx);
    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
    return L.stack[L.top - 1].ttnov();
};

const lua_getfield = function(L, idx, k) {
    return auxgetstr(L, index2addr(L, idx), k);
};

const lua_geti = function(L, idx, n) {
    assert(typeof n === "number" && (n|0) === n);
    let t = index2addr(L, idx);
    L.stack[L.top] = new TValue(CT.LUA_TNUMINT, n);
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
    lvm.luaV_gettable(L, t, L.stack[L.top - 1], L.top - 1);
    return L.stack[L.top - 1].ttnov();
};

const lua_getglobal = function(L, name) {
    return auxgetstr(L, ltable.luaH_getint(L.l_G.l_registry.value, defs.LUA_RIDX_GLOBALS), name);
};

/*
** access functions (stack -> JS)
*/

const lua_toboolean = function(L, idx) {
    let o = index2addr(L, idx);
    return !o.l_isfalse();
};

const lua_tolstring = function(L, idx) {
    let o = index2addr(L, idx);

    if (!o.ttisstring()) {
        if (!lvm.cvt2str(o)) {  /* not convertible? */
            return null;
        }
        lobject.luaO_tostring(L, o);
    }
    return o.svalue();
};

const lua_tostring =  lua_tolstring;

const lua_toljsstring = function(L, idx) {
    let o = index2addr(L, idx);

    if (!o.ttisstring()) {
        if (!lvm.cvt2str(o)) {  /* not convertible? */
            return null;
        }
        lobject.luaO_tostring(L, o);
    }
    return o.jsstring();
};

const lua_tojsstring =  lua_toljsstring;

const lua_todataview = function(L, idx) {
    let o = index2addr(L, idx);

    if (!o.ttisstring()) {
        if (!lvm.cvt2str(o)) {  /* not convertible? */
            return null;
        }
        lobject.luaO_tostring(L, o);
    }

    let dv = new DataView(new ArrayBuffer(o.vslen()));
    o.svalue().forEach((e, i) => dv.setUint8(i, e, true));

    return dv;
};

const lua_rawlen = function(L, idx) {
    let o = index2addr(L, idx);
    switch (o.ttype()) {
        case CT.LUA_TSHRSTR:
        case CT.LUA_TLNGSTR:
            return o.vslen();
        case CT.LUA_TUSERDATA:
            return o.value.len;
        case CT.LUA_TTABLE:
            return ltable.luaH_getn(o.value);
        default:
            return 0;
    }
};

const lua_tocfunction = function(L, idx) {
    let o = index2addr(L, idx);
    if (o.ttislcf() || o.ttisCclosure()) return o.value;
    else return null;  /* not a C function */
};

const lua_tointeger = function(L, idx) {
    return lvm.tointeger(index2addr(L, idx));
};

const lua_tonumber = function(L, idx) {
    let n = lvm.tonumber(index2addr(L, idx));
    return n === false ? 0 : n;
};

const lua_tonumberx = function(L, idx) {
    return lvm.tonumber(index2addr(L, idx));
};

const lua_touserdata = function(L, idx) {
    let o = index2addr(L, idx);
    switch (o.ttnov()) {
        case CT.LUA_TUSERDATA:
            return o.value.data;
        case CT.LUA_TLIGHTUSERDATA:
            return o.value;
        default: return null;
    }
};

const lua_tothread = function(L, idx) {
    let o = index2addr(L, idx);
    return o.ttisthread() ? o.value : null;
};

const lua_topointer = function(L, idx) {
    let o = index2addr(L, idx);
    switch (o.ttype()) {
        case CT.LUA_TTABLE:
        case CT.LUA_TLCL:
        case CT.LUA_TCCL:
        case CT.LUA_TLCF:
        case CT.LUA_TTHREAD:
        case CT.LUA_TUSERDATA: /* note: this differs in behaviour to reference lua implementation */
        case CT.LUA_TLIGHTUSERDATA:
            return o.value;
        default:
            return null;
    }
};


/* A proxy is a function that the same lua value to the given lua state. */

/* Having a weakmap of created proxies was only way I could think of to provide an 'isproxy' function */
const seen = new WeakMap();

/* is the passed object a proxy? is it from the given state? (if passed) */
const lua_isproxy = function(p, L) {
    let G = seen.get(p);
    if (!G)
        return false;
    return (L === null) || (L.l_G === G);
};

/* Use 'create_proxy' helper function so that 'L' is not in scope */
const create_proxy = function(G, type, value) {
    let proxy = function(L) {
        assert(L instanceof lstate.lua_State && G === L.l_G, "must be from same global state");
        L.stack[L.top] = new TValue(type, value);
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
    };
    seen.set(proxy, G);
    return proxy;
};

const lua_toproxy = function(L, idx) {
    let tv = index2addr(L, idx);
    /* pass broken down tv incase it is an upvalue index */
    return create_proxy(L.l_G, tv.type, tv.value);
};


const lua_compare = function(L, index1, index2, op) {
    let o1 = index2addr(L, index1);
    let o2 = index2addr(L, index2);

    let i = 0;

    if (isvalid(o1) && isvalid(o2)) {
        switch (op) {
            case defs.LUA_OPEQ: i = lvm.luaV_equalobj(L, o1, o2); break;
            case defs.LUA_OPLT: i = lvm.luaV_lessthan(L, o1, o2); break;
            case defs.LUA_OPLE: i = lvm.luaV_lessequal(L, o1, o2); break;
            default: assert(false, "invalid option");
        }
    }

    return i;
};

const lua_stringtonumber = function(L, s) {
    let tv = lobject.luaO_str2num(s);
    if (tv) {
        L.stack[L.top] = tv;
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
        return s.length+1;
    }
    return 0;
};

const lua_tointegerx = function(L, idx) {
    return lvm.tointeger(index2addr(L, idx));
};

const f_call = function(L, ud) {
    ldo.luaD_callnoyield(L, ud.funcOff, ud.nresults);
};

const lua_type = function(L, idx) {
    let o = index2addr(L, idx);
    return isvalid(o) ?  o.ttnov() : CT.LUA_TNONE;
};

const lua_typename = function(L, t) {
    assert(CT.LUA_TNONE <= t && t < CT.LUA_NUMTAGS, "invalid tag");
    return ltm.ttypename(t);
};

const lua_iscfunction = function(L, idx) {
    let o = index2addr(L, idx);
    return o.ttislcf(o) || o.ttisCclosure();
};

const lua_isnil = function(L, n) {
    return lua_type(L, n) === CT.LUA_TNIL;
};

const lua_isboolean = function(L, n) {
    return lua_type(L, n) === CT.LUA_TBOOLEAN;
};

const lua_isnone = function(L, n) {
    return lua_type(L, n) === CT.LUA_TNONE;
};

const lua_isnoneornil = function(L, n) {
    return lua_type(L, n) <= 0;
};

const lua_istable = function(L, idx) {
    return index2addr(L, idx).ttistable();
};

const lua_isinteger = function(L, idx) {
    return index2addr(L, idx).ttisinteger();
};

const lua_isnumber = function(L, idx) {
    return lvm.tonumber(index2addr(L, idx)) !== false;
};

const lua_isstring = function(L, idx) {
    let o = index2addr(L, idx);
    return o.ttisstring() || lvm.cvt2str(o);
};

const lua_isuserdata = function(L, idx) {
    let o = index2addr(L, idx);
    return o.ttisfulluserdata(o) || o.ttislightuserdata();
};

const lua_isthread = function(L, idx) {
    return lua_type(L, idx) === CT.LUA_TTHREAD;
};

const lua_isfunction = function(L, idx) {
    return lua_type(L, idx) === CT.LUA_TFUNCTION;
};

const lua_islightuserdata = function(L, idx) {
    return lua_type(L, idx) === CT.LUA_TLIGHTUSERDATA;
};

const lua_rawequal = function(L, index1, index2) {
    let o1 = index2addr(L, index1);
    let o2 = index2addr(L, index2);
    return isvalid(o1) && isvalid(o2) ? lvm.luaV_equalobj(null, o1, o2) : 0; // TODO: isvalid ?
};

const lua_arith = function(L, op) {
    if (op !== defs.LUA_OPUNM && op !== defs.LUA_OPBNOT)
        assert(2 < L.top - L.ci.funcOff, "not enough elements in the stack");  /* all other operations expect two operands */
    else {  /* for unary operations, add fake 2nd operand */
        assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
        lobject.pushobj2s(L, L.stack[L.top-1]);
        assert(L.top <= L.ci.top, "stack overflow");
    }
    /* first operand at top - 2, second at top - 1; result go to top - 2 */
    lobject.luaO_arith(L, op, L.stack[L.top - 2], L.stack[L.top - 1], L.stack[L.top - 2]);
    delete L.stack[--L.top];  /* remove second operand */
};

/*
** 'load' and 'call' functions (run Lua code)
*/

const lua_load = function(L, reader, data, chunkname, mode) {
    assert(defs.is_luastring(chunkname), "lua_load expect an array of byte as chunkname");
    assert(mode ? defs.is_luastring(mode) : true, "lua_load expect an array of byte as mode");
    if (!chunkname) chunkname = [defs.char["?"]];
    let z = new lzio.ZIO(L, reader, data);
    let status = ldo.luaD_protectedparser(L, z, chunkname, mode);
    if (status === TS.LUA_OK) {  /* no errors? */
        let f = L.stack[L.top - 1].value; /* get newly created function */
        if (f.nupvalues >= 1) {  /* does it have an upvalue? */
            /* get global table from registry */
            let gt = ltable.luaH_getint(L.l_G.l_registry.value, defs.LUA_RIDX_GLOBALS);
            /* set global table as 1st upvalue of 'f' (may be LUA_ENV) */
            f.upvals[0].v.setfrom(gt);
        }
    }
    return status;
};

const lua_dump = function(L, writer, data, strip) {
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let o = L.stack[L.top -1];
    if (o.ttisLclosure())
        return ldump.luaU_dump(L, o.value.p, writer, data, strip);
    return 1;
};

const lua_status = function(L) {
    return L.status;
};

const lua_setuservalue = function(L, idx) {
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    let o = index2addr(L, idx);
    assert(L, o.ttisfulluserdata(), "full userdata expected");
    o.value.uservalue.setfrom(L.stack[L.top - 1]);
    delete L.stack[--L.top];
};

const lua_callk = function(L, nargs, nresults, ctx, k) {
    assert(k === null || !(L.ci.callstatus & lstate.CIST_LUA), "cannot use continuations inside hooks");
    assert(nargs + 1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    assert(L.status === TS.LUA_OK, "cannot do calls on non-normal thread");
    assert(nargs === defs.LUA_MULTRET || (L.ci.top - L.top >= nargs - nresults), "results from function overflow current stack size");

    let func = L.top - (nargs + 1);
    if (k !== null && L.nny === 0) { /* need to prepare continuation? */
        L.ci.c_k = k;
        L.ci.c_ctx = ctx;
        ldo.luaD_call(L, func, nresults);
    } else { /* no continuation or no yieldable */
        ldo.luaD_callnoyield(L, func, nresults);
    }

    if (nresults === defs.LUA_MULTRET && L.ci.top < L.top)
        L.ci.top = L.top;
};

const lua_call = function(L, n, r) {
    lua_callk(L, n, r, 0, null);
};

const lua_pcallk = function(L, nargs, nresults, errfunc, ctx, k) {
    assert(nargs + 1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    assert(L.status === TS.LUA_OK, "cannot do calls on non-normal thread");
    assert(nargs === defs.LUA_MULTRET || (L.ci.top - L.top >= nargs - nresults), "results from function overflow current stack size");

    let c = {
        func: null,
        funcOff: NaN,
        nresults: NaN
    };
    let status;
    let func;

    if (errfunc === 0)
        func = 0;
    else {
        // let o = index2addr(L, errfunc);
        // TODO: api_checkstackindex(L, errfunc, o);
        func = index2addr_(L, errfunc);
    }

    c.funcOff = L.top - (nargs + 1); /* function to be called */
    c.func = L.stack[c.funcOff];

    if (k === null || L.nny > 0) { /* no continuation or no yieldable? */
        c.nresults = nresults; /* do a 'conventional' protected call */
        status = ldo.luaD_pcall(L, f_call, c, c.funcOff, func);
    } else { /* prepare continuation (call is already protected by 'resume') */
        let ci = L.ci;
        ci.c_k = k;  /* prepare continuation (call is already protected by 'resume') */
        ci.c_ctx = ctx;  /* prepare continuation (call is already protected by 'resume') */
        /* save information for error recovery */
        ci.extra = c.funcOff;
        ci.c_old_errfunc = L.errfunc;
        L.errfunc = func;
        ci.callstatus &= ~lstate.CIST_OAH | L.allowhook;
        ci.callstatus |= lstate.CIST_YPCALL;  /* function can do error recovery */
        ldo.luaD_call(L, c.funcOff, nresults);  /* do the call */
        ci.callstatus &= ~lstate.CIST_YPCALL;
        L.errfunc = ci.c_old_errfunc;
        status = TS.LUA_OK;
    }

    if (nresults === defs.LUA_MULTRET && L.ci.top < L.top)
        L.ci.top = L.top;

    return status;
};

const lua_pcall = function(L, n, r, f) {
    return lua_pcallk(L, n, r, f, 0, null);
};

/*
** miscellaneous functions
*/

const lua_error = function(L) {
    assert(1 < L.top - L.ci.funcOff, "not enough elements in the stack");
    ldebug.luaG_errormsg(L);
};

const lua_next = function(L, idx) {
    let t = index2addr(L, idx);
    assert(t.ttistable(), "table expected");
    L.stack[L.top] = new TValue();
    let more = ltable.luaH_next(L, t.value, L.top - 1);
    if (more) {
        L.top++;
        assert(L.top <= L.ci.top, "stack overflow");
        return 1;
    } else {
        delete L.stack[L.top];
        delete L.stack[--L.top];
        return 0;
    }
};

const lua_concat = function(L, n) {
    assert(n < L.top - L.ci.funcOff, "not enough elements in the stack");
    if (n >= 2)
        lvm.luaV_concat(L, n);
    else if (n === 0) {
        lobject.pushsvalue2s(L, lstring.luaS_bless(L, []));
        assert(L.top <= L.ci.top, "stack overflow");
    }
};

const lua_len = function(L, idx) {
    let t = index2addr(L, idx);
    let tv = new TValue();
    lvm.luaV_objlen(L, tv, t);
    L.stack[L.top] = tv;
    L.top++;
    assert(L.top <= L.ci.top, "stack overflow");
};

const getupvalref = function(L, fidx, n) {
    let fi = index2addr(L, fidx);
    assert(fi.ttisLclosure(), "Lua function expected");
    let f = fi.value;
    assert(1 <= n && n <= f.p.upvalues.length, "invalid upvalue index");
    return {
        closure: f,
        upval: f.upvals[n - 1],
        upvalOff: n - 1
    };
};

const lua_upvalueid = function(L, fidx, n) {
    let fi = index2addr(L, fidx);
    switch (fi.ttype()) {
        case CT.LUA_TLCL: {  /* lua closure */
            return getupvalref(L, fidx, n).upval;
        }
        case CT.LUA_TCCL: {  /* C closure */
            let f = fi.value;
            assert(1 <= n && n <= f.nupvalues, "invalid upvalue index");
            return f.upvalue[n - 1];
        }
        default: {
            assert(false, "closure expected");
            return null;
        }
    }
};

const lua_upvaluejoin = function(L, fidx1, n1, fidx2, n2) {
    let ref1 = getupvalref(L, fidx1, n1);
    let ref2 = getupvalref(L, fidx2, n2);
    let up1 = ref1.upval;
    let up2 = ref2.upval;
    let f1 = ref1.closure;
    assert(up1.refcount > 0);
    up1.refcount--;
    f1.upvals[ref1.upvalOff] = up2;
    up2.refcount++;
};

// This functions are only there for compatibility purposes
const lua_gc = function () {};

const lua_getallocf = function () {
    console.warn("lua_getallocf is not available");
    return 0;
};

const lua_setallocf = function () {
    console.warn("lua_setallocf is not available");
    return 0;
};

const lua_getextraspace = function () {
    console.warn("lua_getextraspace is not available");
    return 0;
};

module.exports.index2addr            = index2addr;
module.exports.index2addr_           = index2addr_;
module.exports.lua_absindex          = lua_absindex;
module.exports.lua_arith             = lua_arith;
module.exports.lua_atpanic           = lua_atpanic;
module.exports.lua_atnativeerror     = lua_atnativeerror;
module.exports.lua_call              = lua_call;
module.exports.lua_callk             = lua_callk;
module.exports.lua_checkstack        = lua_checkstack;
module.exports.lua_compare           = lua_compare;
module.exports.lua_concat            = lua_concat;
module.exports.lua_copy              = lua_copy;
module.exports.lua_createtable       = lua_createtable;
module.exports.lua_dump              = lua_dump;
module.exports.lua_error             = lua_error;
module.exports.lua_gc                = lua_gc;
module.exports.lua_getallocf         = lua_getallocf;
module.exports.lua_getextraspace     = lua_getextraspace;
module.exports.lua_getfield          = lua_getfield;
module.exports.lua_getglobal         = lua_getglobal;
module.exports.lua_geti              = lua_geti;
module.exports.lua_getmetatable      = lua_getmetatable;
module.exports.lua_gettable          = lua_gettable;
module.exports.lua_gettop            = lua_gettop;
module.exports.lua_getupvalue        = lua_getupvalue;
module.exports.lua_getuservalue      = lua_getuservalue;
module.exports.lua_insert            = lua_insert;
module.exports.lua_isboolean         = lua_isboolean;
module.exports.lua_iscfunction       = lua_iscfunction;
module.exports.lua_isfunction        = lua_isfunction;
module.exports.lua_isinteger         = lua_isinteger;
module.exports.lua_islightuserdata   = lua_islightuserdata;
module.exports.lua_isnil             = lua_isnil;
module.exports.lua_isnone            = lua_isnone;
module.exports.lua_isnoneornil       = lua_isnoneornil;
module.exports.lua_isnumber          = lua_isnumber;
module.exports.lua_isproxy           = lua_isproxy;
module.exports.lua_isstring          = lua_isstring;
module.exports.lua_istable           = lua_istable;
module.exports.lua_isthread          = lua_isthread;
module.exports.lua_isuserdata        = lua_isuserdata;
module.exports.lua_len               = lua_len;
module.exports.lua_load              = lua_load;
module.exports.lua_newtable          = lua_newtable;
module.exports.lua_newuserdata       = lua_newuserdata;
module.exports.lua_next              = lua_next;
module.exports.lua_pcall             = lua_pcall;
module.exports.lua_pcallk            = lua_pcallk;
module.exports.lua_pop               = lua_pop;
module.exports.lua_pushboolean       = lua_pushboolean;
module.exports.lua_pushcclosure      = lua_pushcclosure;
module.exports.lua_pushcfunction     = lua_pushcfunction;
module.exports.lua_pushfstring       = lua_pushfstring;
module.exports.lua_pushglobaltable   = lua_pushglobaltable;
module.exports.lua_pushinteger       = lua_pushinteger;
module.exports.lua_pushjsclosure     = lua_pushjsclosure;
module.exports.lua_pushjsfunction    = lua_pushjsfunction;
module.exports.lua_pushlightuserdata = lua_pushlightuserdata;
module.exports.lua_pushliteral       = lua_pushliteral;
module.exports.lua_pushlstring       = lua_pushlstring;
module.exports.lua_pushnil           = lua_pushnil;
module.exports.lua_pushnumber        = lua_pushnumber;
module.exports.lua_pushstring        = lua_pushstring;
module.exports.lua_pushthread        = lua_pushthread;
module.exports.lua_pushvalue         = lua_pushvalue;
module.exports.lua_pushvfstring      = lua_pushvfstring;
module.exports.lua_rawequal          = lua_rawequal;
module.exports.lua_rawget            = lua_rawget;
module.exports.lua_rawgeti           = lua_rawgeti;
module.exports.lua_rawgetp           = lua_rawgetp;
module.exports.lua_rawlen            = lua_rawlen;
module.exports.lua_rawset            = lua_rawset;
module.exports.lua_rawseti           = lua_rawseti;
module.exports.lua_rawsetp           = lua_rawsetp;
module.exports.lua_register          = lua_register;
module.exports.lua_remove            = lua_remove;
module.exports.lua_replace           = lua_replace;
module.exports.lua_rotate            = lua_rotate;
module.exports.lua_setallocf         = lua_setallocf;
module.exports.lua_setfield          = lua_setfield;
module.exports.lua_setglobal         = lua_setglobal;
module.exports.lua_seti              = lua_seti;
module.exports.lua_setmetatable      = lua_setmetatable;
module.exports.lua_settable          = lua_settable;
module.exports.lua_settop            = lua_settop;
module.exports.lua_setupvalue        = lua_setupvalue;
module.exports.lua_setuservalue      = lua_setuservalue;
module.exports.lua_status            = lua_status;
module.exports.lua_stringtonumber    = lua_stringtonumber;
module.exports.lua_toboolean         = lua_toboolean;
module.exports.lua_tocfunction       = lua_tocfunction;
module.exports.lua_todataview        = lua_todataview;
module.exports.lua_tointeger         = lua_tointeger;
module.exports.lua_tointegerx        = lua_tointegerx;
module.exports.lua_tojsstring        = lua_tojsstring;
module.exports.lua_toljsstring       = lua_toljsstring;
module.exports.lua_tolstring         = lua_tolstring;
module.exports.lua_tonumber          = lua_tonumber;
module.exports.lua_tonumberx         = lua_tonumberx;
module.exports.lua_topointer         = lua_topointer;
module.exports.lua_toproxy           = lua_toproxy;
module.exports.lua_tostring          = lua_tostring;
module.exports.lua_tothread          = lua_tothread;
module.exports.lua_touserdata        = lua_touserdata;
module.exports.lua_type              = lua_type;
module.exports.lua_typename          = lua_typename;
module.exports.lua_upvalueid         = lua_upvalueid;
module.exports.lua_upvaluejoin       = lua_upvaluejoin;
module.exports.lua_version           = lua_version;
module.exports.lua_xmove             = lua_xmove;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const lua      = __webpack_require__(2);
const lauxlib  = __webpack_require__(6);
const lualib   = __webpack_require__(29);

module.exports.lua     = lua;
module.exports.lauxlib = lauxlib;
module.exports.lualib  = lualib;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(39);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(40);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(19)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (Array.isArray(parse_tree[i])) {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                        break
                    case 'e':
                        arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                        break
                    case 'g':
                        arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(match[8])) {
                    output += arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' '
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }
                parse_tree.push(match)
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}()


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const lisdigit = function(c) {
    return /^\d$/.test(String.fromCharCode(c));
};

const lisxdigit = function(c) {
    return /^[0-9a-fA-F]$/.test(String.fromCharCode(c));
};

const lisprint = function(c) {
    return /^[\x20-\x7E]$/.test(String.fromCharCode(c));
};

const lisspace = function(c) {
    return /^\s$/.test(String.fromCharCode(c));
};

const lislalpha = function(c) {
    return /^[_a-zA-Z]$/.test(String.fromCharCode(c));
};

const lislalnum = function(c) {
    return /^[_a-zA-Z0-9]$/.test(String.fromCharCode(c));
};

module.exports.lisdigit   = lisdigit;
module.exports.lislalnum  = lislalnum;
module.exports.lislalpha  = lislalpha;
module.exports.lisprint   = lisprint;
module.exports.lisspace   = lisspace;
module.exports.lisxdigit  = lisxdigit;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert = __webpack_require__(0);

const defs     = __webpack_require__(1);
const lcode    = __webpack_require__(41);
const ldo      = __webpack_require__(7);
const lfunc    = __webpack_require__(12);
const llex     = __webpack_require__(28);
const llimit   = __webpack_require__(5);
const lobject  = __webpack_require__(3);
const lopcodes = __webpack_require__(16);
const lstring  = __webpack_require__(9);
const ltable   = __webpack_require__(8);
const BinOpr   = lcode.BinOpr;
const OpCodesI = lopcodes.OpCodesI;
const Proto    = lfunc.Proto;
const R        = llex.RESERVED;
const UnOpr    = lcode.UnOpr;
const char     = defs.char;

const MAXVARS = 200;

const hasmultret = function(k) {
    return k === expkind.VCALL || k === expkind.VVARARG;
};

const eqstr = function(a, b) {
    /* TODO: use plain equality as strings are cached */
    return lstring.luaS_eqlngstr(a, b);
};

class BlockCnt {
    constructor() {
        this.previous = null;  /* chain */
        this.firstlabel = NaN; /* index of first label in this block */
        this.firstgoto = NaN;  /* index of first pending goto in this block */
        this.nactvar = NaN;    /* # active locals outside the block */
        this.upval = NaN;      /* true if some variable in the block is an upvalue */
        this.isloop = NaN;     /* true if 'block' is a loop */
    }
}

const expkind = {
    VVOID: 0,        /* when 'expdesc' describes the last expression a list,
                        this kind means an empty list (so, no expression) */
    VNIL: 1,         /* constant nil */
    VTRUE: 2,        /* constant true */
    VFALSE: 3,       /* constant false */
    VK: 4,           /* constant in 'k'; info = index of constant in 'k' */
    VKFLT: 5,        /* floating constant; nval = numerical float value */
    VKINT: 6,        /* integer constant; nval = numerical integer value */
    VNONRELOC: 7,    /* expression has its value in a fixed register;
                        info = result register */
    VLOCAL: 8,       /* local variable; info = local register */
    VUPVAL: 9,       /* upvalue variable; info = index of upvalue in 'upvalues' */
    VINDEXED: 10,    /* indexed variable;
                        ind.vt = whether 't' is register or upvalue;
                        ind.t = table register or upvalue;
                        ind.idx = key's R/K index */
    VJMP: 11,        /* expression is a test/comparison;
                        info = pc of corresponding jump instruction */
    VRELOCABLE: 12,  /* expression can put result in any register;
                        info = instruction pc */
    VCALL: 13,       /* expression is a function call; info = instruction pc */
    VVARARG: 14      /* vararg expression; info = instruction pc */
};

const vkisvar = function(k) {
    return expkind.VLOCAL <= k && k <= expkind.VINDEXED;
};

const vkisinreg = function(k) {
    return k === expkind.VNONRELOC || k === expkind.VLOCAL;
};

class expdesc {
    constructor() {
        this.k = NaN;
        this.u = {
            ival: NaN,    /* for VKINT */
            nval: NaN,    /* for VKFLT */
            info: NaN,    /* for generic use */
            ind: {        /* for indexed variables (VINDEXED) */
                idx: NaN, /* index (R/K) */
                t: NaN,   /* table (register or upvalue) */
                vt: NaN   /* whether 't' is register (VLOCAL) or upvalue (VUPVAL) */
            }
        };
        this.t = NaN;     /* patch list of 'exit when true' */
        this.f = NaN;     /* patch list of 'exit when false' */
    }

    to(e) { // Copy e content to this, cf. luaK_posfix
        this.k = e.k;
        this.u = e.u;
        this.t = e.t;
        this.f = e.f;
    }
}

class FuncState {
    constructor() {
        this.f = null;         /* current function header */
        this.prev = null;      /* enclosing function */
        this.ls = null;        /* lexical state */
        this.bl = null;        /* chain of current blocks */
        this.pc = NaN;         /* next position to code (equivalent to 'ncode') */
        this.lasttarget = NaN; /* 'label' of last 'jump label' */
        this.jpc = NaN;        /* list of pending jumps to 'pc' */
        this.nk = NaN;         /* number of elements in 'k' */
        this.np = NaN;         /* number of elements in 'p' */
        this.firstlocal = NaN; /* index of first local var (in Dyndata array) */
        this.nlocvars = NaN;   /* number of elements in 'f->locvars' */
        this.nactvar = NaN;    /* number of active local variables */
        this.nups = NaN;       /* number of upvalues */
        this.freereg = NaN;    /* first free register */
    }
}

    /* description of active local variable */
class Vardesc {
    constructor() {
        this.idx = NaN;  /* variable index in stack */
    }
}


/* description of pending goto statements and label statements */
class Labeldesc {
    constructor() {
        this.name = null;  /* label identifier */
        this.pc = NaN;  /* position in code */
        this.line = NaN;  /* line where it appeared */
        this.nactvar = NaN;  /* local level where it appears in current block */
    }
}


/* list of labels or gotos */
class Labellist {
    constructor() {
        this.arr = []; /* array */
        this.n = NaN;  /* number of entries in use */
        this.size = NaN;  /* array size */
    }
}

/* dynamic structures used by the parser */
class Dyndata {
    constructor() {
        this.actvar = {  /* list of active local variables */
            arr: [],
            n: NaN,
            size: NaN
        };
        this.gt = new Labellist();
        this.label = new Labellist();
    }
}

const semerror = function(ls, msg) {
    ls.t.token = 0;  /* remove "near <token>" from final message */
    llex.luaX_syntaxerror(ls, msg);
};

const error_expected = function(ls, token) {
    llex.luaX_syntaxerror(ls, lobject.luaO_pushfstring(ls.L, defs.to_luastring("%s expected", true), llex.luaX_token2str(ls, token)));
};

const errorlimit = function(fs, limit, what) {
    let L = fs.ls.L;
    let line = fs.f.linedefined;
    let where = (line === 0)
        ? defs.to_luastring("main function", true)
        : lobject.luaO_pushfstring(L, defs.to_luastring("function at line %d", true), line);
    let msg = lobject.luaO_pushfstring(L, defs.to_luastring("too many %s (limit is %d) in %s", true),
        what, limit, where);
    llex.luaX_syntaxerror(fs.ls, msg);
};

const checklimit = function(fs, v, l, what) {
    if (v > l) errorlimit(fs, l, what);
};

const testnext = function(ls, c) {
    if (ls.t.token === c) {
        llex.luaX_next(ls);
        return true;
    }

    return false;
};

const check = function(ls, c) {
    if (ls.t.token !== c)
        error_expected(ls, c);
};

const checknext = function(ls, c) {
    check(ls, c);
    llex.luaX_next(ls);
};

const check_condition = function(ls, c, msg) {
    if (!c)
        llex.luaX_syntaxerror(ls, msg);
};

const check_match = function(ls, what, who, where) {
    if (!testnext(ls, what)) {
        if (where === ls.linenumber)
            error_expected(ls, what);
        else
            llex.luaX_syntaxerror(ls, lobject.luaO_pushfstring(ls.L,
                defs.to_luastring("%s expected (to close %s at line %d)"),
                    llex.luaX_token2str(ls, what), llex.luaX_token2str(ls, who), where));
    }
};

const str_checkname = function(ls) {
    check(ls, R.TK_NAME);
    let ts = ls.t.seminfo.ts;
    llex.luaX_next(ls);
    return ts;
};

const init_exp = function(e, k, i) {
    e.f = e.t = lcode.NO_JUMP;
    e.k = k;
    e.u.info = i;
};

const codestring = function(ls, e, s) {
    init_exp(e, expkind.VK, lcode.luaK_stringK(ls.fs, s));
};

const checkname = function(ls, e) {
    codestring(ls, e, str_checkname(ls));
};

const registerlocalvar = function(ls, varname) {
    let fs = ls.fs;
    let f = fs.f;
    f.locvars[fs.nlocvars] = new lobject.LocVar();
    f.locvars[fs.nlocvars].varname = varname;
    return fs.nlocvars++;
};

const new_localvar = function(ls, name) {
    let fs = ls.fs;
    let dyd = ls.dyd;
    let reg = registerlocalvar(ls, name);
    checklimit(fs, dyd.actvar.n + 1 - fs.firstlocal, MAXVARS, defs.to_luastring("local variables", true));
    dyd.actvar.arr[dyd.actvar.n] = new Vardesc();
    dyd.actvar.arr[dyd.actvar.n].idx = reg;
    dyd.actvar.n++;
};

const new_localvarliteral = function(ls, name) {
    new_localvar(ls, llex.luaX_newstring(ls, defs.to_luastring(name, true)));
};

const getlocvar = function(fs, i) {
    let idx = fs.ls.dyd.actvar.arr[fs.firstlocal + i].idx;
    assert(idx < fs.nlocvars);
    return fs.f.locvars[idx];
};

const adjustlocalvars = function(ls, nvars) {
    let fs = ls.fs;
    fs.nactvar = fs.nactvar + nvars;
    for (; nvars; nvars--)
        getlocvar(fs, fs.nactvar - nvars).startpc = fs.pc;
};

const removevars = function(fs, tolevel) {
    fs.ls.dyd.actvar.n -= fs.nactvar - tolevel;
    while (fs.nactvar > tolevel)
        getlocvar(fs, --fs.nactvar).endpc = fs.pc;
};

const searchupvalue = function(fs, name) {
    let up = fs.f.upvalues;
    for (let i = 0; i < fs.nups; i++) {
        if (eqstr(up[i].name, name))
            return i;
    }
    return -1;  /* not found */
};

const newupvalue = function(fs, name, v) {
    let f = fs.f;
    checklimit(fs, fs.nups + 1, lfunc.MAXUPVAL, defs.to_luastring("upvalues", true));
    f.upvalues[fs.nups] = {
        instack: v.k === expkind.VLOCAL,
        idx: v.u.info,
        name: name
    };
    return fs.nups++;
};

const searchvar = function(fs, n) {
    for (let i = fs.nactvar - 1; i >= 0; i--) {
        if (eqstr(n, getlocvar(fs, i).varname))
            return i;
    }

    return -1;
};

/*
** Mark block where variable at given level was defined
** (to emit close instructions later).
*/
const markupval = function(fs, level) {
    let bl = fs.bl;
    while (bl.nactvar > level)
        bl = bl.previous;
    bl.upval = 1;
};

/*
** Find variable with given name 'n'. If it is an upvalue, add this
** upvalue into all intermediate functions.
*/
const singlevaraux = function(fs, n, vr, base) {
    if (fs === null)  /* no more levels? */
        init_exp(vr, expkind.VVOID, 0);  /* default is global */
    else {
        let v = searchvar(fs, n);  /* look up locals at current level */
        if (v >= 0) {  /* found? */
            init_exp(vr, expkind.VLOCAL, v);  /* variable is local */
            if (!base)
                markupval(fs, v);  /* local will be used as an upval */
        } else {  /* not found as local at current level; try upvalues */
            let idx = searchupvalue(fs, n);  /* try existing upvalues */
            if (idx < 0) {  /* not found? */
                singlevaraux(fs.prev, n, vr, 0);  /* try upper levels */
                if (vr.k === expkind.VVOID)  /* not found? */
                    return;  /* it is a global */
                /* else was LOCAL or UPVAL */
                idx = newupvalue(fs, n, vr);  /* will be a new upvalue */
            }
            init_exp(vr, expkind.VUPVAL, idx);  /* new or old upvalue */
        }
    }
};

const singlevar = function(ls, vr) {
    let varname = str_checkname(ls);
    let fs = ls.fs;
    singlevaraux(fs, varname, vr, 1);
    if (vr.k === expkind.VVOID) {  /* global name? */
        let key = new expdesc();
        singlevaraux(fs, ls.envn, vr, 1);  /* get environment variable */
        assert(vr.k !== expkind.VVOID);  /* this one must exist */
        codestring(ls, key, varname);  /* key is variable name */
        lcode.luaK_indexed(fs, vr, key);  /* env[varname] */
    }
};

const adjust_assign = function(ls, nvars, nexps, e) {
    let fs = ls.fs;
    let extra = nvars - nexps;
    if (hasmultret(e.k)) {
        extra++;  /* includes call itself */
        if (extra < 0) extra = 0;
        lcode.luaK_setreturns(fs, e, extra);  /* last exp. provides the difference */
        if (extra > 1) lcode.luaK_reserveregs(fs, extra - 1);
    } else {
        if (e.k !== expkind.VVOID) lcode.luaK_exp2nextreg(fs, e);  /* close last expression */
        if (extra > 0) {
            let reg = fs.freereg;
            lcode.luaK_reserveregs(fs, extra);
            lcode.luaK_nil(fs, reg, extra);
        }
    }
    if (nexps > nvars)
        ls.fs.freereg -= nexps - nvars;  /* remove extra values */
};

const enterlevel = function(ls) {
    let L = ls.L;
    ++L.nCcalls;
    checklimit(ls.fs, L.nCcalls, llimit.LUAI_MAXCCALLS, defs.to_luastring("JS levels", true));
};

const leavelevel = function(ls) {
    return ls.L.nCcalls--;
};

const closegoto = function(ls, g, label) {
    let fs = ls.fs;
    let gl = ls.dyd.gt;
    let gt = gl.arr[g];
    assert(eqstr(gt.name, label.name));
    if (gt.nactvar < label.nactvar) {
        let vname = getlocvar(fs, gt.nactvar).varname;
        let msg = lobject.luaO_pushfstring(ls.L,
            defs.to_luastring("<goto %s> at line %d jumps into the scope of local '%s'"),
            gt.name.getstr(), gt.line, vname.getstr());
        semerror(ls, msg);
    }
    lcode.luaK_patchlist(fs, gt.pc, label.pc);
    /* remove goto from pending list */
    for (let i = g; i < gl.n - 1; i++)
        gl.arr[i] = gl.arr[i + 1];
    gl.n--;
};

/*
** try to close a goto with existing labels; this solves backward jumps
*/
const findlabel = function(ls, g) {
    let bl = ls.fs.bl;
    let dyd = ls.dyd;
    let gt = dyd.gt.arr[g];
    /* check labels in current block for a match */
    for (let i = bl.firstlabel; i < dyd.label.n; i++) {
        let lb = dyd.label.arr[i];
        if (eqstr(lb.name, gt.name)) {  /* correct label? */
            if (gt.nactvar > lb.nactvar && (bl.upval || dyd.label.n > bl.firstlabel))
                lcode.luaK_patchclose(ls.fs, gt.pc, lb.nactvar);
            closegoto(ls, g, lb);  /* close it */
            return true;
        }
    }
    return false;  /* label not found; cannot close goto */
};

const newlabelentry = function(ls, l, name, line, pc) {
    let n = l.n;
    l.arr[n] = new Labeldesc();
    l.arr[n].name = name;
    l.arr[n].line = line;
    l.arr[n].nactvar = ls.fs.nactvar;
    l.arr[n].pc = pc;
    l.n = n + 1;
    return n;
};

/*
** check whether new label 'lb' matches any pending gotos in current
** block; solves forward jumps
*/
const findgotos = function(ls, lb) {
    let gl = ls.dyd.gt;
    let i = ls.fs.bl.firstgoto;
    while (i < gl.n) {
        if (eqstr(gl.arr[i].name, lb.name))
            closegoto(ls, i, lb);
        else
            i++;
    }
};

/*
** export pending gotos to outer level, to check them against
** outer labels; if the block being exited has upvalues, and
** the goto exits the scope of any variable (which can be the
** upvalue), close those variables being exited.
*/
const movegotosout = function(fs, bl) {
    let i = bl.firstgoto;
    let gl = fs.ls.dyd.gt;
    /* correct pending gotos to current block and try to close it
       with visible labels */
    while (i < gl.n) {
        let gt = gl.arr[i];
        if (gt.nactvar > bl.nactvar) {
            if (bl.upval)
                lcode.luaK_patchclose(fs, gt.pc, bl.nactvar);
            gt.nactvar = bl.nactvar;
        }
        if (!findlabel(fs.ls, i))
            i++;  /* move to next one */
    }
};

const enterblock = function(fs, bl, isloop) {
    bl.isloop = isloop;
    bl.nactvar = fs.nactvar;
    bl.firstlabel = fs.ls.dyd.label.n;
    bl.firstgoto = fs.ls.dyd.gt.n;
    bl.upval = 0;
    bl.previous = fs.bl;
    fs.bl = bl;
    assert(fs.freereg === fs.nactvar);
};

/*
** create a label named 'break' to resolve break statements
*/
const breaklabel = function(ls) {
    let n = lstring.luaS_newliteral(ls.L, "break");
    let l = newlabelentry(ls, ls.dyd.label, n, 0, ls.fs.pc);
    findgotos(ls, ls.dyd.label.arr[l]);
};

/*
** generates an error for an undefined 'goto'; choose appropriate
** message when label name is a reserved word (which can only be 'break')
*/
const undefgoto = function(ls, gt) {
    let msg = llex.isreserved(gt.name)
              ? "<%s> at line %d not inside a loop"
              : "no visible label '%s' for <goto> at line %d";
    msg = lobject.luaO_pushfstring(ls.L, defs.to_luastring(msg), gt.name.getstr(), gt.line);
    semerror(ls, msg);
};

/*
** adds a new prototype into list of prototypes
*/
const addprototype = function(ls) {
    let L = ls.L;
    let clp = new Proto(L);
    let fs = ls.fs;
    let f = fs.f;  /* prototype of current function */
    f.p[fs.np++] = clp;
    return clp;
};

/*
** codes instruction to create new closure in parent function.
*/
const codeclosure = function(ls, v) {
    let fs = ls.fs.prev;
    init_exp(v, expkind.VRELOCABLE, lcode.luaK_codeABx(fs, OpCodesI.OP_CLOSURE, 0, fs.np -1));
    lcode.luaK_exp2nextreg(fs, v);  /* fix it at the last register */
};

const open_func = function(ls, fs, bl) {
    fs.prev = ls.fs;  /* linked list of funcstates */
    fs.ls = ls;
    ls.fs = fs;
    fs.pc = 0;
    fs.lasttarget = 0;
    fs.jpc = lcode.NO_JUMP;
    fs.freereg = 0;
    fs.nk = 0;
    fs.np = 0;
    fs.nups = 0;
    fs.nlocvars = 0;
    fs.nactvar = 0;
    fs.firstlocal = ls.dyd.actvar.n;
    fs.bl = null;
    let f = new Proto(ls.L);
    f = fs.f;
    f.source = ls.source;
    f.maxstacksize = 2;  /* registers 0/1 are always valid */
    enterblock(fs, bl, false);
};

const leaveblock = function(fs) {
    let bl = fs.bl;
    let ls = fs.ls;
    if (bl.previous && bl.upval) {
        /* create a 'jump to here' to close upvalues */
        let j = lcode.luaK_jump(fs);
        lcode.luaK_patchclose(fs, j , bl.nactvar);
        lcode.luaK_patchtohere(fs, j);
    }

    if (bl.isloop)
        breaklabel(ls);  /* close pending breaks */

    fs.bl = bl.previous;
    removevars(fs, bl.nactvar);
    assert(bl.nactvar === fs.nactvar);
    fs.freereg = fs.nactvar;  /* free registers */
    ls.dyd.label.n = bl.firstlabel;  /* remove local labels */
    if (bl.previous)  /* inner block? */
        movegotosout(fs, bl);  /* update pending gotos to outer block */
    else if (bl.firstgoto < ls.dyd.gt.n)  /* pending gotos in outer block? */
        undefgoto(ls, ls.dyd.gt.arr[bl.firstgoto]);  /* error */
};

const close_func = function(ls) {
    let fs = ls.fs;
    lcode.luaK_ret(fs, 0, 0);  /* final return */
    leaveblock(fs);
    assert(fs.bl === null);
    ls.fs = fs.prev;
};

/*============================================================*/
/* GRAMMAR RULES */
/*============================================================*/

const block_follow = function(ls, withuntil) {
    switch (ls.t.token) {
        case R.TK_ELSE: case R.TK_ELSEIF:
        case R.TK_END: case R.TK_EOS:
            return true;
        case R.TK_UNTIL: return withuntil;
        default: return false;
    }
};

const statlist = function(ls) {
    /* statlist -> { stat [';'] } */
    while (!block_follow(ls, 1)) {
        if (ls.t.token === R.TK_RETURN) {
            statement(ls);
            return;  /* 'return' must be last statement */
        }
        statement(ls);
    }
};

const fieldsel = function(ls, v) {
    /* fieldsel -> ['.' | ':'] NAME */
    let fs = ls.fs;
    let key = new expdesc();
    lcode.luaK_exp2anyregup(fs, v);
    llex.luaX_next(ls);  /* skip the dot or colon */
    checkname(ls, key);
    lcode.luaK_indexed(fs, v, key);
};

const yindex = function(ls, v) {
    /* index -> '[' expr ']' */
    llex.luaX_next(ls);  /* skip the '[' */
    expr(ls, v);
    lcode.luaK_exp2val(ls.fs, v);
    checknext(ls, char[']']);
};

/*
** {======================================================================
** Rules for Constructors
** =======================================================================
*/

class ConsControl {
    constructor() {
        this.v = new expdesc(); /* last list item read */
        this.t = new expdesc(); /* table descriptor */
        this.nh = NaN;          /* total number of 'record' elements */
        this.na = NaN;          /* total number of array elements */
        this.tostore = NaN;     /* number of array elements pending to be stored */
    }
}

const recfield = function(ls, cc) {
    /* recfield -> (NAME | '['exp1']') = exp1 */
    let fs = ls.fs;
    let reg = ls.fs.freereg;
    let key = new expdesc();
    let val = new expdesc();

    if (ls.t.token === R.TK_NAME) {
        checklimit(fs, cc.nh, llimit.MAX_INT, defs.to_luastring("items in a constructor", true));
        checkname(ls, key);
    } else  /* ls->t.token === '[' */
        yindex(ls, key);
    cc.nh++;
    checknext(ls, char['=']);
    let rkkey = lcode.luaK_exp2RK(fs, key);
    expr(ls, val);
    lcode.luaK_codeABC(fs, OpCodesI.OP_SETTABLE, cc.t.u.info, rkkey, lcode.luaK_exp2RK(fs, val));
    fs.freereg = reg;  /* free registers */
};

const closelistfield = function(fs, cc) {
    if (cc.v.k === expkind.VVOID) return;  /* there is no list item */
    lcode.luaK_exp2nextreg(fs, cc.v);
    cc.v.k = expkind.VVOID;
    if (cc.tostore === lopcodes.LFIELDS_PER_FLUSH) {
        lcode.luaK_setlist(fs, cc.t.u.info, cc.na, cc.tostore);  /* flush */
        cc.tostore = 0;  /* no more items pending */
    }
};

const lastlistfield = function(fs, cc) {
    if (cc.tostore === 0) return;
    if (hasmultret(cc.v.k)) {
        lcode.luaK_setmultret(fs, cc.v);
        lcode.luaK_setlist(fs, cc.t.u.info, cc.na, defs.LUA_MULTRET);
        cc.na--;  /* do not count last expression (unknown number of elements) */
    } else {
        if (cc.v.k !== expkind.VVOID)
            lcode.luaK_exp2nextreg(fs, cc.v);
        lcode.luaK_setlist(fs, cc.t.u.info, cc.na, cc.tostore);
    }
};

const listfield = function(ls, cc) {
    /* listfield -> exp */
    expr(ls, cc.v);
    checklimit(ls.fs, cc.na, llimit.MAX_INT, defs.to_luastring("items in a constructor", true));
    cc.na++;
    cc.tostore++;
};

const field = function(ls, cc) {
    /* field -> listfield | recfield */
    switch (ls.t.token) {
        case R.TK_NAME: {  /* may be 'listfield' or 'recfield' */
            if (llex.luaX_lookahead(ls) !== char['='])  /* expression? */
                listfield(ls, cc);
            else
                recfield(ls, cc);
            break;
        }
        case char['[']: {
            recfield(ls, cc);
            break;
        }
        default: {
            listfield(ls, cc);
            break;
        }
    }
};

const constructor = function(ls, t) {
    /* constructor -> '{' [ field { sep field } [sep] ] '}'
       sep -> ',' | ';' */
    let fs = ls.fs;
    let line = ls.linenumber;
    let pc = lcode.luaK_codeABC(fs, OpCodesI.OP_NEWTABLE, 0, 0, 0);
    let cc = new ConsControl();
    cc.na = cc.nh = cc.tostore = 0;
    cc.t = t;
    init_exp(t, expkind.VRELOCABLE, pc);
    init_exp(cc.v, expkind.VVOID, 0);  /* no value (yet) */
    lcode.luaK_exp2nextreg(ls.fs, t);  /* fix it at stack top */
    checknext(ls, char['{']);
    do {
        assert(cc.v.k === expkind.VVOID || cc.tostore > 0);
        if (ls.t.token === char['}']) break;
        closelistfield(fs, cc);
        field(ls, cc);
    } while (testnext(ls, char[',']) || testnext(ls, char[';']));
    check_match(ls, char['}'], char['{'], line);
    lastlistfield(fs, cc);
    lopcodes.SETARG_B(fs.f.code[pc], lobject.luaO_int2fb(cc.na));  /* set initial array size */
    lopcodes.SETARG_C(fs.f.code[pc], lobject.luaO_int2fb(cc.nh));  /* set initial table size */
};

/* }====================================================================== */

const parlist = function(ls) {
    /* parlist -> [ param { ',' param } ] */
    let fs = ls.fs;
    let f = fs.f;
    let nparams = 0;
    f.is_vararg = false;
    if (ls.t.token !== char[')']) {  /* is 'parlist' not empty? */
        do {
            switch (ls.t.token) {
                case R.TK_NAME: {  /* param -> NAME */
                    new_localvar(ls, str_checkname(ls));
                    nparams++;
                    break;
                }
                case R.TK_DOTS: {  /* param -> '...' */
                    llex.luaX_next(ls);
                    f.is_vararg = true;  /* declared vararg */
                    break;
                }
                default: llex.luaX_syntaxerror(ls, defs.to_luastring("<name> or '...' expected", true));
            }
        } while(!f.is_vararg && testnext(ls, char[',']));
    }
    adjustlocalvars(ls, nparams);
    f.numparams = fs.nactvar;
    lcode.luaK_reserveregs(fs, fs.nactvar);  /* reserve register for parameters */
};

const body = function(ls, e, ismethod, line) {
    /* body ->  '(' parlist ')' block END */
    let new_fs = new FuncState();
    let bl = new BlockCnt();
    new_fs.f = addprototype(ls);
    new_fs.f.linedefined = line;
    open_func(ls, new_fs, bl);
    checknext(ls, char['(']);
    if (ismethod) {
        new_localvarliteral(ls, "self");  /* create 'self' parameter */
        adjustlocalvars(ls, 1);
    }
    parlist(ls);
    checknext(ls, char[')']);
    statlist(ls);
    new_fs.f.lastlinedefined = ls.linenumber;
    check_match(ls, R.TK_END, R.TK_FUNCTION, line);
    codeclosure(ls, e);
    close_func(ls);
};

const explist = function(ls, v) {
    /* explist -> expr { ',' expr } */
    let n = 1;  /* at least one expression */
    expr(ls, v);
    while (testnext(ls, char[','])) {
        lcode.luaK_exp2nextreg(ls.fs, v);
        expr(ls, v);
        n++;
    }
    return n;
};

const funcargs = function(ls, f, line) {
    let fs = ls.fs;
    let args = new expdesc();
    switch (ls.t.token) {
        case char['(']: {  /* funcargs -> '(' [ explist ] ')' */
            llex.luaX_next(ls);
            if (ls.t.token === char[')'])  /* arg list is empty? */
                args.k = expkind.VVOID;
            else {
                explist(ls, args);
                lcode.luaK_setmultret(fs, args);
            }
            check_match(ls, char[')'], char['('], line);
            break;
        }
        case char['{']: {  /* funcargs -> constructor */
            constructor(ls, args);
            break;
        }
        case R.TK_STRING: {  /* funcargs -> STRING */
            codestring(ls, args, ls.t.seminfo.ts);
            llex.luaX_next(ls);  /* must use 'seminfo' before 'next' */
            break;
        }
        default: {
            llex.luaX_syntaxerror(ls, defs.to_luastring("function arguments expected", true));
        }
    }
    assert(f.k === expkind.VNONRELOC);
    let nparams;
    let base = f.u.info;  /* base register for call */
    if (hasmultret(args.k))
        nparams = defs.LUA_MULTRET;  /* open call */
    else {
        if (args.k !== expkind.VVOID)
            lcode.luaK_exp2nextreg(fs, args);  /* close last argument */
        nparams = fs.freereg - (base+1);
    }
    init_exp(f, expkind.VCALL, lcode.luaK_codeABC(fs, OpCodesI.OP_CALL, base, nparams+1, 2));
    lcode.luaK_fixline(fs, line);
    fs.freereg = base + 1; /* call remove function and arguments and leaves (unless changed) one result */
};

/*
** {======================================================================
** Expression parsing
** =======================================================================
*/

const primaryexp = function(ls, v) {
    /* primaryexp -> NAME | '(' expr ')' */
    switch (ls.t.token) {
        case char['(']: {
            let line = ls.linenumber;
            llex.luaX_next(ls);
            expr(ls, v);
            check_match(ls, char[')'], char['('], line);
            lcode.luaK_dischargevars(ls.fs, v);
            return;
        }
        case R.TK_NAME: {
            singlevar(ls, v);
            return;
        }
        default: {
            llex.luaX_syntaxerror(ls, defs.to_luastring("unexpected symbol", true));
        }
    }
};

const suffixedexp = function(ls, v) {
    /* suffixedexp ->
       primaryexp { '.' NAME | '[' exp ']' | ':' NAME funcargs | funcargs } */
    let fs = ls.fs;
    let line = ls.linenumber;
    primaryexp(ls, v);
    for (;;) {
        switch (ls.t.token) {
            case char['.']: {  /* fieldsel */
                fieldsel(ls, v);
                break;
            }
            case char['[']: {  /* '[' exp1 ']' */
                let key = new expdesc();
                lcode.luaK_exp2anyregup(fs, v);
                yindex(ls, key);
                lcode.luaK_indexed(fs, v, key);
                break;
            }
            case char[':']: {  /* ':' NAME funcargs */
                let key = new expdesc();
                llex.luaX_next(ls);
                checkname(ls, key);
                lcode.luaK_self(fs, v, key);
                funcargs(ls, v, line);
                break;
            }
            case char['(']: case R.TK_STRING: case char['{']: {  /* funcargs */
                lcode.luaK_exp2nextreg(fs, v);
                funcargs(ls, v, line);
                break;
            }
            default: return;
        }
    }
};

const simpleexp = function(ls, v) {
    /* simpleexp -> FLT | INT | STRING | NIL | TRUE | FALSE | ... |
       constructor | FUNCTION body | suffixedexp */
    switch (ls.t.token) {
        case R.TK_FLT: {
            init_exp(v, expkind.VKFLT, 0);
            v.u.nval = ls.t.seminfo.r;
            break;
        }
        case R.TK_INT: {
            init_exp(v, expkind.VKINT, 0);
            v.u.ival = ls.t.seminfo.i;
            break;
        }
        case R.TK_STRING: {
            codestring(ls, v, ls.t.seminfo.ts);
            break;
        }
        case R.TK_NIL: {
            init_exp(v, expkind.VNIL, 0);
            break;
        }
        case R.TK_TRUE: {
            init_exp(v, expkind.VTRUE, 0);
            break;
        }
        case R.TK_FALSE: {
            init_exp(v, expkind.VFALSE, 0);
            break;
        }
        case R.TK_DOTS: {  /* vararg */
            let fs = ls.fs;
            check_condition(ls, fs.f.is_vararg, defs.to_luastring("cannot use '...' outside a vararg function", true));
            init_exp(v, expkind.VVARARG, lcode.luaK_codeABC(fs, OpCodesI.OP_VARARG, 0, 1, 0));
            break;
        }
        case char['{']: {  /* constructor */
            constructor(ls, v);
            return;
        }
        case R.TK_FUNCTION: {
            llex.luaX_next(ls);
            body(ls, v, 0, ls.linenumber);
            return;
        }
        default: {
            suffixedexp(ls, v);
            return;
        }
    }
    llex.luaX_next(ls);
};

const getunopr = function(op) {
    switch (op) {
        case R.TK_NOT:  return UnOpr.OPR_NOT;
        case char['-']: return UnOpr.OPR_MINUS;
        case char['~']: return UnOpr.OPR_BNOT;
        case char['#']: return UnOpr.OPR_LEN;
        default:        return UnOpr.OPR_NOUNOPR;
    }
};

const getbinopr = function(op) {
    switch (op) {
        case char['+']:   return BinOpr.OPR_ADD;
        case char['-']:   return BinOpr.OPR_SUB;
        case char['*']:   return BinOpr.OPR_MUL;
        case char['%']:   return BinOpr.OPR_MOD;
        case char['^']:   return BinOpr.OPR_POW;
        case char['/']:   return BinOpr.OPR_DIV;
        case R.TK_IDIV:   return BinOpr.OPR_IDIV;
        case char['&']:   return BinOpr.OPR_BAND;
        case char['|']:   return BinOpr.OPR_BOR;
        case char['~']:   return BinOpr.OPR_BXOR;
        case R.TK_SHL:    return BinOpr.OPR_SHL;
        case R.TK_SHR:    return BinOpr.OPR_SHR;
        case R.TK_CONCAT: return BinOpr.OPR_CONCAT;
        case R.TK_NE:     return BinOpr.OPR_NE;
        case R.TK_EQ:     return BinOpr.OPR_EQ;
        case char['<']:   return BinOpr.OPR_LT;
        case R.TK_LE:     return BinOpr.OPR_LE;
        case char['>']:   return BinOpr.OPR_GT;
        case R.TK_GE:     return BinOpr.OPR_GE;
        case R.TK_AND:    return BinOpr.OPR_AND;
        case R.TK_OR:     return BinOpr.OPR_OR;
        default:          return BinOpr.OPR_NOBINOPR;
    }
};

const priority = [  /* ORDER OPR */
    {left: 10, right: 10}, {left: 10, right: 10},     /* '+' '-' */
    {left: 11, right: 11}, {left: 11, right: 11},     /* '*' '%' */
    {left: 14, right: 13},               /* '^' (right associative) */
    {left: 11, right: 11}, {left: 11, right: 11},     /* '/' '//' */
    {left: 6, right: 6}, {left: 4, right: 4}, {left: 5, right: 5}, /* '&' '|' '~' */
    {left: 7, right: 7}, {left: 7, right: 7},         /* '<<' '>>' */
    {left: 9, right: 8},                 /* '..' (right associative) */
    {left: 3, right: 3}, {left: 3, right: 3}, {left: 3, right: 3}, /* ==, <, <= */
    {left: 3, right: 3}, {left: 3, right: 3}, {left: 3, right: 3}, /* ~=, >, >= */
    {left: 2, right: 2}, {left: 1, right: 1}          /* and, or */
];

const UNARY_PRIORITY = 12;

/*
** subexpr -> (simpleexp | unop subexpr) { binop subexpr }
** where 'binop' is any binary operator with a priority higher than 'limit'
*/
const subexpr = function(ls, v, limit) {
    enterlevel(ls);
    let uop = getunopr(ls.t.token);
    if (uop !== UnOpr.OPR_NOUNOPR) {
        let line = ls.linenumber;
        llex.luaX_next(ls);
        subexpr(ls, v, UNARY_PRIORITY);
        lcode.luaK_prefix(ls.fs, uop, v, line);
    } else
        simpleexp(ls, v);
    /* expand while operators have priorities higher than 'limit' */
    let op = getbinopr(ls.t.token);
    while (op !== BinOpr.OPR_NOBINOPR && priority[op].left > limit) {
        let v2 = new expdesc();
        let line = ls.linenumber;
        llex.luaX_next(ls);
        lcode.luaK_infix(ls.fs, op, v);
        /* read sub-expression with higher priority */
        let nextop = subexpr(ls, v2, priority[op].right);
        lcode.luaK_posfix(ls.fs, op, v, v2, line);
        op = nextop;
    }
    leavelevel(ls);
    return op;  /* return first untreated operator */
};

const expr = function(ls, v) {
    subexpr(ls, v, 0);
};

/* }==================================================================== */



/*
** {======================================================================
** Rules for Statements
** =======================================================================
*/

const block = function(ls) {
    /* block -> statlist */
    let fs = ls.fs;
    let bl = new BlockCnt();
    enterblock(fs, bl, 0);
    statlist(ls);
    leaveblock(fs);
};

/*
** structure to chain all variables in the left-hand side of an
** assignment
*/
class LHS_assign {
    constructor() {
        this.prev = null;
        this.v = new expdesc();  /* variable (global, local, upvalue, or indexed) */
    }
}

/*
** check whether, in an assignment to an upvalue/local variable, the
** upvalue/local variable is begin used in a previous assignment to a
** table. If so, save original upvalue/local value in a safe place and
** use this safe copy in the previous assignment.
*/
const check_conflict = function(ls, lh, v) {
    let fs = ls.fs;
    let extra = fs.freereg;  /* eventual position to save local variable */
    let conflict = false;
    for (; lh; lh = lh.prev) {  /* check all previous assignments */
        if (lh.v.k === expkind.VINDEXED) {  /* assigning to a table? */
            /* table is the upvalue/local being assigned now? */
            if (lh.v.u.ind.vt === v.k && lh.v.u.ind.t === v.u.info) {
                conflict = true;
                lh.v.u.ind.vt = expkind.VLOCAL;
                lh.v.u.ind.t = extra;  /* previous assignment will use safe copy */
            }
            /* index is the local being assigned? (index cannot be upvalue) */
            if (v.k === expkind.VLOCAL && lh.v.u.ind.idx === v.u.info) {
                conflict = true;
                lh.v.u.ind.idx = extra;  /* previous assignment will use safe copy */
            }
        }
    }
    if (conflict) {
        /* copy upvalue/local value to a temporary (in position 'extra') */
        let op = v.k === expkind.VLOCAL ? OpCodesI.OP_MOVE : OpCodesI.OP_GETUPVAL;
        lcode.luaK_codeABC(fs, op, extra, v.u.info, 0);
        lcode.luaK_reserveregs(fs, 1);
    }
};

const assignment = function(ls, lh, nvars) {
    let e = new expdesc();
    check_condition(ls, vkisvar(lh.v.k), defs.to_luastring("syntax error", true));
    if (testnext(ls, char[','])) {  /* assignment -> ',' suffixedexp assignment */
        let nv = new LHS_assign();
        nv.prev = lh;
        suffixedexp(ls, nv.v);
        if (nv.v.k !== expkind.VINDEXED)
            check_conflict(ls, lh, nv.v);
        checklimit(ls.fs, nvars + ls.L.nCcalls, llimit.LUAI_MAXCCALLS, defs.to_luastring("JS levels", true));
        assignment(ls, nv, nvars + 1);
    } else {  /* assignment -> '=' explist */
        checknext(ls, char['=']);
        let nexps = explist(ls, e);
        if (nexps !== nvars)
            adjust_assign(ls, nvars, nexps, e);
        else {
            lcode.luaK_setoneret(ls.fs, e);  /* close last expression */
            lcode.luaK_storevar(ls.fs, lh.v, e);
            return;  /* avoid default */
        }
    }
    init_exp(e, expkind.VNONRELOC, ls.fs.freereg-1);  /* default assignment */
    lcode.luaK_storevar(ls.fs, lh.v, e);
};

const cond = function(ls) {
    /* cond -> exp */
    let v = new expdesc();
    expr(ls, v);  /* read condition */
    if (v.k === expkind.VNIL) v.k = expkind.VFALSE;  /* 'falses' are all equal here */
    lcode.luaK_goiftrue(ls.fs, v);
    return v.f;
};

const gotostat = function(ls, pc) {
    let line = ls.linenumber;
    let label;
    if (testnext(ls, R.TK_GOTO))
        label = str_checkname(ls);
    else {
        llex.luaX_next(ls);  /* skip break */
        label = lstring.luaS_newliteral(ls.L, "break");
    }
    let g = newlabelentry(ls, ls.dyd.gt, label, line, pc);
    findlabel(ls, g);  /* close it if label already defined */
};

/* check for repeated labels on the same block */
const checkrepeated = function(fs, ll, label) {
    for (let i = fs.bl.firstlabel; i < ll.n; i++) {
        if (eqstr(label, ll.arr[i].name)) {
            let msg = lobject.luaO_pushfstring(fs.ls.L,
                    defs.to_luastring("label '%s' already defined on line %d", true),
                    label.getstr(), ll.arr[i].line);
            semerror(fs.ls, msg);
        }
    }
};

/* skip no-op statements */
const skipnoopstat = function(ls) {
    while (ls.t.token === char[';'] || ls.t.token === R.TK_DBCOLON)
        statement(ls);
};

const labelstat = function(ls, label, line) {
    /* label -> '::' NAME '::' */
    let fs = ls.fs;
    let ll = ls.dyd.label;
    let l;  /* index of new label being created */
    checkrepeated(fs, ll, label);  /* check for repeated labels */
    checknext(ls, R.TK_DBCOLON);  /* skip double colon */
    /* create new entry for this label */
    l = newlabelentry(ls, ll, label, line, lcode.luaK_getlabel(fs));
    skipnoopstat(ls);  /* skip other no-op statements */
    if (block_follow(ls, 0)) {  /* label is last no-op statement in the block? */
        /* assume that locals are already out of scope */
        ll.arr[l].nactvar = fs.bl.nactvar;
    }
    findgotos(ls, ll.arr[l]);
};

const whilestat = function(ls, line) {
    /* whilestat -> WHILE cond DO block END */
    let fs = ls.fs;
    let bl = new BlockCnt();
    llex.luaX_next(ls);  /* skip WHILE */
    let whileinit = lcode.luaK_getlabel(fs);
    let condexit = cond(ls);
    enterblock(fs, bl, 1);
    checknext(ls, R.TK_DO);
    block(ls);
    lcode.luaK_jumpto(fs, whileinit);
    check_match(ls, R.TK_END, R.TK_WHILE, line);
    leaveblock(fs);
    lcode.luaK_patchtohere(fs, condexit);  /* false conditions finish the loop */
};

const repeatstat = function(ls, line) {
    /* repeatstat -> REPEAT block UNTIL cond */
    let fs = ls.fs;
    let repeat_init = lcode.luaK_getlabel(fs);
    let bl1 = new BlockCnt();
    let bl2 = new BlockCnt();
    enterblock(fs, bl1, 1);  /* loop block */
    enterblock(fs, bl2, 0);  /* scope block */
    llex.luaX_next(ls);  /* skip REPEAT */
    statlist(ls);
    check_match(ls, R.TK_UNTIL, R.TK_REPEAT, line);
    let condexit = cond(ls);  /* read condition (inside scope block) */
    if (bl2.upval)  /* upvalues? */
        lcode.luaK_patchclose(fs, condexit, bl2.nactvar);
    leaveblock(fs);  /* finish scope */
    lcode.luaK_patchlist(fs, condexit, repeat_init);  /* close the loop */
    leaveblock(fs);  /* finish loop */
};

const exp1 = function(ls) {
    let e = new expdesc();
    expr(ls, e);
    lcode.luaK_exp2nextreg(ls.fs, e);
    assert(e.k === expkind.VNONRELOC);
    let reg = e.u.info;
    return reg;
};

const forbody = function(ls, base, line, nvars, isnum) {
    /* forbody -> DO block */
    let bl = new BlockCnt();
    let fs = ls.fs;
    let endfor;
    adjustlocalvars(ls, 3);  /* control variables */
    checknext(ls, R.TK_DO);
    let prep = isnum ? lcode.luaK_codeAsBx(fs, OpCodesI.OP_FORPREP, base, lcode.NO_JUMP) : lcode.luaK_jump(fs);
    enterblock(fs, bl, 0);  /* scope for declared variables */
    adjustlocalvars(ls, nvars);
    lcode.luaK_reserveregs(fs, nvars);
    block(ls);
    leaveblock(fs);  /* end of scope for declared variables */
    lcode.luaK_patchtohere(fs, prep);
    if (isnum)  /* end of scope for declared variables */
        endfor = lcode.luaK_codeAsBx(fs, OpCodesI.OP_FORLOOP, base, lcode.NO_JUMP);
    else {  /* generic for */
        lcode.luaK_codeABC(fs, OpCodesI.OP_TFORCALL, base, 0, nvars);
        lcode.luaK_fixline(fs, line);
        endfor = lcode.luaK_codeAsBx(fs, OpCodesI.OP_TFORLOOP, base + 2, lcode.NO_JUMP);
    }
    lcode.luaK_patchlist(fs, endfor, prep + 1);
    lcode.luaK_fixline(fs, line);
};

const fornum = function(ls, varname, line) {
    /* fornum -> NAME = exp1,exp1[,exp1] forbody */
    let fs = ls.fs;
    let base = fs.freereg;
    new_localvarliteral(ls, "(for index)");
    new_localvarliteral(ls, "(for limit)");
    new_localvarliteral(ls, "(for step)");
    new_localvar(ls, varname);
    checknext(ls, char['=']);
    exp1(ls);  /* initial value */
    checknext(ls, char[',']);
    exp1(ls);  /* limit */
    if (testnext(ls, char[',']))
        exp1(ls);  /* optional step */
    else {  /* default step = 1 */
        lcode.luaK_codek(fs, fs.freereg, lcode.luaK_intK(fs, 1));
        lcode.luaK_reserveregs(fs, 1);
    }
    forbody(ls, base, line, 1, 1);
};

const forlist = function(ls, indexname) {
    /* forlist -> NAME {,NAME} IN explist forbody */
    let fs = ls.fs;
    let e = new expdesc();
    let nvars = 4;  /* gen, state, control, plus at least one declared var */
    let base = fs.freereg;
    /* create control variables */
    new_localvarliteral(ls, "(for generator)");
    new_localvarliteral(ls, "(for state)");
    new_localvarliteral(ls, "(for control)");
    /* create declared variables */
    new_localvar(ls, indexname);
    while (testnext(ls, char[','])) {
        new_localvar(ls, str_checkname(ls));
        nvars++;
    }
    checknext(ls, R.TK_IN);
    let line = ls.linenumber;
    adjust_assign(ls, 3, explist(ls, e), e);
    lcode.luaK_checkstack(fs, 3);  /* extra space to call generator */
    forbody(ls, base, line, nvars - 3, 0);
};

const forstat = function(ls, line) {
    /* forstat -> FOR (fornum | forlist) END */
    let fs = ls.fs;
    let bl = new BlockCnt();
    enterblock(fs, bl, 1);  /* scope for loop and control variables */
    llex.luaX_next(ls);  /* skip 'for' */
    let varname = str_checkname(ls);  /* first variable name */
    switch (ls.t.token) {
        case char['=']: fornum(ls, varname, line); break;
        case char[',']: case R.TK_IN: forlist(ls, varname); break;
        default: llex.luaX_syntaxerror(ls, defs.to_luastring("'=' or 'in' expected", true));
    }
    check_match(ls, R.TK_END, R.TK_FOR, line);
    leaveblock(fs);  /* loop scope ('break' jumps to this point) */
};

const test_then_block = function(ls, escapelist) {
    /* test_then_block -> [IF | ELSEIF] cond THEN block */
    let bl = new BlockCnt();
    let fs = ls.fs;
    let v = new expdesc();
    let jf;  /* instruction to skip 'then' code (if condition is false) */

    llex.luaX_next(ls);  /* skip IF or ELSEIF */
    expr(ls, v);  /* read condition */
    checknext(ls, R.TK_THEN);

    if (ls.t.token === R.TK_GOTO || ls.t.token === R.TK_BREAK) {
        lcode.luaK_goiffalse(ls.fs, v);  /* will jump to label if condition is true */
        enterblock(fs, bl, false);  /* must enter block before 'goto' */
        gotostat(ls, v.t);   /* handle goto/break */
        while (testnext(ls, char[';'])) {}  /* skip colons */
        if (block_follow(ls, 0)) {  /* 'goto' is the entire block? */
            leaveblock(fs);
            return escapelist;  /* and that is it */
        } else  /* must skip over 'then' part if condition is false */
            jf = lcode.luaK_jump(fs);
    } else {  /* regular case (not goto/break) */
        lcode.luaK_goiftrue(ls.fs, v);  /* skip over block if condition is false */
        enterblock(fs, bl, false);
        jf = v.f;
    }

    statlist(ls);  /* 'then' part */
    leaveblock(fs);
    if (ls.t.token === R.TK_ELSE || ls.t.token === R.TK_ELSEIF)  /* followed by 'else'/'elseif'? */
        escapelist = lcode.luaK_concat(fs, escapelist, lcode.luaK_jump(fs));  /* must jump over it */
    lcode.luaK_patchtohere(fs, jf);

    return escapelist;
};

const ifstat = function(ls, line) {
    /* ifstat -> IF cond THEN block {ELSEIF cond THEN block} [ELSE block] END */
    let fs = ls.fs;
    let escapelist = lcode.NO_JUMP;  /* exit list for finished parts */
    escapelist = test_then_block(ls, escapelist);  /* IF cond THEN block */
    while (ls.t.token === R.TK_ELSEIF)
        escapelist = test_then_block(ls, escapelist);  /* ELSEIF cond THEN block */
    if (testnext(ls, R.TK_ELSE))
        block(ls);  /* 'else' part */
    check_match(ls, R.TK_END, R.TK_IF, line);
    lcode.luaK_patchtohere(fs, escapelist);  /* patch escape list to 'if' end */
};

const localfunc = function(ls) {
    let b = new expdesc();
    let fs = ls.fs;
    new_localvar(ls, str_checkname(ls));  /* new local variable */
    adjustlocalvars(ls, 1);  /* enter its scope */
    body(ls, b, 0, ls.linenumber);  /* function created in next register */
    /* debug information will only see the variable after this point! */
    getlocvar(fs, b.u.info).startpc = fs.pc;
};

const localstat = function(ls) {
    /* stat -> LOCAL NAME {',' NAME} ['=' explist] */
    let nvars = 0;
    let nexps;
    let e = new expdesc();
    do {
        new_localvar(ls, str_checkname(ls));
        nvars++;
    } while (testnext(ls, char[',']));
    if (testnext(ls, char['=']))
        nexps = explist(ls, e);
    else {
        e.k = expkind.VVOID;
        nexps = 0;
    }
    adjust_assign(ls, nvars, nexps, e);
    adjustlocalvars(ls, nvars);
};

const funcname = function(ls, v) {
    /* funcname -> NAME {fieldsel} [':' NAME] */
    let ismethod = 0;
    singlevar(ls, v);
    while (ls.t.token === char['.'])
        fieldsel(ls, v);
    if (ls.t.token === char[':']) {
        ismethod = 1;
        fieldsel(ls, v);
    }
    return ismethod;
};

const funcstat = function(ls, line) {
    /* funcstat -> FUNCTION funcname body */
    let v = new expdesc();
    let b = new expdesc();
    llex.luaX_next(ls);  /* skip FUNCTION */
    let ismethod = funcname(ls, v);
    body(ls, b, ismethod, line);
    lcode.luaK_storevar(ls.fs, v, b);
    lcode.luaK_fixline(ls.fs, line);  /* definition "happens" in the first line */
};

const exprstat= function(ls) {
    /* stat -> func | assignment */
    let fs = ls.fs;
    let v = new LHS_assign();
    suffixedexp(ls, v.v);
    if (ls.t.token === char['='] || ls.t.token === char[',']) { /* stat . assignment ? */
        v.prev = null;
        assignment(ls, v, 1);
    }
    else {  /* stat -> func */
        check_condition(ls, v.v.k === expkind.VCALL, defs.to_luastring("syntax error", true));
        lopcodes.SETARG_C(lcode.getinstruction(fs, v.v), 1);  /* call statement uses no results */
    }
};

const retstat = function(ls) {
    /* stat -> RETURN [explist] [';'] */
    let fs = ls.fs;
    let e = new expdesc();
    let first, nret;  /* registers with returned values */
    if (block_follow(ls, 1) || ls.t.token === char[';'])
        first = nret = 0;  /* return no values */
    else {
        nret = explist(ls, e);  /* optional return values */
        if (hasmultret(e.k)) {
            lcode.luaK_setmultret(fs, e);
            if (e.k === expkind.VCALL && nret === 1) {  /* tail call? */
                lopcodes.SET_OPCODE(lcode.getinstruction(fs, e), OpCodesI.OP_TAILCALL);
                assert(lcode.getinstruction(fs, e).A === fs.nactvar);
            }
            first = fs.nactvar;
            nret = defs.LUA_MULTRET;  /* return all values */
        } else {
            if (nret === 1)  /* only one single value? */
                first = lcode.luaK_exp2anyreg(fs, e);
            else {
                lcode.luaK_exp2nextreg(fs, e);  /* values must go to the stack */
                first = fs.nactvar;  /* return all active values */
                assert(nret === fs.freereg - first);
            }
        }
    }
    lcode.luaK_ret(fs, first, nret);
    testnext(ls, char[';']);  /* skip optional semicolon */
};

const statement = function(ls) {
    let line = ls.linenumber;  /* may be needed for error messages */
    enterlevel(ls);
    switch(ls.t.token) {
        case char[';']: {  /* stat -> ';' (empty statement) */
            llex.luaX_next(ls);  /* skip ';' */
            break;
        }
        case R.TK_IF: {  /* stat -> ifstat */
            ifstat(ls, line);
            break;
        }
        case R.TK_WHILE: {  /* stat -> whilestat */
            whilestat(ls, line);
            break;
        }
        case R.TK_DO: {  /* stat -> DO block END */
            llex.luaX_next(ls);  /* skip DO */
            block(ls);
            check_match(ls, R.TK_END, R.TK_DO, line);
            break;
        }
        case R.TK_FOR: {  /* stat -> forstat */
            forstat(ls, line);
            break;
        }
        case R.TK_REPEAT: {  /* stat -> repeatstat */
            repeatstat(ls, line);
            break;
        }
        case R.TK_FUNCTION: {  /* stat -> funcstat */
            funcstat(ls, line);
            break;
        }
        case R.TK_LOCAL: {  /* stat -> localstat */
            llex.luaX_next(ls);  /* skip LOCAL */
            if (testnext(ls, R.TK_FUNCTION))  /* local function? */
                localfunc(ls);
            else
                localstat(ls);
            break;
        }
        case R.TK_DBCOLON: {  /* stat -> label */
            llex.luaX_next(ls);  /* skip double colon */
            labelstat(ls, str_checkname(ls), line);
            break;
        }
        case R.TK_RETURN: {  /* skip double colon */
            llex.luaX_next(ls);  /* skip RETURN */
            retstat(ls);
            break;
        }
        case R.TK_BREAK:   /* stat -> breakstat */
        case R.TK_GOTO: {  /* stat -> 'goto' NAME */
            gotostat(ls, lcode.luaK_jump(ls.fs));
            break;
        }
        default: {  /* stat -> func | assignment */
            exprstat(ls);
            break;
        }
    }

    assert(ls.fs.f.maxstacksize >= ls.fs.freereg && ls.fs.freereg >= ls.fs.nactvar);
    ls.fs.freereg = ls.fs.nactvar;  /* free registers */
    leavelevel(ls);
};

/*
** compiles the main function, which is a regular vararg function with an
** upvalue named LUA_ENV
*/
const mainfunc = function(ls, fs) {
    let bl = new BlockCnt();
    let v = new expdesc();
    open_func(ls, fs, bl);
    fs.f.is_vararg = true;  /* main function is always declared vararg */
    init_exp(v, expkind.VLOCAL, 0);  /* create and... */
    newupvalue(fs, ls.envn, v);  /* ...set environment upvalue */
    llex.luaX_next(ls);  /* read first token */
    statlist(ls);  /* parse main body */
    check(ls, R.TK_EOS);
    close_func(ls);
};

const luaY_parser = function(L, z, buff, dyd, name, firstchar) {
    let lexstate = new llex.LexState();
    let funcstate = new FuncState();
    let cl = lfunc.luaF_newLclosure(L, 1);  /* create main closure */
    ldo.luaD_inctop(L);
    L.stack[L.top-1].setclLvalue(cl);
    lexstate.h = ltable.luaH_new(L);  /* create table for scanner */
    ldo.luaD_inctop(L);
    L.stack[L.top-1].sethvalue(lexstate.h);
    funcstate.f = cl.p = new Proto(L);
    funcstate.f.source = lstring.luaS_new(L, name);
    lexstate.buff = buff;
    lexstate.dyd = dyd;
    dyd.actvar.n = dyd.gt.n = dyd.label.n = 0;
    llex.luaX_setinput(L, lexstate, z, funcstate.f.source, firstchar);
    mainfunc(lexstate, funcstate);
    assert(!funcstate.prev && funcstate.nups === 1 && !lexstate.fs);
    /* all scopes should be correctly finished */
    assert(dyd.actvar.n === 0 && dyd.gt.n === 0 && dyd.label.n === 0);
    delete L.stack[--L.top];  /* remove scanner's table */
    return cl;  /* closure is on the stack, too */
};


module.exports.Dyndata     = Dyndata;
module.exports.expkind     = expkind;
module.exports.expdesc     = expdesc;
module.exports.luaY_parser = luaY_parser;
module.exports.vkisinreg   = vkisinreg;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert   = __webpack_require__(0);

const defs     = __webpack_require__(1);
const ldebug   = __webpack_require__(11);
const ldo      = __webpack_require__(7);
const ljstype  = __webpack_require__(26);
const lobject  = __webpack_require__(3);
const lstring  = __webpack_require__(9);
const ltable   = __webpack_require__(8);
const llimit   = __webpack_require__(5);
const lzio     = __webpack_require__(21);
const TS       = defs.thread_status;
const char     = defs.char;

const FIRST_RESERVED = 257;

const RESERVED = {
    /* terminal symbols denoted by reserved words */
    TK_AND:      FIRST_RESERVED,
    TK_BREAK:    FIRST_RESERVED + 1,
    TK_DO:       FIRST_RESERVED + 2,
    TK_ELSE:     FIRST_RESERVED + 3,
    TK_ELSEIF:   FIRST_RESERVED + 4,
    TK_END:      FIRST_RESERVED + 5,
    TK_FALSE:    FIRST_RESERVED + 6,
    TK_FOR:      FIRST_RESERVED + 7,
    TK_FUNCTION: FIRST_RESERVED + 8,
    TK_GOTO:     FIRST_RESERVED + 9,
    TK_IF:       FIRST_RESERVED + 10,
    TK_IN:       FIRST_RESERVED + 11,
    TK_LOCAL:    FIRST_RESERVED + 12,
    TK_NIL:      FIRST_RESERVED + 13,
    TK_NOT:      FIRST_RESERVED + 14,
    TK_OR:       FIRST_RESERVED + 15,
    TK_REPEAT:   FIRST_RESERVED + 16,
    TK_RETURN:   FIRST_RESERVED + 17,
    TK_THEN:     FIRST_RESERVED + 18,
    TK_TRUE:     FIRST_RESERVED + 19,
    TK_UNTIL:    FIRST_RESERVED + 20,
    TK_WHILE:    FIRST_RESERVED + 21,
    /* other terminal symbols */
    TK_IDIV:     FIRST_RESERVED + 22,
    TK_CONCAT:   FIRST_RESERVED + 23,
    TK_DOTS:     FIRST_RESERVED + 24,
    TK_EQ:       FIRST_RESERVED + 25,
    TK_GE:       FIRST_RESERVED + 26,
    TK_LE:       FIRST_RESERVED + 27,
    TK_NE:       FIRST_RESERVED + 28,
    TK_SHL:      FIRST_RESERVED + 29,
    TK_SHR:      FIRST_RESERVED + 30,
    TK_DBCOLON:  FIRST_RESERVED + 31,
    TK_EOS:      FIRST_RESERVED + 32,
    TK_FLT:      FIRST_RESERVED + 33,
    TK_INT:      FIRST_RESERVED + 34,
    TK_NAME:     FIRST_RESERVED + 35,
    TK_STRING:   FIRST_RESERVED + 36
};

const R = RESERVED;

const luaX_tokens = [
    "and", "break", "do", "else", "elseif",
    "end", "false", "for", "function", "goto", "if",
    "in", "local", "nil", "not", "or", "repeat",
    "return", "then", "true", "until", "while",
    "//", "..", "...", "==", ">=", "<=", "~=",
    "<<", ">>", "::", "<eof>",
    "<number>", "<integer>", "<name>", "<string>"
];

class SemInfo {
    constructor() {
        this.r = NaN;
        this.i = NaN;
        this.ts = null;
    }
}

class Token {
    constructor() {
        this.token = NaN;
        this.seminfo = new SemInfo();
    }
}

/* state of the lexer plus state of the parser when shared by all
   functions */
class LexState {
    constructor() {
        this.current = NaN;  /* current character (charint) */
        this.linenumber = NaN;  /* input line counter */
        this.lastline = NaN;  /* line of last token 'consumed' */
        this.t = new Token();  /* current token */
        this.lookahead = new Token();  /* look ahead token */
        this.fs = null;  /* current function (parser) */
        this.L = null;
        this.z = null; /* input stream */
        this.buff = null;  /* buffer for tokens */
        this.h = null;  /* to reuse strings */
        this.dyd = null;  /* dynamic structures used by the parser */
        this.source = null;  /* current source name */
        this.envn = null;  /* environment variable name */
    }
}

const save = function(ls, c) {
    let b = ls.buff;
    if (b.n + 1 > b.buffer.length) {
        if (b.buffer.length >= llimit.MAX_INT/2)
            lexerror(ls, defs.to_luastring("lexical element too long", true), 0);
    }
    b.buffer[b.n++] = c < 0 ? 255 + c + 1 : c;
};

const luaX_token2str = function(ls, token) {
    if (token < FIRST_RESERVED) {  /* single-byte symbols? */
        return lobject.luaO_pushfstring(ls.L, defs.to_luastring("'%c'", true), token);
    } else {
        let s = luaX_tokens[token - FIRST_RESERVED];
        if (token < R.TK_EOS)  /* fixed format (symbols and reserved words)? */
            return lobject.luaO_pushfstring(ls.L, defs.to_luastring("'%s'", true), defs.to_luastring(s));
        else  /* names, strings, and numerals */
            return defs.to_luastring(s);
    }
};

const currIsNewline = function(ls) {
    return ls.current === char['\n'] || ls.current === char['\r'];
};

const next = function(ls) {
    ls.current = ls.z.zgetc();
};

const save_and_next = function(ls) {
    save(ls, ls.current);
    next(ls);
};

/*
** creates a new string and anchors it in scanner's table so that
** it will not be collected until the end of the compilation
** (by that time it should be anchored somewhere)
*/
const luaX_newstring = function(ls, str) {
    let L = ls.L;
    let ts = lstring.luaS_new(L, str);
    let o = ltable.luaH_set(L, ls.h, new lobject.TValue(defs.CT.LUA_TLNGSTR, ts));
    if (o.ttisnil()) { /* not in use yet? */
        o.setbvalue(true);
    } else { /* string already present */
        /* HACK: Workaround lack of ltable 'keyfromval' */
        let tpair = ls.h.strong.get(lstring.luaS_hashlongstr(ts));
        assert(tpair.value == o);
        ts = tpair.key.tsvalue(); /* re-use value previously stored */
    }
    return ts;
};

/*
** increment line number and skips newline sequence (any of
** \n, \r, \n\r, or \r\n)
*/
const inclinenumber = function(ls) {
    let old = ls.current;
    assert(currIsNewline(ls));
    next(ls);  /* skip '\n' or '\r' */
    if (currIsNewline(ls) && ls.current !== old)
        next(ls);  /* skip '\n\r' or '\r\n' */
    if (++ls.linenumber >= llimit.MAX_INT)
        lexerror(ls, defs.to_luastring("chunk has too many lines", true), 0);
};

const luaX_setinput = function(L, ls, z, source, firstchar) {
    ls.t = {
        token: 0,
        seminfo: new SemInfo()
    };
    ls.L = L;
    ls.current = firstchar;
    ls.lookahead = {
        token: R.TK_EOS,
        seminfo: new SemInfo()
    };
    ls.z = z;
    ls.fs = null;
    ls.linenumber = 1;
    ls.lastline = 1;
    ls.source = source;
    ls.envn = lstring.luaS_newliteral(L, "_ENV");
};

const check_next1 = function(ls, c) {
    if (ls.current === c.charCodeAt(0)) {
        next(ls);
        return true;
    }

    return false;
};

/*
** Check whether current char is in set 'set' (with two chars) and
** saves it
*/
const check_next2 = function(ls, set) {
    if (ls.current === set[0].charCodeAt(0) || ls.current === set[1].charCodeAt(0)) {
        save_and_next(ls);
        return true;
    }

    return false;
};

const read_numeral = function(ls, seminfo) {
    let expo = "Ee";
    let first = ls.current;
    assert(ljstype.lisdigit(ls.current));
    save_and_next(ls);
    if (first === char['0'] && check_next2(ls, "xX"))  /* hexadecimal? */
        expo = "Pp";

    for (;;) {
        if (check_next2(ls, expo))  /* exponent part? */
            check_next2(ls, "-+");  /* optional exponent sign */
        if (ljstype.lisxdigit(ls.current))
            save_and_next(ls);
        else if (ls.current === char['.'])
            save_and_next(ls);
        else break;
    }

    // save(ls, 0);

    let obj = lobject.luaO_str2num(ls.buff.buffer);
    if (obj === false)  /* format error? */
        lexerror(ls, defs.to_luastring("malformed number", true), R.TK_FLT);
    if (obj.ttisinteger()) {
        seminfo.i = obj.value;
        return R.TK_INT;
    } else {
        assert(obj.ttisfloat());
        seminfo.r = obj.value;
        return R.TK_FLT;
    }
};

const txtToken = function(ls, token) {
    switch (token) {
        case R.TK_NAME: case R.TK_STRING:
        case R.TK_FLT: case R.TK_INT:
            // save(ls, 0);
            return lobject.luaO_pushfstring(ls.L, defs.to_luastring("'%s'", true), ls.buff.buffer);
        default:
            return luaX_token2str(ls, token);
    }
};

const lexerror = function(ls, msg, token) {
    msg = ldebug.luaG_addinfo(ls.L, msg, ls.source, ls.linenumber);
    if (token)
        lobject.luaO_pushfstring(ls.L, defs.to_luastring("%s near %s"), msg, txtToken(ls, token));
    ldo.luaD_throw(ls.L, TS.LUA_ERRSYNTAX);
};

const luaX_syntaxerror = function(ls, msg) {
    lexerror(ls, msg, ls.t.token);
};

/*
** skip a sequence '[=*[' or ']=*]'; if sequence is well formed, return
** its number of '='s; otherwise, return a negative number (-1 iff there
** are no '='s after initial bracket)
*/
const skip_sep = function(ls) {
    let count = 0;
    let s = ls.current;
    assert(s === char['['] || s === char[']']);
    save_and_next(ls);
    while (ls.current === char['=']) {
        save_and_next(ls);
        count++;
    }
    return ls.current === s ? count : (-count) - 1;
};

const read_long_string = function(ls, seminfo, sep) {
    let line = ls.linenumber;  /* initial line (for error message) */
    save_and_next(ls);  /* skip 2nd '[' */

    if (currIsNewline(ls))  /* string starts with a newline? */
        inclinenumber(ls);  /* skip it */

    let skip = false;
    for (; !skip ;) {
        switch (ls.current) {
            case lzio.EOZ: {  /* error */
                let what = seminfo ? "string" : "comment";
                let msg = `unfinished long ${what} (starting at line ${line})`;
                lexerror(ls, defs.to_luastring(msg), R.TK_EOS);
                break;
            }
            case char[']']: {
                if (skip_sep(ls) === sep) {
                    save_and_next(ls);  /* skip 2nd ']' */
                    skip = true;
                }
                break;
            }
            case char['\n']: case char['\r']: {
                save(ls, char['\n']);
                inclinenumber(ls);
                if (!seminfo) lzio.luaZ_resetbuffer(ls.buff);
                break;
            }
            default: {
                if (seminfo) save_and_next(ls);
                else next(ls);
            }
        }
    }

    if (seminfo)
        seminfo.ts = luaX_newstring(ls, ls.buff.buffer.slice(2 + sep, 2 + sep - 2 * (2 + sep)));
};

const esccheck = function(ls, c, msg) {
    if (!c) {
        if (ls.current !== lzio.EOZ)
            save_and_next(ls);  /* add current to buffer for error message */
        lexerror(ls, msg, R.TK_STRING);
    }
};

const gethexa = function(ls) {
    save_and_next(ls);
    esccheck(ls, ljstype.lisxdigit(ls.current), defs.to_luastring("hexadecimal digit expected", true));
    return lobject.luaO_hexavalue(ls.current);
};

const readhexaesc = function(ls) {
    let r = gethexa(ls);
    r = (r << 4) + gethexa(ls);
    lzio.luaZ_buffremove(ls.buff, 2);  /* remove saved chars from buffer */
    return r;
};

const readutf8desc = function(ls) {
    let i = 4;  /* chars to be removed: '\', 'u', '{', and first digit */
    save_and_next(ls);  /* skip 'u' */
    esccheck(ls, ls.current === char['{'], defs.to_luastring("missing '{'", true));
    let r = gethexa(ls);  /* must have at least one digit */

    save_and_next(ls);
    while (ljstype.lisxdigit(ls.current)) {
        i++;
        r = (r << 4) + lobject.luaO_hexavalue(ls.current);
        esccheck(ls, r <= 0x10FFFF, defs.to_luastring("UTF-8 value too large", true));
        save_and_next(ls);
    }
    esccheck(ls, ls.current === char['}'], defs.to_luastring("missing '}'", true));
    next(ls);  /* skip '}' */
    lzio.luaZ_buffremove(ls.buff, i);  /* remove saved chars from buffer */
    return r;
};

const utf8esc = function(ls) {
    let u = lobject.luaO_utf8esc(readutf8desc(ls));
    let buff = u.buff;
    for (let n = u.n; n > 0; n--)  /* add 'buff' to string */
        save(ls, buff[lobject.UTF8BUFFSZ - n]);
};

const readdecesc = function(ls) {
    let r = 0;  /* result accumulator */
    let i;
    for (i = 0; i < 3 && ljstype.lisdigit(ls.current); i++) {  /* read up to 3 digits */
        r = 10 * r + ls.current - char['0'];
        save_and_next(ls);
    }
    esccheck(ls, r <= 255, defs.to_luastring("decimal escape too large", true));
    lzio.luaZ_buffremove(ls.buff, i);  /* remove read digits from buffer */
    return r;
};

const read_string = function(ls, del, seminfo) {
    save_and_next(ls);  /* keep delimiter (for error messages) */

    while (ls.current !== del) {
        switch (ls.current) {
            case lzio.EOZ:
                lexerror(ls, defs.to_luastring("unfinished string", true), R.TK_EOS);
                break;
            case char['\n']:
            case char['\r']:
                lexerror(ls, defs.to_luastring("unfinished string", true), R.TK_STRING);
                break;
            case char['\\']: {  /* escape sequences */
                save_and_next(ls);  /* keep '\\' for error messages */
                let will;
                let c;
                switch(ls.current) {
                    case char['a']: c = 7 /* \a isn't valid JS */; will = 'read_save'; break;
                    case char['b']: c = char['\b']; will = 'read_save'; break;
                    case char['f']: c = char['\f']; will = 'read_save'; break;
                    case char['n']: c = char['\n']; will = 'read_save'; break;
                    case char['r']: c = char['\r']; will = 'read_save'; break;
                    case char['t']: c = char['\t']; will = 'read_save'; break;
                    case char['v']: c = char['\v']; will = 'read_save'; break;
                    case char['x']: c = readhexaesc(ls); will = 'read_save'; break;
                    case char['u']: utf8esc(ls); will = 'no_save'; break;
                    case char['\n']: case char['\r']:
                        inclinenumber(ls); c = char['\n']; will = 'only_save'; break;
                    case char['\\']: case char['\"']: case char['\'']:
                        c = ls.current; will = 'read_save'; break;
                    case lzio.EOZ: will = 'no_save'; break;  /* will raise an error next loop */
                    case char['z']: {  /* zap following span of spaces */
                        lzio.luaZ_buffremove(ls.buff, 1);  /* remove '\\' */
                        next(ls);  /* skip the 'z' */
                        while (ljstype.lisspace(ls.current)) {
                            if (currIsNewline(ls)) inclinenumber(ls);
                            else next(ls);
                        }
                        will = 'no_save'; break;
                    }
                    default: {
                        esccheck(ls, ljstype.lisdigit(ls.current), defs.to_luastring("invalid escape sequence", true));
                        c = readdecesc(ls);  /* digital escape '\ddd' */
                        will = 'only_save'; break;
                    }
                }

                if (will === 'read_save')
                    next(ls);

                if (will === 'read_save' || will === 'only_save') {
                    lzio.luaZ_buffremove(ls.buff, 1);  /* remove '\\' */
                    save(ls, c);
                }

                break;
            }
            default:
                save_and_next(ls);
        }
    }
    save_and_next(ls);  /* skip delimiter */

    seminfo.ts = luaX_newstring(ls, ls.buff.buffer.slice(1, ls.buff.n-1));
};

const token_to_index = Object.create(null); /* don't want to return true for e.g. 'hasOwnProperty' */
luaX_tokens.forEach((e, i)=>token_to_index[lstring.luaS_hash(defs.to_luastring(e))] = i);

const isreserved = function(w) {
    let kidx = token_to_index[lstring.luaS_hashlongstr(w)];
    return kidx !== void 0 && kidx <= 22;
};

const llex = function(ls, seminfo) {
    lzio.luaZ_resetbuffer(ls.buff);
    for (;;) {
        assert(typeof ls.current == "number");
        switch (ls.current) {
            case char['\n']: case char['\r']: {  /* line breaks */
                inclinenumber(ls);
                break;
            }
            case char[' ']: case char['\f']: case char['\t']: case char['\v']: {  /* spaces */
                next(ls);
                break;
            }
            case char['-']: {  /* '-' or '--' (comment) */
                next(ls);
                if (ls.current !== char['-']) return char['-'];
                /* else is a comment */
                next(ls);
                if (ls.current === char['[']) {  /* long comment? */
                    let sep = skip_sep(ls);
                    lzio.luaZ_resetbuffer(ls.buff);  /* 'skip_sep' may dirty the buffer */
                    if (sep >= 0) {
                        read_long_string(ls, null, sep);  /* skip long comment */
                        lzio.luaZ_resetbuffer(ls.buff);  /* previous call may dirty the buff. */
                        break;
                    }
                }

                /* else short comment */
                while (!currIsNewline(ls) && ls.current !== lzio.EOZ)
                    next(ls);  /* skip until end of line (or end of file) */
                break;
            }
            case char['[']: {  /* long string or simply '[' */
                let sep = skip_sep(ls);
                if (sep >= 0) {
                    read_long_string(ls, seminfo, sep);
                    return R.TK_STRING;
                } else if (sep !== -1)  /* '[=...' missing second bracket */
                    lexerror(ls, defs.to_luastring("invalid long string delimiter", true), R.TK_STRING);
                return char['['];
            }
            case char['=']: {
                next(ls);
                if (check_next1(ls, '=')) return R.TK_EQ;
                else return char['='];
            }
            case char['<']: {
                next(ls);
                if (check_next1(ls, '=')) return R.TK_LE;
                else if (check_next1(ls, '<')) return R.TK_SHL;
                else return char['<'];
            }
            case char['>']: {
                next(ls);
                if (check_next1(ls, '=')) return R.TK_GE;
                else if (check_next1(ls, '>')) return R.TK_SHR;
                else return char['>'];
            }
            case char['/']: {
                next(ls);
                if (check_next1(ls, '/')) return R.TK_IDIV;
                else return char['/'];
            }
            case char['~']: {
                next(ls);
                if (check_next1(ls, '=')) return R.TK_NE;
                else return char['~'];
            }
            case char[':']: {
                next(ls);
                if (check_next1(ls, ':')) return R.TK_DBCOLON;
                else return char[':'];
            }
            case char['"']: case char['\'']: {  /* short literal strings */
                read_string(ls, ls.current, seminfo);
                return R.TK_STRING;
            }
            case char['.']: {  /* '.', '..', '...', or number */
                save_and_next(ls);
                if (check_next1(ls, '.')) {
                    if (check_next1(ls, '.'))
                        return R.TK_DOTS;   /* '...' */
                    else return R.TK_CONCAT;   /* '..' */
                }
                else if (!ljstype.lisdigit(ls.current)) return char['.'];
                else return read_numeral(ls, seminfo);
            }
            case char['0']: case char['1']: case char['2']: case char['3']: case char['4']:
            case char['5']: case char['6']: case char['7']: case char['8']: case char['9']: {
                return read_numeral(ls, seminfo);
            }
            case lzio.EOZ: {
                return R.TK_EOS;
            }
            default: {
                if (ljstype.lislalpha(ls.current)) {  /* identifier or reserved word? */
                    do {
                        save_and_next(ls);
                    } while (ljstype.lislalnum(ls.current));

                    let ts = luaX_newstring(ls, ls.buff.buffer);
                    seminfo.ts = ts;
                    let kidx = token_to_index[lstring.luaS_hashlongstr(ts)];
                    if (kidx !== void 0 && kidx <= 22)  /* reserved word? */
                        return kidx + FIRST_RESERVED;
                    else
                        return R.TK_NAME;
                } else {  /* single-char tokens (+ - / ...) */
                    let c = ls.current;
                    next(ls);
                    return c;
                }
            }
        }
    }
};

const luaX_next = function(ls) {
    ls.lastline = ls.linenumber;
    if (ls.lookahead.token !== R.TK_EOS) {  /* is there a look-ahead token? */
        ls.t.token = ls.lookahead.token;  /* use this one */
        ls.t.seminfo.i = ls.lookahead.seminfo.i;
        ls.t.seminfo.r = ls.lookahead.seminfo.r;
        ls.t.seminfo.ts = ls.lookahead.seminfo.ts; // TODO ?
        ls.lookahead.token = R.TK_EOS;  /* and discharge it */
    } else
        ls.t.token = llex(ls, ls.t.seminfo);  /* read next token */
};

const luaX_lookahead = function(ls) {
    assert(ls.lookahead.token === R.TK_EOS);
    ls.lookahead.token = llex(ls, ls.lookahead.seminfo);
    return ls.lookahead.token;
};

module.exports.FIRST_RESERVED   = FIRST_RESERVED;
module.exports.LexState         = LexState;
module.exports.RESERVED         = RESERVED;
module.exports.isreserved       = isreserved;
module.exports.luaX_lookahead   = luaX_lookahead;
module.exports.luaX_newstring   = luaX_newstring;
module.exports.luaX_next        = luaX_next;
module.exports.luaX_setinput    = luaX_setinput;
module.exports.luaX_syntaxerror = luaX_syntaxerror;
module.exports.luaX_token2str   = luaX_token2str;
module.exports.luaX_tokens      = luaX_tokens;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const lua   = __webpack_require__(2);
const linit = __webpack_require__(44);

const LUA_VERSUFFIX = "_" + lua.LUA_VERSION_MAJOR + "_" + lua.LUA_VERSION_MINOR;
module.exports.LUA_VERSUFFIX = LUA_VERSUFFIX;

const LUA_COLIBNAME = "coroutine";
module.exports.LUA_COLIBNAME = LUA_COLIBNAME;
module.exports.luaopen_coroutine = __webpack_require__(30).luaopen_coroutine;

const LUA_TABLIBNAME = "table";
module.exports.LUA_TABLIBNAME = LUA_TABLIBNAME;
module.exports.luaopen_table = __webpack_require__(33).luaopen_table;

if (false) {
    const LUA_IOLIBNAME = "io";
    module.exports.LUA_IOLIBNAME = LUA_IOLIBNAME;
    module.exports.luaopen_io = require("./liolib.js").luaopen_io;
}

const LUA_OSLIBNAME = "os";
module.exports.LUA_OSLIBNAME = LUA_OSLIBNAME;
module.exports.luaopen_os = __webpack_require__(36).luaopen_os;

const LUA_STRLIBNAME = "string";
module.exports.LUA_STRLIBNAME = LUA_STRLIBNAME;
module.exports.luaopen_string = __webpack_require__(32).luaopen_string;

const LUA_UTF8LIBNAME = "utf8";
module.exports.LUA_UTF8LIBNAME = LUA_UTF8LIBNAME;
module.exports.luaopen_utf8 = __webpack_require__(34).luaopen_utf8;

const LUA_BITLIBNAME = "bit32";
module.exports.LUA_BITLIBNAME = LUA_BITLIBNAME;
// module.exports.luaopen_bit32 = require("./lbitlib.js").luaopen_bit32;

const LUA_MATHLIBNAME = "math";
module.exports.LUA_MATHLIBNAME = LUA_MATHLIBNAME;
module.exports.luaopen_math = __webpack_require__(31).luaopen_math;

const LUA_DBLIBNAME = "debug";
module.exports.LUA_DBLIBNAME = LUA_DBLIBNAME;
module.exports.luaopen_debug = __webpack_require__(35).luaopen_debug;

const LUA_LOADLIBNAME = "package";
module.exports.LUA_LOADLIBNAME = LUA_LOADLIBNAME;
module.exports.luaopen_package = __webpack_require__(37).luaopen_package;

module.exports.luaL_openlibs = linit.luaL_openlibs;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const lua     = __webpack_require__(2);
const lauxlib = __webpack_require__(6);

const getco = function(L) {
    let co = lua.lua_tothread(L, 1);
    lauxlib.luaL_argcheck(L, co, 1, lua.to_luastring("thread expected", true));
    return co;
};

const auxresume = function(L, co, narg) {
    if (!lua.lua_checkstack(co, narg)) {
        lua.lua_pushliteral(L, "too many arguments to resume");
        return -1;  /* error flag */
    }

    if (lua.lua_status(co) === lua.LUA_OK && lua.lua_gettop(co) === 0) {
        lua.lua_pushliteral(L, "cannot resume dead coroutine");
        return -1;  /* error flag */
    }

    lua.lua_xmove(L, co, narg);
    let status = lua.lua_resume(co, L, narg);
    if (status === lua.LUA_OK || status === lua.LUA_YIELD) {
        let nres = lua.lua_gettop(co);
        if (!lua.lua_checkstack(L, nres + 1)) {
            lua.lua_pop(co, nres);  /* remove results anyway */
            lua.lua_pushliteral(L, "too many results to resume");
            return -1;  /* error flag */
        }

        lua.lua_xmove(co,  L, nres);  /* move yielded values */
        return nres;
    } else {
        lua.lua_xmove(co, L, 1);  /* move error message */
        return -1;  /* error flag */
    }
};

const luaB_coresume = function(L) {
    let co = getco(L);
    let r = auxresume(L, co, lua.lua_gettop(L) - 1);
    if (r < 0) {
        lua.lua_pushboolean(L, 0);
        lua.lua_insert(L, -2);
        return 2;  /* return false + error message */
    } else {
        lua.lua_pushboolean(L, 1);
        lua.lua_insert(L, -(r + 1));
        return r + 1;  /* return true + 'resume' returns */
    }
};

const luaB_auxwrap = function(L) {
    let co = lua.lua_tothread(L, lua.lua_upvalueindex(1));
    let r = auxresume(L, co, lua.lua_gettop(L));
    if (r < 0) {
        if (lua.lua_type(L, -1) === lua.LUA_TSTRING) {  /* error object is a string? */
            lauxlib.luaL_where(L, 1);  /* add extra info */
            lua.lua_insert(L, -2);
            lua.lua_concat(L, 2);
        }

        return lua.lua_error(L);  /* propagate error */
    }

    return r;
};

const luaB_cocreate = function(L) {
    lauxlib.luaL_checktype(L, 1, lua.LUA_TFUNCTION);
    let NL = lua.lua_newthread(L);
    lua.lua_pushvalue(L, 1);  /* move function to top */
    lua.lua_xmove(L, NL, 1);  /* move function from L to NL */
    return 1;
};

const luaB_cowrap = function(L) {
    luaB_cocreate(L);
    lua.lua_pushcclosure(L, luaB_auxwrap, 1);
    return 1;
};

const luaB_yield = function(L) {
    return lua.lua_yield(L, lua.lua_gettop(L));
};

const luaB_costatus = function(L) {
    let co = getco(L);
    if (L === co) lua.lua_pushliteral(L, "running");
    else {
        switch (lua.lua_status(co)) {
            case lua.LUA_YIELD:
                lua.lua_pushliteral(L, "suspended");
                break;
            case lua.LUA_OK: {
                let ar = new lua.lua_Debug();
                if (lua.lua_getstack(co, 0, ar) > 0)  /* does it have frames? */
                    lua.lua_pushliteral(L, "normal");  /* it is running */
                else if (lua.lua_gettop(co) === 0)
                    lua.lua_pushliteral(L, "dead");
                else
                    lua.lua_pushliteral(L, "suspended");  /* initial state */
                break;
            }
            default:  /* some error occurred */
                lua.lua_pushliteral(L, "dead");
                break;
        }
    }

    return 1;
};

const luaB_yieldable = function(L) {
    lua.lua_pushboolean(L, lua.lua_isyieldable(L));
    return 1;
};

const luaB_corunning = function(L) {
    lua.lua_pushboolean(L, lua.lua_pushthread(L));
    return 2;
};

const co_funcs = {
    "create":      luaB_cocreate,
    "isyieldable": luaB_yieldable,
    "resume":      luaB_coresume,
    "running":     luaB_corunning,
    "status":      luaB_costatus,
    "wrap":        luaB_cowrap,
    "yield":       luaB_yield
};

const luaopen_coroutine = function(L) {
    lauxlib.luaL_newlib(L, co_funcs);
    return 1;
};

module.exports.luaopen_coroutine = luaopen_coroutine;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const seedrandom = __webpack_require__(50);

const lua        = __webpack_require__(2);
const lauxlib    = __webpack_require__(6);
const llimit     = __webpack_require__(5);
const luaconf    = __webpack_require__(10);

var RNG          = seedrandom();

const math_randomseed = function(L) {
    RNG = seedrandom(Math.abs(lauxlib.luaL_checknumber(L, 1)));
    return 0;
};

const math_random = function(L) {
    let low, up;
    let r = RNG();
    switch (lua.lua_gettop(L)) {  /* check number of arguments */
        case 0:
            lua.lua_pushnumber(L, r);  /* Number between 0 and 1 */
            return 1;
        case 1: {
            low = 1;
            up = lauxlib.luaL_checkinteger(L, 1);
            break;
        }
        case 2: {
            low = lauxlib.luaL_checkinteger(L, 1);
            up = lauxlib.luaL_checkinteger(L, 2);
            break;
        }
        default: return lauxlib.luaL_error(L, lua.to_luastring("wrong number of arguments", true));
    }

    /* random integer in the interval [low, up] */
    lauxlib.luaL_argcheck(L, low <= up, 1, lua.to_luastring("interval is empty", true));
    lauxlib.luaL_argcheck(L, low >= 0 || up <= llimit.MAX_INT + low, 1,
            lua.to_luastring("interval too large", true));

    r *= (up - low) + 1;
    lua.lua_pushinteger(L, Math.floor(r) + low);
    return 1;
};

const math_abs = function(L) {
    if (lua.lua_isinteger(L, 1)) {
        let n = lua.lua_tointeger(L, 1);
        if (n < 0) n = (-n)|0;
        lua.lua_pushinteger(L, n);
    }
    else
        lua.lua_pushnumber(L, Math.abs(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_sin = function(L) {
    lua.lua_pushnumber(L, Math.sin(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_cos = function(L) {
    lua.lua_pushnumber(L, Math.cos(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_tan = function(L) {
    lua.lua_pushnumber(L, Math.tan(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_asin = function(L) {
    lua.lua_pushnumber(L, Math.asin(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_acos = function(L) {
    lua.lua_pushnumber(L, Math.acos(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_atan = function(L) {
    let y = lauxlib.luaL_checknumber(L, 1);
    let x = lauxlib.luaL_optnumber(L, 2, 1);
    lua.lua_pushnumber(L, Math.atan2(y, x));
    return 1;
};

const math_toint = function(L) {
    let n = lua.lua_tointegerx(L, 1);
    if (n !== false)
        lua.lua_pushinteger(L, n);
    else {
        lauxlib.luaL_checkany(L, 1);
        lua.lua_pushnil(L);  /* value is not convertible to integer */
    }
    return 1;
};

const pushnumint = function(L, d) {
    let n = luaconf.lua_numbertointeger(d);
    if (n !== false)  /* does 'd' fit in an integer? */
        lua.lua_pushinteger(L, n);  /* result is integer */
    else
        lua.lua_pushnumber(L, d);  /* result is float */
};

const math_floor = function(L) {
    if (lua.lua_isinteger(L, 1))
        lua.lua_settop(L, 1);
    else
        pushnumint(L, Math.floor(lauxlib.luaL_checknumber(L, 1)));

    return 1;
};

const math_ceil = function(L) {
    if (lua.lua_isinteger(L, 1))
        lua.lua_settop(L, 1);
    else
        pushnumint(L, Math.ceil(lauxlib.luaL_checknumber(L, 1)));

    return 1;
};

const math_sqrt = function(L) {
    lua.lua_pushnumber(L, Math.sqrt(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_ult = function(L) {
    let a = lauxlib.luaL_checkinteger(L, 1);
    let b = lauxlib.luaL_checkinteger(L, 2);
    lua.lua_pushboolean(L, (a >= 0)?(b<0 || a<b):(b<0 && a<b));
    return 1;
};

const math_log = function(L) {
    let x = lauxlib.luaL_checknumber(L, 1);
    let res;
    if (lua.lua_isnoneornil(L, 2))
        res = Math.log(x);
    else {
        let base = lauxlib.luaL_checknumber(L, 2);
        if (base === 2)
            res = Math.log2(x);
        else if (base === 10)
            res = Math.log10(x);
        else
            res = Math.log(x)/Math.log(base);
    }
    lua.lua_pushnumber(L, res);
    return 1;
};

const math_exp = function(L) {
    lua.lua_pushnumber(L, Math.exp(lauxlib.luaL_checknumber(L, 1)));
    return 1;
};

const math_deg = function(L) {
    lua.lua_pushnumber(L, lauxlib.luaL_checknumber(L, 1) * (180 / Math.PI));
    return 1;
};

const math_rad = function(L) {
    lua.lua_pushnumber(L, lauxlib.luaL_checknumber(L, 1) * (Math.PI / 180));
    return 1;
};

const math_min = function(L) {
    let n = lua.lua_gettop(L);  /* number of arguments */
    let imin = 1;  /* index of current minimum value */
    lauxlib.luaL_argcheck(L, n >= 1, 1, lua.to_luastring("value expected", true));
    for (let i = 2; i <= n; i++){
        if (lua.lua_compare(L, i, imin, lua.LUA_OPLT))
            imin = i;
    }
    lua.lua_pushvalue(L, imin);
    return 1;
};

const math_max = function(L) {
    let n = lua.lua_gettop(L);  /* number of arguments */
    let imax = 1;  /* index of current minimum value */
    lauxlib.luaL_argcheck(L, n >= 1, 1, lua.to_luastring("value expected", true));
    for (let i = 2; i <= n; i++){
        if (lua.lua_compare(L, imax, i, lua.LUA_OPLT))
            imax = i;
    }
    lua.lua_pushvalue(L, imax);
    return 1;
};

const math_type = function(L) {
    if (lua.lua_type(L, 1) === lua.LUA_TNUMBER) {
        if (lua.lua_isinteger(L, 1))
            lua.lua_pushliteral(L, "integer");
        else
            lua.lua_pushliteral(L, "float");
    } else {
        lauxlib.luaL_checkany(L, 1);
        lua.lua_pushnil(L);
    }
    return 1;
};

const math_fmod = function(L) {
    if (lua.lua_isinteger(L, 1) && lua.lua_isinteger(L, 2)) {
        let d = lua.lua_tointeger(L, 2);
        /* no special case needed for -1 in javascript */
        if (d === 0) {
            lauxlib.luaL_argerror(L, 2, lua.to_luastring("zero", true));
        } else
            lua.lua_pushinteger(L, (lua.lua_tointeger(L, 1) % d)|0);
    } else {
        let a = lauxlib.luaL_checknumber(L, 1);
        let b = lauxlib.luaL_checknumber(L, 2);
        lua.lua_pushnumber(L, a%b);
    }
    return 1;
};

const math_modf = function(L) {
    if (lua.lua_isinteger(L, 1)) {
        lua.lua_settop(L, 1);  /* number is its own integer part */
        lua.lua_pushnumber(L, 0);  /* no fractional part */
    } else {
        let n = lauxlib.luaL_checknumber(L, 1);
        let ip = n < 0 ? Math.ceil(n) : Math.floor(n);
        pushnumint(L, ip);
        lua.lua_pushnumber(L, n === ip ? 0 : n - ip);
    }
    return 2;
};

const mathlib = {
    "abs":        math_abs,
    "acos":       math_acos,
    "asin":       math_asin,
    "atan":       math_atan,
    "ceil":       math_ceil,
    "cos":        math_cos,
    "deg":        math_deg,
    "exp":        math_exp,
    "floor":      math_floor,
    "fmod":       math_fmod,
    "log":        math_log,
    "max":        math_max,
    "min":        math_min,
    "modf":       math_modf,
    "rad":        math_rad,
    "random":     math_random,
    "randomseed": math_randomseed,
    "sin":        math_sin,
    "sqrt":       math_sqrt,
    "tan":        math_tan,
    "tointeger":  math_toint,
    "type":       math_type,
    "ult":        math_ult
};

const luaopen_math = function(L) {
    lauxlib.luaL_newlib(L, mathlib);
    lua.lua_pushnumber(L, Math.PI);
    lua.lua_setfield(L, -2, lua.to_luastring("pi", true));
    lua.lua_pushnumber(L, Infinity);
    lua.lua_setfield(L, -2, lua.to_luastring("huge", true));
    lua.lua_pushinteger(L, llimit.MAX_INT);
    lua.lua_setfield(L, -2, lua.to_luastring("maxinteger", true));
    lua.lua_pushinteger(L, llimit.MIN_INT);
    lua.lua_setfield(L, -2, lua.to_luastring("mininteger", true));
    return 1;
};

module.exports.luaopen_math = luaopen_math;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert  = __webpack_require__(0);
const sprintf = __webpack_require__(25).sprintf;

const lauxlib = __webpack_require__(6);
const lua     = __webpack_require__(2);
const luaconf = __webpack_require__(10);
const llimit  = __webpack_require__(5);

const sL_ESC  = '%';
const L_ESC   = sL_ESC.charCodeAt(0);

/*
** maximum number of captures that a pattern can do during
** pattern-matching. This limit is arbitrary, but must fit in
** an unsigned char.
*/
const LUA_MAXCAPTURES = 32;

// (sizeof(size_t) < sizeof(int) ? MAX_SIZET : (size_t)(INT_MAX))
const MAXSIZE = 2147483647;

/* Give natural (i.e. strings end at the first \0) length of a string represented by an array of bytes */
const strlen = function(s) {
    let len = s.indexOf(0);
    return len > -1 ? len : s.length;
};

/* translate a relative string position: negative means back from end */
const posrelat = function(pos, len) {
    if (pos >= 0) return pos;
    else if (0 - pos > len) return 0;
    else return len + pos + 1;
};

const str_sub = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let l = s.length;
    let start = posrelat(lauxlib.luaL_checkinteger(L, 2), l);
    let end = posrelat(lauxlib.luaL_optinteger(L, 3, -1), l);
    if (start < 1) start = 1;
    if (end > l) end = l;
    if (start <= end)
        lua.lua_pushstring(L, s.slice(start - 1, (start - 1) + (end - start + 1)));
    else lua.lua_pushliteral(L, "");
    return 1;
};

const str_len = function(L) {
    lua.lua_pushinteger(L, lauxlib.luaL_checkstring(L, 1).length);
    return 1;
};

const str_char = function(L) {
    let n = lua.lua_gettop(L);  /* number of arguments */
    let p = [];
    for (let i = 1; i <= n; i++) {
        let c = lauxlib.luaL_checkinteger(L, i);
        lauxlib.luaL_argcheck(L, c >= 0 && c <= 255, "value out of range"); // Strings are 8-bit clean
        p.push(c);
    }
    lua.lua_pushstring(L, p);
    return 1;
};

const writer = function(L, b, size, B) {
    B.push(...b.slice(0, size));
    return 0;
};

const str_dump = function(L) {
    let b = [];
    let strip = lua.lua_toboolean(L, 2);
    lauxlib.luaL_checktype(L, 1, lua.LUA_TFUNCTION);
    lua.lua_settop(L, 1);
    if (lua.lua_dump(L, writer, b, strip) !== 0)
        return lauxlib.luaL_error(L, lua.to_luastring("unable to dump given function"));
    lua.lua_pushstring(L, b);
    return 1;
};

const SIZELENMOD = luaconf.LUA_NUMBER_FRMLEN.length + 1;

const L_NBFD = 1;

/*
** Add integer part of 'x' to buffer and return new 'x'
*/
const adddigit = function(buff, n, x) {
    let d = Math.floor(x);  /* get integer part from 'x' */
    buff[n] = d < 10 ? d + '0'.charCodeAt(0) : d - 10 + 'a'.charCodeAt(0);  /* add to buffer */
    return x - d;  /* return what is left */
};

const num2straux = function(x) {
    /* if 'inf' or 'NaN', format it like '%g' */
    if (Object.is(x, Infinity))
        return lua.to_luastring('inf', true).slice(0);
    else if (Object.is(x, -Infinity))
        return lua.to_luastring('-inf', true).slice(0);
    else if (Number.isNaN(x))
        return lua.to_luastring('nan', true).slice(0);
    else if (x === 0) {  /* can be -0... */
        /* create "0" or "-0" followed by exponent */
        let zero = sprintf(luaconf.LUA_NUMBER_FMT + "x0p+0", x);
        if (Object.is(x, -0))
            zero = "-" + zero;
        return lua.to_luastring(zero);
    } else {
        let buff = [];
        let fe = luaconf.frexp(x);  /* 'x' fraction and exponent */
        let m = fe[0];
        let e = fe[1];
        let n = 0;  /* character count */
        if (m < 0) {  /* is number negative? */
            buff[n++] = '-'.charCodeAt(0);  /* add signal */
            m = -m;  /* make it positive */
        }
        buff[n++] = '0'.charCodeAt(0);
        buff[n++] = 'x'.charCodeAt(0);  /* add "0x" */
        m = adddigit(buff, n++, m * (1 << L_NBFD));  /* add first digit */
        e -= L_NBFD;  /* this digit goes before the radix point */
        if (m > 0) {  /* more digits? */
            buff[n++] = luaconf.lua_getlocaledecpoint().charCodeAt(0);   /* add radix point */
            do {  /* add as many digits as needed */
                m = adddigit(buff, n++, m * 16);
            } while (m > 0);
        }
        let exp = lua.to_luastring(sprintf("p%+d", e));
        return buff.concat(exp);
    }
};

const lua_number2strx = function(L, fmt, x) {
    let buff = num2straux(x);
    if (fmt[SIZELENMOD] === 'A'.charCodeAt(0)) {
        for (let i = 0; i < buff.length; i++)
            buff[i] = String.fromCharCode(buff[i]).toUpperCase().charCodeAt(0);
    } else if (fmt[SIZELENMOD] !== 'a'.charCodeAt(0))
        lauxlib.luaL_error(L, lua.to_luastring("modifiers for format '%%a'/'%%A' not implemented"));
    return buff;
};

/*
** Maximum size of each formatted item. This maximum size is produced
** by format('%.99f', -maxfloat), and is equal to 99 + 3 ('-', '.',
** and '\0') + number of decimal digits to represent maxfloat (which
** is maximum exponent + 1). (99+3+1 then rounded to 120 for "extra
** expenses", such as locale-dependent stuff)
*/
const MAX_ITEM   = 120;// TODO: + l_mathlim(MAX_10_EXP);


/* valid flags in a format specification */
const FLAGS      = ["-".charCodeAt(0), "+".charCodeAt(0), " ".charCodeAt(0), "#".charCodeAt(0), "0".charCodeAt(0)];

/*
** maximum size of each format specification (such as "%-099.99d")
*/
const MAX_FORMAT = 32;

// TODO: locale ? and do it better
const isalpha = e => ('a'.charCodeAt(0) <= e && e <= 'z'.charCodeAt(0)) || (e >= 'A'.charCodeAt(0) && e <= 'Z'.charCodeAt(0));
const isdigit = e => '0'.charCodeAt(0) <= e && e <= '9'.charCodeAt(0);
const iscntrl = e => (0x00 <= e && e <= 0x1f) || e === 0x7f;
const isgraph = e => e > 32 && e < 127; // TODO: Will only work for ASCII
const islower = e => /^[a-z]$/.test(String.fromCharCode(e));
const isupper = e => /^[A-Z]$/.test(String.fromCharCode(e));
const isalnum = e => /^[a-zA-Z0-9]$/.test(String.fromCharCode(e));
const ispunct = e => isgraph(e) && !isalnum(e);
const isspace = e => /^\s$/.test(String.fromCharCode(e));
const isxdigit = e => /^[0-9A-Fa-f]$/.test(String.fromCharCode(e));

// Concat 2 arrays by modifying the first one
const concat = function (a1, a2) {
    for (let i = 0; i < a2.length; i++)
        a1.push(a2[i]);
};

const addquoted = function(b, s) {
    b.push('"'.charCodeAt(0));
    let len = s.length;
    while (len--) {
        if (s[0] === '"'.charCodeAt(0) || s[0] === '\\'.charCodeAt(0) || s[0] === '\n'.charCodeAt(0)) {
            b.push('\\'.charCodeAt(0));
            b.push(s[0]);
        } else if (iscntrl(s[0])) {
            let buff = [];
            if (!isdigit(s[1]))
                buff = lua.to_luastring(sprintf("\\%d", s[0]));
            else
                buff = lua.to_luastring(sprintf("\\%03d", s[0]));
            concat(b, buff);
        } else
            b.push(s[0]);
        s = s.slice(1);
    }
    b.push('"'.charCodeAt(0));
};

/*
** Ensures the 'buff' string uses a dot as the radix character.
*/
const checkdp = function(buff) {
    if (buff.indexOf('.'.charCodeAt(0)) < 0) {  /* no dot? */
        let point = luaconf.lua_getlocaledecpoint().charCodeAt(0);  /* try locale point */
        let ppoint = buff.indexOf(point);
        if (ppoint) buff[ppoint] = '.';  /* change it to a dot */
    }
};

const addliteral = function(L, b, arg) {
    switch(lua.lua_type(L, arg)) {
        case lua.LUA_TSTRING: {
            let s = lua.lua_tostring(L, arg);
            addquoted(b, s, s.length);
            break;
        }
        case lua.LUA_TNUMBER: {
            if (!lua.lua_isinteger(L, arg)) {  /* float? */
                let n = lua.lua_tonumber(L, arg);  /* write as hexa ('%a') */
                concat(b, lua_number2strx(L, lua.to_luastring(`%${luaconf.LUA_INTEGER_FRMLEN}a`), n));
                checkdp(b);  /* ensure it uses a dot */
            } else {  /* integers */
                let n = lua.lua_tointeger(L, arg);
                let format = (n === llimit.LUA_MININTEGER)  /* corner case? */
                    ? "0x%" + luaconf.LUA_INTEGER_FRMLEN + "x"  /* use hexa */
                    : luaconf.LUA_INTEGER_FMT;  /* else use default format */
                concat(b, lua.to_luastring(sprintf(format, n)));
            }
            break;
        }
        case lua.LUA_TNIL: case lua.LUA_TBOOLEAN: {
            concat(b, lauxlib.luaL_tolstring(L, arg));
            break;
        }
        default: {
            lauxlib.luaL_argerror(L, arg, lua.to_luastring("value has no literal form", true));
        }
    }
};

const scanformat = function(L, strfrmt, form) {
    let p = strfrmt;
    while (p[0] !== 0 && FLAGS.indexOf(p[0]) >= 0) p = p.slice(1);  /* skip flags */
    if (strfrmt.length - p.length >= FLAGS.length)
        lauxlib.luaL_error(L, lua.to_luastring("invalid format (repeated flags)", true));
    if (isdigit(p[0])) p = p.slice(1);  /* skip width */
    if (isdigit(p[0])) p = p.slice(1);  /* (2 digits at most) */
    if (p[0] === '.'.charCodeAt(0)) {
        p = p.slice(1);
        if (isdigit(p[0])) p = p.slice(1);  /* skip precision */
        if (isdigit(p[0])) p = p.slice(1);  /* (2 digits at most) */
    }
    if (isdigit(p[0]))
        lauxlib.luaL_error(L, lua.to_luastring("invalid format (width or precision too long)", true));
    form[0] = "%".charCodeAt(0);
    for (let i = 0; i < strfrmt.length - p.length + 1; i++)
        form[i + 1] = strfrmt[i];
    // form[strfrmt.length - p.length + 2] = 0;
    return {
        form: form,
        p: p
    };
};

/*
** add length modifier into formats
*/
const addlenmod = function(form, lenmod) {
    let l = form.length;
    let lm = lenmod.length;
    let spec = form[l - 1];
    for (let i = 0; i < lenmod.length; i++)
        form[i + l - 1] = lenmod[i];
    form[l + lm - 1] = spec;
    // form[l + lm] = 0;
    return form;
};

const str_format = function(L) {
    let top = lua.lua_gettop(L);
    let arg = 1;
    let strfrmt = lauxlib.luaL_checkstring(L, arg);
    let b = [];

    while (strfrmt.length > 0) {
        if (strfrmt[0] !== L_ESC) {
            b.push(strfrmt[0]);
            strfrmt = strfrmt.slice(1);
        } else if ((strfrmt = strfrmt.slice(1))[0] === L_ESC) {
            b.push(strfrmt[0]);
            strfrmt = strfrmt.slice(1);
        } else { /* format item */
            let form = [];  /* to store the format ('%...') */
            if (++arg > top)
                lauxlib.luaL_argerror(L, arg, lua.to_luastring("no value", true));
            let f = scanformat(L, strfrmt, form);
            strfrmt = f.p;
            form = f.form;
            switch (String.fromCharCode(strfrmt[0])) {
                case 'c': {
                    strfrmt = strfrmt.slice(1);
                    // concat(b, lua.to_luastring(sprintf(String.fromCharCode(...form), lauxlib.luaL_checkinteger(L, arg))));
                    b.push(lauxlib.luaL_checkinteger(L, arg));
                    break;
                }
                case 'd': case 'i':
                case 'o': case 'u': case 'x': case 'X': {
                    strfrmt = strfrmt.slice(1);
                    let n = lauxlib.luaL_checkinteger(L, arg);
                    form = addlenmod(form, luaconf.LUA_INTEGER_FRMLEN.split('').map(e => e.charCodeAt(0)));
                    concat(b, lua.to_luastring(sprintf(String.fromCharCode(...form), n)));
                    break;
                }
                case 'a': case 'A': {
                    strfrmt = strfrmt.slice(1);
                    form = addlenmod(form, luaconf.LUA_INTEGER_FRMLEN.split('').map(e => e.charCodeAt(0)));
                    concat(b, lua_number2strx(L, form, lauxlib.luaL_checknumber(L, arg)));
                    break;
                }
                case 'e': case 'E': case 'f':
                case 'g': case 'G': {
                    strfrmt = strfrmt.slice(1);
                    let n = lauxlib.luaL_checknumber(L, arg);
                    form = addlenmod(form, luaconf.LUA_INTEGER_FRMLEN.split('').map(e => e.charCodeAt(0)));
                    concat(b, lua.to_luastring(sprintf(String.fromCharCode(...form), n)));
                    break;
                }
                case 'q': {
                    strfrmt = strfrmt.slice(1);
                    addliteral(L, b, arg);
                    break;
                }
                case 's': {
                    strfrmt = strfrmt.slice(1);
                    let s = lauxlib.luaL_tolstring(L, arg);
                    if (form.length <= 2 || form[2] === 0) {  /* no modifiers? */
                        concat(b, s);  /* keep entire string */
                        lua.lua_pop(L, 1);  /* remove result from 'luaL_tolstring' */
                    } else {
                        lauxlib.luaL_argcheck(L, s.length === strlen(s), arg, lua.to_luastring("string contains zeros", true));
                        if (form.indexOf('.'.charCodeAt(0)) < 0 && s.length >= 100) {
                            /* no precision and string is too long to be formatted */
                            concat(b, s);  /* keep entire string */
                            lua.lua_pop(L, 1);  /* remove result from 'luaL_tolstring' */
                        } else {  /* format the string into 'buff' */
                            // TODO: will fail if s is not valid UTF-8
                            concat(b, lua.to_luastring(sprintf(String.fromCharCode(...form), lua.to_jsstring(s))));
                            lua.lua_pop(L, 1);  /* remove result from 'luaL_tolstring' */
                        }
                    }
                    break;
                }
                default: {  /* also treat cases 'pnLlh' */
                    return lauxlib.luaL_error(L, lua.to_luastring("invalid option '%%%c' to 'format'"), strfrmt[0]);
                }
            }
        }
    }

    lua.lua_pushstring(L, b);
    return 1;
};

/* value used for padding */
const LUAL_PACKPADBYTE = 0x00;

/* maximum size for the binary representation of an integer */
const MAXINTSIZE = 16;

const SZINT = 4; // Size of lua_Integer

/* number of bits in a character */
const NB = 8;

/* mask for one character (NB 1's) */
const MC = ((1 << NB) - 1);

const MAXALIGN = 8;

/*
** information to pack/unpack stuff
*/
class Header {
    constructor(L) {
        this.L = L;
        this.islittle = true;
        this.maxalign = 1;
    }
}

/*
** options for pack/unpack
*/
const KOption = {
    Kint:       0, /* signed integers */
    Kuint:      1, /* unsigned integers */
    Kfloat:     2, /* floating-point numbers */
    Kchar:      3, /* fixed-length strings */
    Kstring:    4, /* strings with prefixed length */
    Kzstr:      5, /* zero-terminated strings */
    Kpadding:   6, /* padding */
    Kpaddalign: 7, /* padding for alignment */
    Knop:       8  /* no-op (configuration or spaces) */
};

const digit = function(c) {
    return '0'.charCodeAt(0) <= c && c <= '9'.charCodeAt(0);
};

const getnum = function(fmt, df) {
    if (fmt.off >= fmt.s.length || !digit(fmt.s[fmt.off]))  /* no number? */
        return df;  /* return default value */
    else {
        let a = 0;
        do {
            a = a * 10 + (fmt.s[fmt.off++] - '0'.charCodeAt(0));
        } while (fmt.off < fmt.s.length && digit(fmt.s[fmt.off]) && a <= (MAXSIZE - 9)/10);
        return a;
    }
};

/*
** Read an integer numeral and raises an error if it is larger
** than the maximum size for integers.
*/
const getnumlimit = function(h, fmt, df) {
    let sz = getnum(fmt, df);
    if (sz > MAXINTSIZE || sz <= 0)
        lauxlib.luaL_error(h.L, lua.to_luastring("integral size (%d) out of limits [1,%d]"), sz, MAXINTSIZE);
    return sz;
};

/*
** Read and classify next option. 'size' is filled with option's size.
*/
const getoption = function(h, fmt) {
    let r = {
        opt: NaN,
        size: NaN
    };

    r.opt = fmt.s[fmt.off++];
    r.size = 0;  /* default */
    switch (r.opt) {
        case 'b'.charCodeAt(0): r.size = 1; r.opt = KOption.Kint;   return r; // sizeof(char): 1
        case 'B'.charCodeAt(0): r.size = 1; r.opt = KOption.Kuint;  return r;
        case 'h'.charCodeAt(0): r.size = 2; r.opt = KOption.Kint;   return r; // sizeof(short): 2
        case 'H'.charCodeAt(0): r.size = 2; r.opt = KOption.Kuint;  return r;
        case 'l'.charCodeAt(0): r.size = 4; r.opt = KOption.Kint;   return r; // sizeof(long): 4
        case 'L'.charCodeAt(0): r.size = 4; r.opt = KOption.Kuint;  return r;
        case 'j'.charCodeAt(0): r.size = 4; r.opt = KOption.Kint;   return r; // sizeof(lua_Integer): 4
        case 'J'.charCodeAt(0): r.size = 4; r.opt = KOption.Kuint;  return r;
        case 'T'.charCodeAt(0): r.size = 4; r.opt = KOption.Kuint;  return r; // sizeof(size_t): 4
        case 'f'.charCodeAt(0): r.size = 4; r.opt = KOption.Kfloat; return r; // sizeof(float): 4
        case 'd'.charCodeAt(0): r.size = 8; r.opt = KOption.Kfloat; return r; // sizeof(double): 8
        case 'n'.charCodeAt(0): r.size = 8; r.opt = KOption.Kfloat; return r; // sizeof(lua_Number): 8
        case 'i'.charCodeAt(0): r.size = getnumlimit(h, fmt, 4); r.opt = KOption.Kint;    return r; // sizeof(int): 4
        case 'I'.charCodeAt(0): r.size = getnumlimit(h, fmt, 4); r.opt = KOption.Kuint;   return r;
        case 's'.charCodeAt(0): r.size = getnumlimit(h, fmt, 4); r.opt = KOption.Kstring; return r;
        case 'c'.charCodeAt(0): {
            r.size = getnum(fmt, -1);
            if (r.size === -1)
                lauxlib.luaL_error(h.L, lua.to_luastring("missing size for format option 'c'"));
            r.opt = KOption.Kchar;
            return r;
        }
        case 'z'.charCodeAt(0):             r.opt = KOption.Kzstr;      return r;
        case 'x'.charCodeAt(0): r.size = 1; r.opt = KOption.Kpadding;   return r;
        case 'X'.charCodeAt(0):             r.opt = KOption.Kpaddalign; return r;
        case ' '.charCodeAt(0): break;
        case '<'.charCodeAt(0): h.islittle = true; break;
        case '>'.charCodeAt(0): h.islittle = false; break;
        case '='.charCodeAt(0): h.islittle = true; break;
        case '!'.charCodeAt(0): h.maxalign = getnumlimit(h, fmt, MAXALIGN); break;
        default: lauxlib.luaL_error(h.L, lua.to_luastring("invalid format option '%c'"), r.opt);
    }

    r.opt = KOption.Knop;
    return r;
};

/*
** Read, classify, and fill other details about the next option.
** 'psize' is filled with option's size, 'notoalign' with its
** alignment requirements.
** Local variable 'size' gets the size to be aligned. (Kpadal option
** always gets its full alignment, other options are limited by
** the maximum alignment ('maxalign'). Kchar option needs no alignment
** despite its size.
*/
const getdetails = function(h, totalsize, fmt) {
    let r = {
        opt: NaN,
        size: NaN,
        ntoalign: NaN
    };

    let opt = getoption(h, fmt);
    r.size = opt.size;
    r.opt = opt.opt;
    let align = r.size;  /* usually, alignment follows size */
    if (r.opt === KOption.Kpaddalign) {  /* 'X' gets alignment from following option */
        if (fmt.off >= fmt.s.length || fmt.s[fmt.off] === 0)
            lauxlib.luaL_argerror(h.L, 1, lua.to_luastring("invalid next option for option 'X'", true));
        else {
            let o = getoption(h, fmt);
            align = o.size;
            o = o.opt;
            if (o === KOption.Kchar || align === 0)
                lauxlib.luaL_argerror(h.L, 1, lua.to_luastring("invalid next option for option 'X'", true));
        }
    }
    if (align <= 1 || r.opt === KOption.Kchar)  /* need no alignment? */
        r.ntoalign = 0;
    else {
        if (align > h.maxalign)  /* enforce maximum alignment */
            align = h.maxalign;
        if ((align & (align -1)) !== 0)  /* is 'align' not a power of 2? */
            lauxlib.luaL_argerror(h.L, 1, lua.to_luastring("format asks for alignment not power of 2", true));
        r.ntoalign = (align - (totalsize & (align - 1))) & (align - 1);
    }
    return r;
};

/*
** Pack integer 'n' with 'size' bytes and 'islittle' endianness.
** The final 'if' handles the case when 'size' is larger than
** the size of a Lua integer, correcting the extra sign-extension
** bytes if necessary (by default they would be zeros).
*/
const packint = function(b, n, islittle, size, neg) {
    let buff = new Array(size);

    buff[islittle ? 0 :  size - 1] = n & MC;  /* first byte */
    for (let i = 1; i < size; i++) {
        n >>= NB;
        buff[islittle ? i : size - 1 - i] = n & MC;
    }
    if (neg && size > SZINT) {  /* negative number need sign extension? */
        for (let i = SZINT; i < size; i++)  /* correct extra bytes */
            buff[islittle ? i : size - 1 - i] = MC;
    }
    b.push(...buff);  /* add result to buffer */
};

const packnum = function(b, n, islittle, size) {
    let dv = new DataView(new ArrayBuffer(size));
    if (size === 4) dv.setFloat32(0, n, islittle);
    else dv.setFloat64(0, n, islittle);

    for (let i = 0; i < size; i++)
        b.push(dv.getUint8(i, islittle));
};

const str_pack = function(L) {
    let b = [];
    let h = new Header(L);
    let fmt = {
        s: lauxlib.luaL_checkstring(L, 1),  /* format string */
        off: 0
    };
    let arg = 1;  /* current argument to pack */
    let totalsize = 0;  /* accumulate total size of result */
    lua.lua_pushnil(L);  /* mark to separate arguments from string buffer */
    while (fmt.off < fmt.s.length) {
        let details = getdetails(h, totalsize, fmt);
        let opt = details.opt;
        let size = details.size;
        let ntoalign = details.ntoalign;
        totalsize += ntoalign + size;
        while (ntoalign-- > 0)
            b.push(LUAL_PACKPADBYTE);  /* fill alignment */
        arg++;
        switch (opt) {
            case KOption.Kint: {  /* signed integers */
                let n = lauxlib.luaL_checkinteger(L, arg);
                if (size < SZINT) {  /* need overflow check? */
                    let lim = 1 << (size * 8) - 1;
                    lauxlib.luaL_argcheck(L, -lim <= n && n < lim, arg, lua.to_luastring("integer overflow", true));
                }
                packint(b, n, h.islittle, size, n < 0);
                break;
            }
            case KOption.Kuint: {  /* unsigned integers */
                let n = lauxlib.luaL_checkinteger(L, arg);
                if (size < SZINT)
                    lauxlib.luaL_argcheck(L, (n>>>0) < (1 << (size * NB)), arg, lua.to_luastring("unsigned overflow", true));
                packint(b, n>>>0, h.islittle, size, false);
                break;
            }
            case KOption.Kfloat: {  /* floating-point options */
                let n = lauxlib.luaL_checknumber(L, arg);  /* get argument */
                packnum(b, n, h.islittle, size);
                break;
            }
            case KOption.Kchar: {  /* fixed-size string */
                let s = lauxlib.luaL_checkstring(L, arg);
                let len = s.length;
                lauxlib.luaL_argcheck(L, len <= size, arg, lua.to_luastring("string longer than given size", true));
                b.push(...s);  /* add string */
                while (len++ < size)  /* pad extra space */
                    b.push(LUAL_PACKPADBYTE);
                break;
            }
            case KOption.Kstring: {  /* strings with length count */
                let s = lauxlib.luaL_checkstring(L, arg);
                let len = s.length;
                lauxlib.luaL_argcheck(L, size >= 4 /* sizeof(size_t) */ ||
                    len < (1 << (size * NB)),
                    arg, lua.to_luastring("string length does not fit in given size", true));
                packint(b, len, h.islittle, size, 0);  /* pack length */
                b.push(...s);
                totalsize += len;
                break;
            }
            case KOption.Kzstr: {  /* zero-terminated string */
                let s = lauxlib.luaL_checkstring(L, arg);
                let len = s.length;
                lauxlib.luaL_argcheck(L, s.indexOf(0) < 0, arg, lua.to_luastring("strings contains zeros", true));
                b.push(...s);
                b.push(0);  /* add zero at the end */
                totalsize += len + 1;
                break;
            }
            case KOption.Kpadding: b.push(LUAL_PACKPADBYTE); /* fall through */
            case KOption.Kpaddalign: case KOption.Knop:
                arg--;  /* undo increment */
                break;
        }
    }
    lua.lua_pushstring(L, b);
    return 1;
};

const str_reverse = function(L) {
    lua.lua_pushstring(L, lauxlib.luaL_checkstring(L, 1).slice(0).reverse());
    return 1;
};

const str_lower = function(L) {
    // TODO: will fail on invalid UTF-8
    lua.lua_pushstring(L, lua.to_luastring(lua.to_jsstring(lauxlib.luaL_checkstring(L, 1)).toLowerCase()));
    return 1;
};

const str_upper = function(L) {
    // TODO: will fail on invalid UTF-8
    lua.lua_pushstring(L, lua.to_luastring(lua.to_jsstring(lauxlib.luaL_checkstring(L, 1)).toUpperCase()));
    return 1;
};

const str_rep = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let n = lauxlib.luaL_checkinteger(L, 2);
    let sep = lauxlib.luaL_optstring(L, 3, []);

    if (s.length + sep.length < s.length || s.length + sep.length > MAXSIZE / n)  /* may overflow? */
        return lauxlib.luaL_error(L, lua.to_luastring("resulting string too large", true));

    let r = [];
    for (let i = 0; i < n - 1; i++)
        r = r.concat(s.concat(sep));
    r = r.concat(s);

    lua.lua_pushstring(L, n > 0 ? r : []);
    return 1;
};

const str_byte = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let l = s.length;
    let posi = posrelat(lauxlib.luaL_optinteger(L, 2, 1), l);
    let pose = posrelat(lauxlib.luaL_optinteger(L, 3, posi), l);

    if (posi < 1) posi = 1;
    if (pose > l) pose = l;
    if (posi > pose) return 0;  /* empty interval; return no values */
    if (pose - posi >= llimit.MAX_INT)  /* arithmetic overflow? */
        return lauxlib.luaL_error(L, lua.to_luastring("string slice too long", true));

    let n = (pose - posi) + 1;
    lauxlib.luaL_checkstack(L, n, lua.to_luastring("string slice too long", true));
    for (let i = 0; i < n; i++)
        lua.lua_pushinteger(L, s[posi + i - 1]);
    return n;
};

const str_packsize = function(L) {
    let h = new Header(L);
    let fmt = {
        s: lauxlib.luaL_checkstring(L, 1),
        off: 0
    };
    let totalsize = 0;  /* accumulate total size of result */
    while (fmt.off < fmt.s.length) {
        let details = getdetails(h, totalsize, fmt);
        let opt = details.opt;
        let size = details.size;
        let ntoalign = details.ntoalign;
        size += ntoalign;  /* total space used by option */
        lauxlib.luaL_argcheck(L, totalsize <= MAXSIZE - size, 1, lua.to_luastring("format result too large", true));
        totalsize += size;
        switch (opt) {
            case KOption.Kstring:  /* strings with length count */
            case KOption.Kzstr:    /* zero-terminated string */
                lauxlib.luaL_argerror(L, 1, lua.to_luastring("variable-length format", true));
                /* call never return, but to avoid warnings: *//* fall through */
            default:  break;
        }
    }
    lua.lua_pushinteger(L, totalsize);
    return 1;
};

/*
** Unpack an integer with 'size' bytes and 'islittle' endianness.
** If size is smaller than the size of a Lua integer and integer
** is signed, must do sign extension (propagating the sign to the
** higher bits); if size is larger than the size of a Lua integer,
** it must check the unread bytes to see whether they do not cause an
** overflow.
*/
const unpackint = function(L, str, islittle, size, issigned) {
    let res = 0;
    let limit = size <= SZINT ? size : SZINT;
    for (let i = limit - 1; i >= 0; i--) {
        res <<= NB;
        res |= str[islittle ? i : size - 1 - i];
    }
    if (size < SZINT) {  /* real size smaller than lua_Integer? */
        if (issigned) {  /* needs sign extension? */
            let mask = 1 << (size * NB - 1);
            res = ((res ^ mask) - mask);  /* do sign extension */
        }
    } else if (size > SZINT) {  /* must check unread bytes */
        let mask = !issigned || res >= 0 ? 0 : MC;
        for (let i = limit; i < size; i++) {
            if (str[islittle ? i : size - 1 - i] !== mask)
                lauxlib.luaL_error(L, lua.to_luastring("%d-byte integer does not fit into Lua Integer"), size);
        }
    }
    return res;
};

const unpacknum = function(L, b, islittle, size) {
    assert(b.length >= size);

    let dv = new DataView(new ArrayBuffer(size));
    for (let i = 0; i < size; i++)
        dv.setUint8(i, b[i], islittle);

    if (size == 4) return dv.getFloat32(0, islittle);
    else return dv.getFloat64(0, islittle);
};

const str_unpack = function(L) {
    let h = new Header(L);
    let fmt = {
        s: lauxlib.luaL_checkstring(L, 1),
        off: 0
    };
    let data = lauxlib.luaL_checkstring(L, 2);
    let ld = data.length;
    let pos = posrelat(lauxlib.luaL_optinteger(L, 3, 1), ld) - 1;
    let n = 0;  /* number of results */
    lauxlib.luaL_argcheck(L, pos <= ld && pos >= 0, 3, lua.to_luastring("initial position out of string", true));
    while (fmt.off < fmt.s.length) {
        let details = getdetails(h, pos, fmt);
        let opt = details.opt;
        let size = details.size;
        let ntoalign = details.ntoalign;
        if (/*ntoalign + size > ~pos ||*/ pos + ntoalign + size > ld)
            lauxlib.luaL_argerror(L, 2, lua.to_luastring("data string too short", true));
        pos += ntoalign;  /* skip alignment */
        /* stack space for item + next position */
        lauxlib.luaL_checkstack(L, 2, lua.to_luastring("too many results", true));
        n++;
        switch (opt) {
            case KOption.Kint:
            case KOption.Kuint: {
                let res = unpackint(L, data.slice(pos), h.islittle, size, opt === KOption.Kint);
                lua.lua_pushinteger(L, res);
                break;
            }
            case KOption.Kfloat: {
                let res = unpacknum(L, data.slice(pos), h.islittle, size);
                lua.lua_pushnumber(L, res);
                break;
            }
            case KOption.Kchar: {
                lua.lua_pushstring(L, data.slice(pos, pos + size));
                break;
            }
            case KOption.Kstring: {
                let len = unpackint(L, data.slice(pos), h.islittle, size, 0);
                lauxlib.luaL_argcheck(L, pos + len + size <= ld, 2, lua.to_luastring("data string too short", true));
                lua.lua_pushstring(L, data.slice(pos + size, pos + size + len));
                pos += len;  /* skip string */
                break;
            }
            case KOption.Kzstr: {
                let len = data.slice(pos).indexOf(0);
                lua.lua_pushstring(L, data.slice(pos, pos + len));
                pos += len + 1;  /* skip string plus final '\0' */
                break;
            }
            case KOption.Kpaddalign: case KOption.Kpadding: case KOption.Knop:
                n--;  /* undo increment */
                break;
        }
        pos += size;
    }
    lua.lua_pushinteger(L, pos + 1);  /* next position */
    return n + 1;
};

const CAP_UNFINISHED = -1;
const CAP_POSITION   = -2;
const MAXCCALLS      = 200;
const SPECIALS       = ["^".charCodeAt(0), "$".charCodeAt(0), "*".charCodeAt(0), "+".charCodeAt(0), "?".charCodeAt(0), ".".charCodeAt(0), "(".charCodeAt(0), "[".charCodeAt(0), "%".charCodeAt(0), "-".charCodeAt(0)];

class MatchState {
    constructor(L) {
        this.src = null;  /* unmodified source string */
        this.src_init = null;  /* init of source string */
        this.src_end = null;  /* end ('\0') of source string */
        this.p = null;  /* unmodified pattern string */
        this.p_end = null;  /* end ('\0') of pattern */
        this.L = L;
        this.matchdepth = NaN;  /* control for recursive depth */
        this.level = NaN;  /* total number of captures (finished or unfinished) */
        this.capture = [];
    }
}

const check_capture = function(ms, l) {
    l = l - '1'.charCodeAt(0);
    if (l < 0 || l >= ms.level || ms.capture[l].len === CAP_UNFINISHED)
        return lauxlib.luaL_error(ms.L, lua.to_luastring("invalid capture index %%%d"), l + 1);
    return l;
};

const capture_to_close = function(ms) {
    let level = ms.level;
    for (level--; level >= 0; level--)
        if (ms.capture[level].len === CAP_UNFINISHED) return level;
    return lauxlib.luaL_error(ms.L, lua.to_luastring("invalid pattern capture"));
};

const classend = function(ms, p) {
    switch(ms.p[p++]) {
        case L_ESC: {
            if (p === ms.p_end)
                lauxlib.luaL_error(ms.L, lua.to_luastring("malformed pattern (ends with '%%')"));
            return p + 1;
        }
        case '['.charCodeAt(0): {
            if (ms.p[p] === '^'.charCodeAt(0)) p++;
            do {  /* look for a ']' */
                if (p === ms.p_end)
                    lauxlib.luaL_error(ms.L, lua.to_luastring("malformed pattern (missing ']')"));
                if (ms.p[p++] === L_ESC && p < ms.p_end)
                    p++;  /* skip escapes (e.g. '%]') */
            } while (ms.p[p] !== ']'.charCodeAt(0));
            return p + 1;
        }
        default: {
            return p;
        }
    }
};

const match_class = function(c, cl) {
    let res;
    switch (String.fromCharCode(cl).toLowerCase().charCodeAt(0)) {
        case 'a'.charCodeAt(0) : res = isalpha(c); break;
        case 'c'.charCodeAt(0) : res = iscntrl(c); break;
        case 'd'.charCodeAt(0) : res = isdigit(c); break;
        case 'g'.charCodeAt(0) : res = isgraph(c); break;
        case 'l'.charCodeAt(0) : res = islower(c); break;
        case 'p'.charCodeAt(0) : res = ispunct(c); break;
        case 's'.charCodeAt(0) : res = isspace(c); break;
        case 'u'.charCodeAt(0) : res = isupper(c); break;
        case 'w'.charCodeAt(0) : res = isalnum(c); break;
        case 'x'.charCodeAt(0) : res = isxdigit(c); break;
        case 'z'.charCodeAt(0) : res = (c === 0); break;  /* deprecated option */
        default: return (cl === c);
    }
    return (islower(cl) ? res : !res);
};

const matchbracketclass = function(ms, c, p, ec) {
    let sig = true;
    if (ms.p[p + 1] === '^'.charCodeAt(0)) {
        sig = false;
        p++;  /* skip the '^' */
    }
    while (++p < ec) {
        if (ms.p[p] === L_ESC) {
            p++;
            if (match_class(c, ms.p[p]))
                return sig;
        } else if (ms.p[p + 1] === '-'.charCodeAt(0) && p + 2 < ec) {
            p += 2;
            if (ms.p[p - 2] <= c && c <= ms.p[p])
                return sig;
        } else if (ms.p[p] === c) return sig;
    }
    return !sig;
};

const singlematch = function(ms, s, p, ep) {
    if (s >= ms.src_end)
        return false;
    else {
        let c = ms.src[s];
        switch (ms.p[p]) {
            case '.'.charCodeAt(0): return true;  /* matches any char */
            case L_ESC: return match_class(c, ms.p[p + 1]);
            case '['.charCodeAt(0): return matchbracketclass(ms, c, p, ep - 1);
            default: return ms.p[p] === c;
        }
    }
};

const matchbalance = function(ms, s, p) {
    if (p >= ms.p_end - 1)
        lauxlib.luaL_error(ms.L, lua.to_luastring("malformed pattern (missing arguments to '%%b'"));
    if (ms.src[s] !== ms.p[p])
        return null;
    else {
        let b = ms.p[p];
        let e = ms.p[p + 1];
        let cont = 1;
        while (++s < ms.src_end) {
            if (ms.src[s] === e) {
                if (--cont === 0) return s + 1;
            }
            else if (ms.src[s] === b) cont++;
        }
    }
    return null;  /* string ends out of balance */
};

const max_expand = function(ms, s, p, ep) {
    let i = 0;  /* counts maximum expand for item */
    while (singlematch(ms, s + i, p, ep))
        i++;
    /* keeps trying to match with the maximum repetitions */
    while (i >= 0) {
        let res = match(ms, s + i, ep + 1);
        if (res) return res;
        i--;  /* else didn't match; reduce 1 repetition to try again */
    }
    return null;
};

const min_expand = function(ms, s, p, ep) {
    for (;;) {
        let res = match(ms, s, ep + 1);
        if (res !== null)
            return res;
        else if (singlematch(ms, s, p, ep))
            s++;  /* try with one more repetition */
        else return null;
    }
};

const start_capture = function(ms, s, p, what) {
    let level = ms.level;
    if (level >= LUA_MAXCAPTURES) lauxlib.luaL_error(ms.L, lua.to_luastring("too many captures", true));
    ms.capture[level] = ms.capture[level] ? ms.capture[level] : {};
    ms.capture[level].init = s;
    ms.capture[level].len = what;
    ms.level = level + 1;
    let res;
    if ((res = match(ms, s, p)) === null)  /* match failed? */
        ms.level--;  /* undo capture */
    return res;
};

const end_capture = function(ms, s, p) {
    let l = capture_to_close(ms);
    ms.capture[l].len = s - ms.capture[l].init;  /* close capture */
    let res;
    if ((res = match(ms, s, p)) === null)  /* match failed? */
        ms.capture[l].len = CAP_UNFINISHED;  /* undo capture */
    return res;
};

/* Compare the elements of arrays 'a' and 'b' to see if they contain the same elements */
const array_cmp = function(a, ai, b, bi, len) {
    let aj = ai+len;
    for (; ai < aj; ai++, bi++) {
        if (a[ai] !== b[bi])
            return false;
    }
    return true;
};

const match_capture = function(ms, s, l) {
    l = check_capture(ms, l);
    let len = ms.capture[l].len;
    if ((ms.src_end-s) >= len && array_cmp(ms.src, ms.capture[l].init, ms.src, s, len))
        return s+len;
    else return null;
};

const match = function(ms, s, p) {
    let gotodefault = false;
    let gotoinit = true;

    if (ms.matchdepth-- === 0)
        lauxlib.luaL_error(ms.L, lua.to_luastring("pattern too complex", true));

    while (gotoinit || gotodefault) {
        gotoinit = false;
        if (p !== ms.p_end) {  /* end of pattern? */
            switch (gotodefault ? 'x'.charCodeAt(0) : ms.p[p]) {
                case '('.charCodeAt(0): {  /* start capture */
                    if (ms.p[p + 1] === ')'.charCodeAt(0))  /* position capture? */
                        s = start_capture(ms, s, p + 2, CAP_POSITION);
                    else
                        s = start_capture(ms, s, p + 1, CAP_UNFINISHED);
                    break;
                }
                case ')'.charCodeAt(0): {  /* end capture */
                    s = end_capture(ms, s, p + 1);
                    break;
                }
                case '$'.charCodeAt(0): {
                    if (p + 1 !== ms.p_end) {  /* is the '$' the last char in pattern? */
                        gotodefault = true;  /* no; go to default */
                        break;
                    }
                    s = ms.src.slice(s).length === 0 ? s : null;  /* check end of string */
                    break;
                }
                case L_ESC: {  /* escaped sequences not in the format class[*+?-]? */
                    switch (ms.p[p + 1]) {
                        case 'b'.charCodeAt(0): {  /* balanced string? */
                            s = matchbalance(ms, s, p + 2);
                            if (s !== null) {
                                p += 4;
                                gotoinit = true;
                            }
                            break;
                        }
                        case 'f'.charCodeAt(0): {  /* frontier? */
                            p += 2;
                            if (ms.p[p] !== '['.charCodeAt(0))
                                lauxlib.luaL_error(ms.L, lua.to_luastring("missing '[' after '%%f' in pattern"));
                            let ep = classend(ms, p);  /* points to what is next */
                            let previous = s === ms.src_init ? 0 : ms.src[s-1];
                            if (!matchbracketclass(ms, previous, p, ep - 1) && matchbracketclass(ms, (s===ms.src_end)?0:ms.src[s], p, ep - 1)) {
                                p = ep; gotoinit = true; break;
                            }
                            s = null;  /* match failed */
                            break;
                        }
                        case '0'.charCodeAt(0): case '1'.charCodeAt(0): case '2'.charCodeAt(0): case '3'.charCodeAt(0):
                        case '4'.charCodeAt(0): case '5'.charCodeAt(0): case '6'.charCodeAt(0): case '7'.charCodeAt(0):
                        case '8'.charCodeAt(0): case '9'.charCodeAt(0): {  /* capture results (%0-%9)? */
                            s = match_capture(ms, s, ms.p[p + 1]);
                            if (s !== null) {
                                p += 2; gotoinit = true;
                            }
                            break;
                        }
                        default: gotodefault = true;
                    }
                    break;
                }
                default: {  /* pattern class plus optional suffix */
                    gotodefault = false;
                    let ep = classend(ms, p);  /* points to optional suffix */
                    /* does not match at least once? */
                    if (!singlematch(ms, s, p, ep)) {
                        if (ms.p[ep] === '*'.charCodeAt(0) || ms.p[ep] === '?'.charCodeAt(0) || ms.p[ep] === '-'.charCodeAt(0)) {  /* accept empty? */
                            p = ep + 1; gotoinit = true; break;
                        } else  /* '+' or no suffix */
                            s = null;  /* fail */
                    } else {  /* matched once */
                        switch (ms.p[ep]) {  /* handle optional suffix */
                            case '?'.charCodeAt(0): {  /* optional */
                                let res;
                                if ((res = match(ms, s + 1, ep + 1)) !== null)
                                    s = res;
                                else {
                                    p = ep + 1; gotoinit = true;
                                }
                                break;
                            }
                            case '+'.charCodeAt(0):  /* 1 or more repetitions */
                                s++;  /* 1 match already done */
                                /* fall through */
                            case '*'.charCodeAt(0):  /* 0 or more repetitions */
                                s = max_expand(ms, s, p, ep);
                                break;
                            case '-'.charCodeAt(0):  /* 0 or more repetitions (minimum) */
                                s = min_expand(ms, s, p, ep);
                                break;
                            default:  /* no suffix */
                                s++; p = ep; gotoinit = true;
                        }
                    }
                    break;
                }
            }
        }
    }
    ms.matchdepth++;
    return s;
};

const push_onecapture = function(ms, i, s, e) {
    if (i >= ms.level) {
        if (i === 0)
            lua.lua_pushlstring(ms.L, ms.src.slice(s, e), e - s);  /* add whole match */
        else
            lauxlib.luaL_error(ms.L, lua.to_luastring("invalid capture index %%%d"), i + 1);
    } else {
        let l = ms.capture[i].len;
        if (l === CAP_UNFINISHED) lauxlib.luaL_error(ms.L, lua.to_luastring("unfinished capture", true));
        if (l === CAP_POSITION)
            lua.lua_pushinteger(ms.L, ms.capture[i].init - ms.src_init + 1);
        else
            lua.lua_pushlstring(ms.L, ms.src.slice(ms.capture[i].init), l);
    }
};

const push_captures = function(ms, s, e) {
    let nlevels = ms.level === 0 && ms.src.slice(s) ? 1 : ms.level;
    lauxlib.luaL_checkstack(ms.L, nlevels, lua.to_luastring("too many catpures", true));
    for (let i = 0; i < nlevels; i++)
        push_onecapture(ms, i, s, e);
    return nlevels;  /* number of strings pushed */
};

const nospecials = function(p, l) {
    let upto = 0;
    do {
        let special = false;
        let supto = p.slice(upto);
        for (let i = 0; i < SPECIALS.length; i++) {
            if (supto.indexOf(SPECIALS[i]) > -1) {
                special = true;
                break;
            }
        }

        if (special)
            return false;  /* pattern has a special character */
        upto = upto + 1;  /* may have more after \0 */
    } while (upto <= l);
    return true;  /* no special chars found */
};

const prepstate = function(ms, L, s, ls, p, lp) {
    ms.L = L;
    ms.matchdepth = MAXCCALLS;
    ms.src = s;
    ms.src_init = 0;
    ms.src_end = ls;
    ms.p = p;
    ms.p_end = lp;
};

const reprepstate = function(ms) {
    ms.level = 0;
    assert(ms.matchdepth === MAXCCALLS);
};

const find_subarray = function(arr, subarr, from_index) {
    var i = from_index >>> 0,
        sl = subarr.length,
        l = arr.length + 1 - sl;

    loop: for (; i < l; i++) {
        for (let j = 0; j < sl; j++)
            if (arr[i+j] !== subarr[j])
                continue loop;
        return i;
    }
    return -1;
};

const str_find_aux = function(L, find) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let p = lauxlib.luaL_checkstring(L, 2);
    let ls = s.length;
    let lp = p.length;
    let init = posrelat(lauxlib.luaL_optinteger(L, 3, 1), ls);
    if (init < 1) init = 1;
    else if (init > ls + 1) {  /* start after string's end? */
        lua.lua_pushnil(L);  /* cannot find anything */
        return 1;
    }
    /* explicit request or no special characters? */
    if (find && (lua.lua_toboolean(L, 4) || nospecials(p, lp))) {
        /* do a plain search */
        let f = find_subarray(s.slice(init - 1), p, 0);
        if (f > -1) {
            lua.lua_pushinteger(L, init + f);
            lua.lua_pushinteger(L, init + f + lp - 1);
            return 2;
        }
    } else {
        let ms = new MatchState(L);
        let s1 = init - 1;
        let anchor = p[0] === '^'.charCodeAt(0);
        if (anchor) {
            p = p.slice(1); lp--;  /* skip anchor character */
        }
        prepstate(ms, L, s, ls, p, lp);
        do {
            let res;
            reprepstate(ms);
            if ((res = match(ms, s1, 0)) !== null) {
                if (find) {
                    lua.lua_pushinteger(L, s1 + 1);  /* start */
                    lua.lua_pushinteger(L, res);   /* end */
                    return push_captures(ms, null, 0) + 2;
                } else
                    return push_captures(ms, s1, res);
            }
        } while (s1++ < ms.src_end && !anchor);
    }
    lua.lua_pushnil(L);  /* not found */
    return 1;
};

const str_find = function(L) {
    return str_find_aux(L, 1);
};

const str_match = function(L) {
    return str_find_aux(L, 0);
};

/* state for 'gmatch' */
class GMatchState {
    constructor() {
        this.src = NaN;  /* current position */
        this.p = NaN;  /* pattern */
        this.lastmatch = NaN;  /* end of last match */
        this.ms = new MatchState();  /* match state */
    }
}

const gmatch_aux = function(L) {
    let gm = lua.lua_touserdata(L, lua.lua_upvalueindex(3));
    gm.ms.L = L;
    for (let src = gm.src; src <= gm.ms.src_end; src++) {
        reprepstate(gm.ms);
        let e;
        if ((e = match(gm.ms, src, gm.p)) !== null && e !== gm.lastmatch) {
            gm.src = gm.lastmatch = e;
            return push_captures(gm.ms, src, e);
        }
    }
    return 0;  /* not found */
};

const str_gmatch = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let p = lauxlib.luaL_checkstring(L, 2);
    let ls = s.length;
    let lp = p.length;
    lua.lua_settop(L, 2);  /* keep them on closure to avoid being collected */
    let gm = new GMatchState();
    lua.lua_pushlightuserdata(L, gm);
    prepstate(gm.ms, L, s, ls, p, lp);
    gm.src = 0;
    gm.p = 0;
    gm.lastmatch = null;
    lua.lua_pushcclosure(L, gmatch_aux, 3);
    return 1;
};

const add_s = function(ms, b, s, e) {
    let L = ms.L;
    let news = lua.lua_tostring(L, 3);
    let l = news.length;
    for (let i = 0; i < l; i++) {
        if (news[i] !== L_ESC)
            lauxlib.luaL_addchar(b, news[i]);
        else {
            i++;  /* skip ESC */
            if (!isdigit(news[i])) {
                if (news[i] !== L_ESC)
                    lauxlib.luaL_error(L, lua.to_luastring("invalid use of '%c' in replacement string"), L_ESC);
                lauxlib.luaL_addchar(b, news[i]);
            } else if (news[i] === '0'.charCodeAt(0))
                lauxlib.luaL_addlstring(b, ms.src.slice(s), e - s);
            else {
                push_onecapture(ms, news[i] - '1'.charCodeAt(0), s, e);
                lauxlib.luaL_tolstring(L, -1);
                lua.lua_remove(L, -2);  /* remove original value */
                lauxlib.luaL_addvalue(b);  /* add capture to accumulated result */
            }
        }
    }
};

const add_value = function(ms, b, s, e, tr) {
    let L = ms.L;
    switch (tr) {
        case lua.LUA_TFUNCTION: {
            lua.lua_pushvalue(L, 3);
            let n = push_captures(ms, s, e);
            lua.lua_call(L, n, 1);
            break;
        }
        case lua.LUA_TTABLE: {
            push_onecapture(ms, 0, s, e);
            lua.lua_gettable(L, 3);
            break;
        }
        default: {  /* LUA_TNUMBER or LUA_TSTRING */
            add_s(ms, b, s, e);
            return;
        }
    }
    if (!lua.lua_toboolean(L, -1)) {  /* nil or false? */
        lua.lua_pop(L, 1);
        lua.lua_pushlstring(L, ms.src.slice(s, e), e - s);  /* keep original text */
    } else if (!lua.lua_isstring(L, -1))
        lauxlib.luaL_error(L, lua.to_luastring("invalid replacement value (a %s)"), lauxlib.luaL_typename(L, -1));
        lauxlib.luaL_addvalue(b);  /* add result to accumulator */
};

const str_gsub = function(L) {
    let src = lauxlib.luaL_checkstring(L, 1);  /* subject */
    let srcl = src.length;
    let p = lauxlib.luaL_checkstring(L, 2);  /* pattern */
    let lp = p.length;
    let lastmatch = null;  /* end of last match */
    let tr = lua.lua_type(L, 3);  /* replacement type */
    let max_s = lauxlib.luaL_optinteger(L, 4, srcl + 1);  /* max replacements */
    let anchor = p[0] === '^'.charCodeAt(0);
    let n = 0;  /* replacement count */
    let ms = new MatchState(L);
    let b = new lauxlib.luaL_Buffer();
    lauxlib.luaL_argcheck(L, tr === lua.LUA_TNUMBER || tr === lua.LUA_TSTRING || tr === lua.LUA_TFUNCTION || tr === lua.LUA_TTABLE, 3,
        lua.to_luastring("string/function/table expected", true));
    lauxlib.luaL_buffinit(L, b);
    if (anchor) {
        p = p.slice(1); lp--;  /* skip anchor character */
    }
    prepstate(ms, L, src, srcl, p, lp);
    src = 0; p = 0;
    while (n < max_s) {
        let e;
        reprepstate(ms);
        if ((e = match(ms, src, p)) !== null && e !== lastmatch) {  /* match? */
            n++;
            add_value(ms, b, src, e, tr);  /* add replacement to buffer */
            src = lastmatch = e;
        } else if (src < ms.src_end)  /* otherwise, skip one character */
            lauxlib.luaL_addchar(b, ms.src[src++]);
        else break;  /* end of subject */
        if (anchor) break;
    }
    lauxlib.luaL_addlstring(b, ms.src.slice(src), ms.src_end - src);
    lauxlib.luaL_pushresult(b);
    lua.lua_pushinteger(L, n);  /* number of substitutions */
    return 2;
};

const strlib = {
    "byte":     str_byte,
    "char":     str_char,
    "dump":     str_dump,
    "find":     str_find,
    "format":   str_format,
    "gmatch":   str_gmatch,
    "gsub":     str_gsub,
    "len":      str_len,
    "lower":    str_lower,
    "match":    str_match,
    "pack":     str_pack,
    "packsize": str_packsize,
    "rep":      str_rep,
    "reverse":  str_reverse,
    "sub":      str_sub,
    "unpack":   str_unpack,
    "upper":    str_upper
};

const createmetatable = function(L) {
    lua.lua_createtable(L, 0, 1);  /* table to be metatable for strings */
    lua.lua_pushliteral(L, "");  /* dummy string */
    lua.lua_pushvalue(L, -2);  /* copy table */
    lua.lua_setmetatable(L, -2);  /* set table as metatable for strings */
    lua.lua_pop(L, 1);  /* pop dummy string */
    lua.lua_pushvalue(L, -2);  /* get string library */
    lua.lua_setfield(L, -2, lua.to_luastring("__index", true));  /* metatable.__index = string */
    lua.lua_pop(L, 1);  /* pop metatable */
};

const luaopen_string = function(L) {
    lauxlib.luaL_newlib(L, strlib);
    createmetatable(L);
    return 1;
};

module.exports.luaopen_string = luaopen_string;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert  = __webpack_require__(0);

const lua     = __webpack_require__(2);
const lauxlib = __webpack_require__(6);
const llimit  = __webpack_require__(5);


/*
** Operations that an object must define to mimic a table
** (some functions only need some of them)
*/
const TAB_R  = 1;               /* read */
const TAB_W  = 2;               /* write */
const TAB_L  = 4;               /* length */
const TAB_RW = (TAB_R | TAB_W); /* read/write */

const checkfield = function(L, key, n) {
    lua.lua_pushstring(L, key);
    return lua.lua_rawget(L, -n) !== lua.LUA_TNIL;
};

/*
** Check that 'arg' either is a table or can behave like one (that is,
** has a metatable with the required metamethods)
*/
const checktab = function(L, arg, what) {
    if (lua.lua_type(L, arg) !== lua.LUA_TTABLE) {  /* is it not a table? */
        let n = 1;
        if (lua.lua_getmetatable(L, arg) &&  /* must have metatable */
            (!(what & TAB_R) || checkfield(L, lua.to_luastring("__index", true), ++n)) &&
            (!(what & TAB_W) || checkfield(L, lua.to_luastring("__newindex", true), ++n)) &&
            (!(what & TAB_L) || checkfield(L, lua.to_luastring("__len", true), ++n))) {
            lua.lua_pop(L, n);  /* pop metatable and tested metamethods */
        }
        else
            lauxlib.luaL_checktype(L, arg, lua.LUA_TTABLE);  /* force an error */
    }
};

const aux_getn = function(L, n, w) {
    checktab(L, n, w | TAB_L);
    return lauxlib.luaL_len(L, n);
};

const addfield = function(L, b, i) {
    lua.lua_geti(L, 1, i);
    if (!lua.lua_isstring(L, -1))
        lauxlib.luaL_error(L, lua.to_luastring("invalid value (%s) at index %d in table for 'concat'"),
            lauxlib.luaL_typename(L, -1), i);

    lauxlib.luaL_addvalue(b);
};

const tinsert = function(L) {
    let e = aux_getn(L, 1, TAB_RW) + 1;  /* first empty element */
    let pos;
    switch (lua.lua_gettop(L)) {
        case 2:
            pos = e;
            break;
        case 3: {
            pos = lauxlib.luaL_checkinteger(L, 2);  /* 2nd argument is the position */
            lauxlib.luaL_argcheck(L, 1 <= pos && pos <= e, 2, lua.to_luastring("position out of bounds", true));
            for (let i = e; i > pos; i--) {  /* move up elements */
                lua.lua_geti(L, 1, i - 1);
                lua.lua_seti(L, 1, i);  /* t[i] = t[i - 1] */
            }
            break;
        }
        default: {
            return lauxlib.luaL_error(L, lua.to_luastring("wrong number of arguments to 'insert'", true));
        }
    }

    lua.lua_seti(L, 1, pos);  /* t[pos] = v */
    return 0;
};

const tremove = function(L) {
    let size = aux_getn(L, 1, TAB_RW);
    let pos = lauxlib.luaL_optinteger(L, 2, size);
    if (pos !== size)  /* validate 'pos' if given */
        lauxlib.luaL_argcheck(L, 1 <= pos && pos <= size + 1, 1, lua.to_luastring("position out of bounds", true));
    lua.lua_geti(L, 1, pos);  /* result = t[pos] */
    for (; pos < size; pos++) {
        lua.lua_geti(L, 1, pos + 1);
        lua.lua_seti(L, 1, pos);  /* t[pos] = t[pos + 1] */
    }
    lua.lua_pushnil(L);
    lua.lua_seti(L, 1, pos);  /* t[pos] = nil */
    return 1;
};

/*
** Copy elements (1[f], ..., 1[e]) into (tt[t], tt[t+1], ...). Whenever
** possible, copy in increasing order, which is better for rehashing.
** "possible" means destination after original range, or smaller
** than origin, or copying to another table.
*/
const tmove = function(L) {
    let f = lauxlib.luaL_checkinteger(L, 2);
    let e = lauxlib.luaL_checkinteger(L, 3);
    let t = lauxlib.luaL_checkinteger(L, 4);
    let tt = !lua.lua_isnoneornil(L, 5) ? 5 : 1;  /* destination table */
    checktab(L, 1, TAB_R);
    checktab(L, tt, TAB_W);
    if (e >= f) {  /* otherwise, nothing to move */
        lauxlib.luaL_argcheck(L, f > 0 || e < llimit.LUA_MAXINTEGER + f, 3, lua.to_luastring("too many elements to move", true));
        let n = e - f + 1;  /* number of elements to move */
        lauxlib.luaL_argcheck(L, t <= llimit.LUA_MAXINTEGER - n + 1, 4, lua.to_luastring("destination wrap around", true));

        if (t > e || t <= f || (tt !== 1 && lua.lua_compare(L, 1, tt, lua.LUA_OPEQ) !== 1)) {
            for (let i = 0; i < n; i++) {
                lua.lua_geti(L, 1, f + i);
                lua.lua_seti(L, tt, t + i);
            }
        } else {
            for (let i = n - 1; i >= 0; i--) {
                lua.lua_geti(L, 1, f + i);
                lua.lua_seti(L, tt, t + i);
            }
        }
    }

    lua.lua_pushvalue(L, tt);  /* return destination table */
    return 1;
};

const tconcat = function(L) {
    let last = aux_getn(L, 1, TAB_R);
    let sep = lauxlib.luaL_optlstring(L, 2, []);
    let i = lauxlib.luaL_optinteger(L, 3, 1);
    last = lauxlib.luaL_optinteger(L, 4, last);

    let b = new lauxlib.luaL_Buffer();
    lauxlib.luaL_buffinit(L, b);

    for (; i < last; i++) {
        addfield(L, b, i);
        lauxlib.luaL_addlstring(b, sep);
    }

    if (i === last)
        addfield(L, b, i);

    lauxlib.luaL_pushresult(b);

    return 1;
};

const pack = function(L) {
    let n = lua.lua_gettop(L);  /* number of elements to pack */
    lua.lua_createtable(L, n, 1);  /* create result table */
    lua.lua_insert(L, 1);  /* put it at index 1 */
    for (let i = n; i >= 1; i--)  /* assign elements */
        lua.lua_seti(L, 1, i);
    lua.lua_pushinteger(L, n);
    lua.lua_setfield(L, 1, ["n".charCodeAt(0)]);  /* t.n = number of elements */
    return 1;  /* return table */
};

const unpack = function(L) {
    let i = lauxlib.luaL_optinteger(L, 2, 1);
    let e = lauxlib.luaL_opt(L, lauxlib.luaL_checkinteger, 3, lauxlib.luaL_len(L, 1));
    if (i > e) return 0;  /* empty range */
    let n = e - i;  /* number of elements minus 1 (avoid overflows) */
    if (n >= llimit.MAX_INT || !lua.lua_checkstack(L, ++n))
        return lauxlib.luaL_error(L, lua.to_luastring("too many results to unpack", true));
    for (; i < e; i++)  /* push arg[i..e - 1] (to avoid overflows) */
        lua.lua_geti(L, 1, i);
    lua.lua_geti(L, 1, e);  /* push last element */
    return n;
};

const l_randomizePivot = function() {
    return Math.floor(Math.random()*1<<32);
};

const RANLIMIT = 100;

const set2 = function(L, i, j) {
    lua.lua_seti(L, 1, i);
    lua.lua_seti(L, 1, j);
};

const sort_comp = function(L, a, b) {
    if (lua.lua_isnil(L, 2))  /* no function? */
        return lua.lua_compare(L, a, b, lua.LUA_OPLT);  /* a < b */
    else {  /* function */
        lua.lua_pushvalue(L, 2);    /* push function */
        lua.lua_pushvalue(L, a-1);  /* -1 to compensate function */
        lua.lua_pushvalue(L, b-2);  /* -2 to compensate function and 'a' */
        lua.lua_call(L, 2, 1);      /* call function */
        let res = lua.lua_toboolean(L, -1);  /* get result */
        lua.lua_pop(L, 1);          /* pop result */
        return res;
    }
};

const partition = function(L, lo, up) {
    let i = lo;  /* will be incremented before first use */
    let j = up - 1;  /* will be decremented before first use */
    /* loop invariant: a[lo .. i] <= P <= a[j .. up] */
    for (;;) {
        /* next loop: repeat ++i while a[i] < P */
        while (lua.lua_geti(L, 1, ++i), sort_comp(L, -1, -2)) {
            if (i == up - 1)  /* a[i] < P  but a[up - 1] == P  ?? */
                lauxlib.luaL_error(L, lua.to_luastring("invalid order function for sorting"));
            lua.lua_pop(L, 1);  /* remove a[i] */
        }
        /* after the loop, a[i] >= P and a[lo .. i - 1] < P */
        /* next loop: repeat --j while P < a[j] */
        while (lua.lua_geti(L, 1, --j), sort_comp(L, -3, -1)) {
            if (j < i)  /* j < i  but  a[j] > P ?? */
                lauxlib.luaL_error(L, lua.to_luastring("invalid order function for sorting"));
            lua.lua_pop(L, 1);  /* remove a[j] */
        }
        /* after the loop, a[j] <= P and a[j + 1 .. up] >= P */
        if (j < i) {  /* no elements out of place? */
            /* a[lo .. i - 1] <= P <= a[j + 1 .. i .. up] */
            lua.lua_pop(L, 1);  /* pop a[j] */
            /* swap pivot (a[up - 1]) with a[i] to satisfy pos-condition */
            set2(L, up - 1, i);
            return i;
        }
        /* otherwise, swap a[i] - a[j] to restore invariant and repeat */
        set2(L, i, j);
    }
};

const choosePivot = function(lo, up, rnd) {
    let r4 = Math.floor((up - lo) / 4);  /* range/4 */
    let p = rnd % (r4 * 2) + (lo + r4);
    assert(lo + r4 <= p && p <= up - r4);
    return p;
};

const auxsort = function(L, lo, up, rnd) {
    while (lo < up) {  /* loop for tail recursion */
        /* sort elements 'lo', 'p', and 'up' */
        lua.lua_geti(L, 1, lo);
        lua.lua_geti(L, 1, up);
        if (sort_comp(L, -1, -2))  /* a[up] < a[lo]? */
            set2(L, lo, up);  /* swap a[lo] - a[up] */
        else
            lua.lua_pop(L, 2);  /* remove both values */
        if (up - lo == 1)  /* only 2 elements? */
            return;  /* already sorted */
        let p;  /* Pivot index */
        if (up - lo < RANLIMIT || rnd === 0)  /* small interval or no randomize? */
            p = Math.floor((lo + up)/2);  /* middle element is a good pivot */
        else  /* for larger intervals, it is worth a random pivot */
            p = choosePivot(lo, up, rnd);
        lua.lua_geti(L, 1, p);
        lua.lua_geti(L, 1, lo);
        if (sort_comp(L, -2, -1))  /* a[p] < a[lo]? */
            set2(L, p, lo);  /* swap a[p] - a[lo] */
        else {
            lua.lua_pop(L, 1);  /* remove a[lo] */
            lua.lua_geti(L, 1, up);
            if (sort_comp(L, -1, -2))  /* a[up] < a[p]? */
                set2(L, p, up);  /* swap a[up] - a[p] */
            else
                lua.lua_pop(L, 2);
        }
        if (up - lo == 2)  /* only 3 elements? */
            return;  /* already sorted */
        lua.lua_geti(L, 1, p);  /* get middle element (Pivot) */
        lua.lua_pushvalue(L, -1);  /* push Pivot */
        lua.lua_geti(L, 1, up - 1);  /* push a[up - 1] */
        set2(L, p, up - 1);  /* swap Pivot (a[p]) with a[up - 1] */
        p = partition(L, lo, up);
        let n;
        /* a[lo .. p - 1] <= a[p] == P <= a[p + 1 .. up] */
        if (p - lo < up - p) {  /* lower interval is smaller? */
            auxsort(L, lo, p - 1, rnd);  /* call recursively for lower interval */
            n = p - lo;  /* size of smaller interval */
            lo = p + 1;  /* tail call for [p + 1 .. up] (upper interval) */
        } else {
            auxsort(L, p + 1, up, rnd);  /* call recursively for upper interval */
            n = up - p;  /* size of smaller interval */
            up = p - 1;  /* tail call for [lo .. p - 1]  (lower interval) */
        }
        if ((up - lo) / 128 > n) /* partition too imbalanced? */
            rnd = l_randomizePivot();  /* try a new randomization */
    }  /* tail call auxsort(L, lo, up, rnd) */
};

const sort = function(L) {
    let n = aux_getn(L, 1, TAB_RW);
    if (n > 1) {  /* non-trivial interval? */
        lauxlib.luaL_argcheck(L, n < llimit.MAX_INT, 1, lua.to_luastring("array too big", true));
        if (!lua.lua_isnoneornil(L, 2))  /* is there a 2nd argument? */
            lauxlib.luaL_checktype(L, 2, lua.LUA_TFUNCTION);  /* must be a function */
        lua.lua_settop(L, 2);  /* make sure there are two arguments */
        auxsort(L, 1, n, 0);
    }
    return 0;
};

const tab_funcs = {
    "concat": tconcat,
    "insert": tinsert,
    "move":   tmove,
    "pack":   pack,
    "remove": tremove,
    "sort":   sort,
    "unpack": unpack
};

const luaopen_table = function(L) {
    lauxlib.luaL_newlib(L, tab_funcs);
    return 1;
};

module.exports.luaopen_table = luaopen_table;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const lua     = __webpack_require__(2);
const lauxlib = __webpack_require__(6);
const llimit  = __webpack_require__(5);

const MAXUNICODE = 0x10FFFF;

const iscont = function(p) {
    let c = p & 0xC0;
    return c === 0x80;
};

/* translate a relative string position: negative means back from end */
const u_posrelat = function(pos, len) {
    if (pos >= 0) return pos;
    else if (0 - pos > len) return 0;
    else return len + pos + 1;
};

/*
** Decode one UTF-8 sequence, returning NULL if byte sequence is invalid.
*/
const limits = [0xFF, 0x7F, 0x7FF, 0xFFFF];
const utf8_decode = function(s, pos) {
    let c = s[pos];
    let res = 0;  /* final result */
    if (c < 0x80)  /* ascii? */
        res = c;
    else {
        let count = 0;  /* to count number of continuation bytes */
        while (c & 0x40) {  /* still have continuation bytes? */
            let cc = s[pos + (++count)];  /* read next byte */
            if ((cc & 0xC0) !== 0x80)  /* not a continuation byte? */
                return null;  /* invalid byte sequence */
            res = (res << 6) | (cc & 0x3F);  /* add lower 6 bits from cont. byte */
            c <<= 1;  /* to test next bit */
        }
        res |= ((c & 0x7F) << (count * 5));  /* add first byte */
        if (count > 3 || res > MAXUNICODE || res <= limits[count])
            return null;  /* invalid byte sequence */
        pos += count;  /* skip continuation bytes read */
    }

    return {
        code: res,
        pos: pos + 1
    };
};

/*
** utf8len(s [, i [, j]]) --> number of characters that start in the
** range [i,j], or nil + current position if 's' is not well formed in
** that interval
*/
const utflen = function(L) {
    let n = 0;
    let s = lauxlib.luaL_checkstring(L, 1);
    let len = s.length;
    let posi = u_posrelat(lauxlib.luaL_optinteger(L, 2, 1), len);
    let posj = u_posrelat(lauxlib.luaL_optinteger(L, 3, -1), len);

    lauxlib.luaL_argcheck(L, 1 <= posi && --posi <= len, 2, lua.to_luastring("initial position out of string"));
    lauxlib.luaL_argcheck(L, --posj < len, 3, lua.to_luastring("final position out of string"));

    while (posi <= posj) {
        let dec = utf8_decode(s, posi);
        if (dec === null) { /* conversion error? */
            lua.lua_pushnil(L);  /* return nil ... */
            lua.lua_pushinteger(L, posi + 1);  /* ... and current position */
            return 2;
        }
        posi = dec.pos;
        n++;
    }
    lua.lua_pushinteger(L, n);
    return 1;
};

const pushutfchar = function(L, arg) {
    let code = lauxlib.luaL_checkinteger(L, arg);
    lauxlib.luaL_argcheck(L, 0 <= code && code <= MAXUNICODE, arg, lua.to_luastring("value out of range", true));
    lua.lua_pushstring(L, lua.to_luastring(String.fromCodePoint(code)));
};

/*
** utfchar(n1, n2, ...)  -> char(n1)..char(n2)...
*/
const utfchar = function(L) {
    let n = lua.lua_gettop(L);  /* number of arguments */
    if (n === 1)  /* optimize common case of single char */
        pushutfchar(L, 1);
    else {
        let b = new lauxlib.luaL_Buffer();
        lauxlib.luaL_buffinit(L, b);
        for (let i = 1; i <= n; i++) {
            pushutfchar(L, i);
            lauxlib.luaL_addvalue(b);
        }
        lauxlib.luaL_pushresult(b);
    }
    return 1;
};

/*
** offset(s, n, [i])  -> index where n-th character counting from
**   position 'i' starts; 0 means character at 'i'.
*/
const byteoffset = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let n = lauxlib.luaL_checkinteger(L, 2);
    let posi = n >= 0 ? 1 : s.length + 1;
    posi = u_posrelat(lauxlib.luaL_optinteger(L, 3, posi), s.length);

    lauxlib.luaL_argcheck(L, 1 <= posi && --posi <= s.length, 3, lua.to_luastring("position out of range", true));

    if (n === 0) {
        /* find beginning of current byte sequence */
        while (posi > 0 && iscont(s[posi])) posi--;
    } else {
        if (iscont(s[posi]))
            lauxlib.luaL_error(L, lua.to_luastring("initial position is a continuation byte", true));

        if (n < 0) {
            while (n < 0 && posi > 0) {  /* move back */
                do {  /* find beginning of previous character */
                    posi--;
                } while (posi > 0 && iscont(s[posi]));
                n++;
            }
        } else {
            n--;  /* do not move for 1st character */
            while (n > 0 && posi < s.length) {
                do {  /* find beginning of next character */
                    posi++;
                } while (iscont(s[posi]));  /* (cannot pass final '\0') */
                n--;
            }
        }
    }

    if (n === 0)  /* did it find given character? */
        lua.lua_pushinteger(L, posi + 1);
    else  /* no such character */
        lua.lua_pushnil(L);

    return 1;
};

/*
** codepoint(s, [i, [j]])  -> returns codepoints for all characters
** that start in the range [i,j]
*/
const codepoint = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let posi = u_posrelat(lauxlib.luaL_optinteger(L, 2, 1), s.length);
    let pose = u_posrelat(lauxlib.luaL_optinteger(L, 3, posi), s.length);

    lauxlib.luaL_argcheck(L, posi >= 1, 2, lua.to_luastring("out of range", true));
    lauxlib.luaL_argcheck(L, pose <= s.length, 3, lua.to_luastring("out of range", true));

    if (posi > pose) return 0;  /* empty interval; return no values */
    if (pose - posi >= llimit.MAX_INT)
        return lauxlib.luaL_error(L, lua.to_luastring("string slice too long", true));
    let n = (pose - posi) + 1;
    lauxlib.luaL_checkstack(L, n, lua.to_luastring("string slice too long", true));
    n = 0;
    for (posi -= 1; posi < pose;) {
        let dec = utf8_decode(s, posi);
        if (dec === null)
            return lauxlib.luaL_error(L, lua.to_luastring("invalid UTF-8 code", true));
        lua.lua_pushinteger(L, dec.code);
        posi = dec.pos;
        n++;
    }
    return n;
};

const iter_aux = function(L) {
    let s = lauxlib.luaL_checkstring(L, 1);
    let len = s.length;
    let n = lua.lua_tointeger(L, 2) - 1;

    if (n < 0)  /* first iteration? */
        n = 0;  /* start from here */
    else if (n < len) {
        n++;  /* skip current byte */
        while (iscont(s[n])) n++;  /* and its continuations */
    }

    if (n >= len)
        return 0;  /* no more codepoints */
    else {
        let dec = utf8_decode(s, n);
        if (dec === null || iscont(s[dec.pos]))
            return lauxlib.luaL_error(L, lua.to_luastring("invalid UTF-8 code", true));
        lua.lua_pushinteger(L, n + 1);
        lua.lua_pushinteger(L, dec.code);
        return 2;
    }
};

const iter_codes = function(L) {
    lauxlib.luaL_checkstring(L, 1);
    lua.lua_pushcfunction(L, iter_aux);
    lua.lua_pushvalue(L, 1);
    lua.lua_pushinteger(L, 0);
    return 3;
};

const funcs = {
    "char":      utfchar,
    "codepoint": codepoint,
    "codes":     iter_codes,
    "len":       utflen,
    "offset":    byteoffset
};

/* pattern to match a single UTF-8 character */
const UTF8PATT = [ 91, 0, 45, 127, 194, 45, 244, 93, 91, 128, 45, 191, 93, 42 ];

const luaopen_utf8 = function(L) {
    lauxlib.luaL_newlib(L, funcs);
    lua.lua_pushstring(L, UTF8PATT);
    lua.lua_setfield(L, -2, lua.to_luastring("charpattern", true));
    return 1;
};

module.exports.luaopen_utf8 = luaopen_utf8;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert  = __webpack_require__(0);

const lua     = __webpack_require__(2);
const lauxlib = __webpack_require__(6);

/*
** If L1 != L, L1 can be in any state, and therefore there are no
** guarantees about its stack space; any push in L1 must be
** checked.
*/
const checkstack = function(L, L1, n) {
    if (L !== L1 && !lua.lua_checkstack(L1, n))
        lauxlib.luaL_error(L, lua.to_luastring("stack overflow", true));
};

const db_getregistry = function(L) {
    lua.lua_pushvalue(L, lua.LUA_REGISTRYINDEX);
    return 1;
};

const db_getmetatable = function(L) {
    lauxlib.luaL_checkany(L, 1);
    if (!lua.lua_getmetatable(L, 1)) {
        lua.lua_pushnil(L);  /* no metatable */
    }
    return 1;
};

const db_setmetatable = function(L) {
    const t = lua.lua_type(L, 2);
    lauxlib.luaL_argcheck(L, t == lua.LUA_TNIL || t == lua.LUA_TTABLE, 2, lua.to_luastring("nil or table expected", true));
    lua.lua_settop(L, 2);
    lua.lua_setmetatable(L, 1);
    return 1;  /* return 1st argument */
};

const db_getuservalue = function(L) {
    if (lua.lua_type(L, 1) !== lua.LUA_TUSERDATA)
        lua.lua_pushnil(L);
    else
        lua.lua_getuservalue(L, 1);
    return 1;
};


const db_setuservalue = function(L) {
   lauxlib.luaL_checktype(L, 1, lua.LUA_TUSERDATA);
   lauxlib.luaL_checkany(L, 2);
   lua.lua_settop(L, 2);
   lua.lua_setuservalue(L, 1);
   return 1;
};

/*
** Auxiliary function used by several library functions: check for
** an optional thread as function's first argument and set 'arg' with
** 1 if this argument is present (so that functions can skip it to
** access their other arguments)
*/
const getthread = function(L) {
    if (lua.lua_isthread(L, 1)) {
        return {
            arg: 1,
            thread: lua.lua_tothread(L, 1)
        };
    } else {
        return {
            arg: 0,
            thread: L
        };  /* function will operate over current thread */
    }
};

/*
** Variations of 'lua_settable', used by 'db_getinfo' to put results
** from 'lua_getinfo' into result table. Key is always a string;
** value can be a string, an int, or a boolean.
*/
const settabss = function(L, k, v) {
    lua.lua_pushstring(L, v);
    lua.lua_setfield(L, -2, k);
};

const settabsi = function(L, k, v) {
    lua.lua_pushinteger(L, v);
    lua.lua_setfield(L, -2, k);
};

const settabsb = function(L, k, v) {
    lua.lua_pushboolean(L, v);
    lua.lua_setfield(L, -2, k);
};


/*
** In function 'db_getinfo', the call to 'lua_getinfo' may push
** results on the stack; later it creates the result table to put
** these objects. Function 'treatstackoption' puts the result from
** 'lua_getinfo' on top of the result table so that it can call
** 'lua_setfield'.
*/
const treatstackoption = function(L, L1, fname) {
    if (L == L1)
        lua.lua_rotate(L, -2, 1);  /* exchange object and table */
    else
        lua.lua_xmove(L1, L, 1);  /* move object to the "main" stack */
    lua.lua_setfield(L, -2, fname);  /* put object into table */
};

/*
** Calls 'lua_getinfo' and collects all results in a new table.
** L1 needs stack space for an optional input (function) plus
** two optional outputs (function and line table) from function
** 'lua_getinfo'.
*/
const db_getinfo = function(L) {
    let ar = new lua.lua_Debug();
    let thread = getthread(L);
    let arg = thread.arg;
    let L1 = thread.thread;
    let options = lauxlib.luaL_optstring(L, arg + 2, lua.to_luastring("flnStu", true));
    checkstack(L, L1, 3);
    if (lua.lua_isfunction(L, arg + 1)) {  /* info about a function? */
        options = lua.lua_pushfstring(L, lua.to_luastring(">%s"), options);  /* add '>' to 'options' */
        lua.lua_pushvalue(L, arg + 1);  /* move function to 'L1' stack */
        lua.lua_xmove(L, L1, 1);
    } else {  /* stack level */
        if (!lua.lua_getstack(L1, lauxlib.luaL_checkinteger(L, arg + 1), ar)) {
            lua.lua_pushnil(L);  /* level out of range */
            return 1;
        }
    }

    if (!lua.lua_getinfo(L1, options, ar))
        lauxlib.luaL_argerror(L, arg + 2, lua.to_luastring("invalid option", true));
    lua.lua_newtable(L);  /* table to collect results */
    if (options.indexOf('S'.charCodeAt(0)) > -1) {
        settabss(L, lua.to_luastring("source", true), ar.source);
        settabss(L, lua.to_luastring("short_src", true), ar.short_src);
        settabsi(L, lua.to_luastring("linedefined", true), ar.linedefined);
        settabsi(L, lua.to_luastring("lastlinedefined", true), ar.lastlinedefined);
        settabss(L, lua.to_luastring("what", true), ar.what);
    }
    if (options.indexOf('l'.charCodeAt(0)) > -1)
        settabsi(L, lua.to_luastring("currentline", true), ar.currentline);
    if (options.indexOf('u'.charCodeAt(0)) > -1) {
        settabsi(L, lua.to_luastring("nups", true), ar.nups);
        settabsi(L, lua.to_luastring("nparams", true), ar.nparams);
        settabsb(L, lua.to_luastring("isvararg", true), ar.isvararg);
    }
    if (options.indexOf('n'.charCodeAt(0)) > - 1) {
        settabss(L, lua.to_luastring("name", true), ar.name);
        settabss(L, lua.to_luastring("namewhat", true), ar.namewhat);
    }
    if (options.indexOf('t'.charCodeAt(0)) > - 1)
        settabsb(L, lua.to_luastring("istailcall", true), ar.istailcall);
    if (options.indexOf('L'.charCodeAt(0)) > - 1)
        treatstackoption(L, L1, lua.to_luastring("activelines", true));
    if (options.indexOf('f'.charCodeAt(0)) > - 1)
        treatstackoption(L, L1, lua.to_luastring("func", true));
    return 1;  /* return table */
};

const db_getlocal = function(L) {
    let thread = getthread(L);
    let L1 = thread.thread;
    let arg = thread.arg;
    let ar = new lua.lua_Debug();
    let nvar = lauxlib.luaL_checkinteger(L, arg + 2);  /* local-variable index */
    if (lua.lua_isfunction(L, arg + 1)) {
        lua.lua_pushvalue(L, arg + 1);  /* push function */
        lua.lua_pushstring(L, lua.lua_getlocal(L, null, nvar));  /* push local name */
        return 1;  /* return only name (there is no value) */
    } else {  /* stack-level argument */
        let level = lauxlib.luaL_checkinteger(L, arg + 1);
        if (!lua.lua_getstack(L1, level, ar))  /* out of range? */
            return lauxlib.luaL_argerror(L, arg+1, lua.to_luastring("level out of range", true));
        checkstack(L, L1, 1);
        let name = lua.lua_getlocal(L1, ar, nvar);
        if (name) {
            lua.lua_xmove(L1, L, 1);  /* move local value */
            lua.lua_pushstring(L, name);  /* push name */
            lua.lua_rotate(L, -2, 1);  /* re-order */
            return 2;
        }
        else {
            lua.lua_pushnil(L);  /* no name (nor value) */
            return 1;
        }
    }
};

const db_setlocal = function(L) {
    let thread = getthread(L);
    let L1 = thread.thread;
    let arg = thread.arg;
    let ar = new lua.lua_Debug();
    let level = lauxlib.luaL_checkinteger(L, arg + 1);
    let nvar = lauxlib.luaL_checkinteger(L, arg + 2);
    if (!lua.lua_getstack(L1, level, ar))  /* out of range? */
        return lauxlib.luaL_argerror(L, arg + 1, "level out of range");
    lauxlib.luaL_checkany(L, arg + 3);
    lua.lua_settop(L, arg + 3);
    checkstack(L, L1, 1);
    lua.lua_xmove(L, L1, 1);
    let name = lua.lua_setlocal(L1, ar, nvar);
    if (name === null)
        lua.lua_pop(L1, 1);  /* pop value (if not popped by 'lua_setlocal') */
    lua.lua_pushstring(L, name);
    return 1;
};

/*
** get (if 'get' is true) or set an upvalue from a closure
*/
const auxupvalue = function(L, get) {
    let n = lauxlib.luaL_checkinteger(L, 2);  /* upvalue index */
    lauxlib.luaL_checktype(L, 1, lua.LUA_TFUNCTION);  /* closure */
    let name = get ? lua.lua_getupvalue(L, 1, n) : lua.lua_setupvalue(L, 1, n);
    if (name === null) return 0;
    lua.lua_pushstring(L, name);
    lua.lua_insert(L, -(get+1));  /* no-op if get is false */
    return get + 1;
};


const db_getupvalue = function(L) {
    return auxupvalue(L, 1);
};

const db_setupvalue = function(L) {
    lauxlib.luaL_checkany(L, 3);
    return auxupvalue(L, 0);
};

/*
** Check whether a given upvalue from a given closure exists and
** returns its index
*/
const checkupval = function(L, argf, argnup) {
    let nup = lauxlib.luaL_checkinteger(L, argnup);  /* upvalue index */
    lauxlib.luaL_checktype(L, argf, lua.LUA_TFUNCTION);  /* closure */
    lauxlib.luaL_argcheck(L, (lua.lua_getupvalue(L, argf, nup) !== null), argnup, lua.to_luastring("invalid upvalue index", true));
    return nup;
};

const db_upvalueid = function(L) {
   let n = checkupval(L, 1, 2);
   lua.lua_pushlightuserdata(L, lua.lua_upvalueid(L, 1, n));
   return 1;
};

const db_upvaluejoin = function(L) {
    let n1 = checkupval(L, 1, 2);
    let n2 = checkupval(L, 3, 4);
    lauxlib.luaL_argcheck(L, !lua.lua_iscfunction(L, 1), 1, lua.to_luastring("Lua function expected", true));
    lauxlib.luaL_argcheck(L, !lua.lua_iscfunction(L, 3), 3, lua.to_luastring("Lua function expected", true));
    lua.lua_upvaluejoin(L, 1, n1, 3, n2);
    return 0;
};

/*
** The hook table at registry[HOOKKEY] maps threads to their current
** hook function. (We only need the unique address of 'HOOKKEY'.)
*/
const HOOKKEY = lua.to_luastring("__hooks__", true);

const hooknames = ["call", "return", "line", "count", "tail call"].map(e => lua.to_luastring(e));

/*
** Call hook function registered at hook table for the current
** thread (if there is one)
*/
const hookf = function(L, ar) {
    lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, HOOKKEY);
    lua.lua_pushthread(L);
    if (lua.lua_rawget(L, -2) === lua.LUA_TFUNCTION) {  /* is there a hook function? */
        lua.lua_pushstring(L, hooknames[ar.event]);  /* push event name */
        if (ar.currentline >= 0)
            lua.lua_pushinteger(L, ar.currentline);  /* push current line */
        else lua.lua_pushnil(L);
        assert(lua.lua_getinfo(L, ["l".charCodeAt(0), "S".charCodeAt(0)], ar));
        lua.lua_call(L, 2, 0);  /* call hook function */
    }
};

/*
** Convert a string mask (for 'sethook') into a bit mask
*/
const makemask = function(smask, count) {
    let mask = 0;
    if (smask.indexOf("c".charCodeAt(0)) > -1) mask |= lua.LUA_MASKCALL;
    if (smask.indexOf("r".charCodeAt(0)) > -1) mask |= lua.LUA_MASKRET;
    if (smask.indexOf("l".charCodeAt(0)) > -1) mask |= lua.LUA_MASKLINE;
    if (count > 0) mask |= lua.LUA_MASKCOUNT;
    return mask;
};

/*
** Convert a bit mask (for 'gethook') into a string mask
*/
const unmakemask = function(mask, smask) {
    let i = 0;
    if (mask & lua.LUA_MASKCALL) smask[i++] = "c".charCodeAt(0);
    if (mask & lua.LUA_MASKRET) smask[i++] = "r".charCodeAt(0);
    if (mask & lua.LUA_MASKLINE) smask[i++] = "l".charCodeAt(0);
    return smask;
};

const db_sethook = function(L) {
    let mask, count, func;
    let thread = getthread(L);
    let L1 = thread.thread;
    let arg = thread.arg;
    if (lua.lua_isnoneornil(L, arg+1)) {  /* no hook? */
        lua.lua_settop(L, arg+1);
        func = null; mask = 0; count = 0;  /* turn off hooks */
    }
    else {
        const smask = lauxlib.luaL_checkstring(L, arg + 2);
        lauxlib.luaL_checktype(L, arg+1, lua.LUA_TFUNCTION);
        count = lauxlib.luaL_optinteger(L, arg + 3, 0);
        func = hookf; mask = makemask(smask, count);
    }
    if (lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, HOOKKEY) === lua.LUA_TNIL) {
        lua.lua_createtable(L, 0, 2);  /* create a hook table */
        lua.lua_pushvalue(L, -1);
        lua.lua_rawsetp(L, lua.LUA_REGISTRYINDEX, HOOKKEY);  /* set it in position */
        lua.lua_pushstring(L, ["k".charCodeAt(0)]);
        lua.lua_setfield(L, -2, lua.to_luastring("__mode", true));  /** hooktable.__mode = "k" */
        lua.lua_pushvalue(L, -1);
        lua.lua_setmetatable(L, -2);  /* setmetatable(hooktable) = hooktable */
    }
    checkstack(L, L1, 1);
    lua.lua_pushthread(L1); lua.lua_xmove(L1, L, 1);  /* key (thread) */
    lua.lua_pushvalue(L, arg + 1);  /* value (hook function) */
    lua.lua_rawset(L, -3);  /* hooktable[L1] = new Lua hook */
    lua.lua_sethook(L1, func, mask, count);
    return 0;
};

const db_gethook = function(L) {
    let thread = getthread(L);
    let L1 = thread.thread;
    let buff = [];
    let mask = lua.lua_gethookmask(L1);
    let hook = lua.lua_gethook(L1);
    if (hook === null)  /* no hook? */
        lua.lua_pushnil(L);
    else if (hook !== hookf)  /* external hook? */
        lua.lua_pushliteral(L, "external hook");
    else {  /* hook table must exist */
        lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, HOOKKEY);
        checkstack(L, L1, 1);
        lua.lua_pushthread(L1); lua.lua_xmove(L1, L, 1);
        lua.lua_rawget(L, -2);   /* 1st result = hooktable[L1] */
        lua.lua_remove(L, -2);  /* remove hook table */
    }
    lua.lua_pushstring(L, unmakemask(mask, buff));  /* 2nd result = mask */
    lua.lua_pushinteger(L, lua.lua_gethookcount(L1));  /* 3rd result = count */
    return 3;
};

const db_traceback = function(L) {
    let thread = getthread(L);
    let L1 = thread.thread;
    let arg = thread.arg;
    let msg = lua.lua_tostring(L, arg + 1);
    if (msg === null && !lua.lua_isnoneornil(L, arg + 1))  /* non-string 'msg'? */
        lua.lua_pushvalue(L, arg + 1);  /* return it untouched */
    else {
        let level = lauxlib.luaL_optinteger(L, arg + 2, L === L1 ? 1 : 0);
        lauxlib.luaL_traceback(L, L1, msg, level);
    }
    return 1;
};

const dblib = {
    "gethook":      db_gethook,
    "getinfo":      db_getinfo,
    "getlocal":     db_getlocal,
    "getmetatable": db_getmetatable,
    "getregistry":  db_getregistry,
    "getupvalue":   db_getupvalue,
    "getuservalue": db_getuservalue,
    "sethook":      db_sethook,
    "setlocal":     db_setlocal,
    "setmetatable": db_setmetatable,
    "setupvalue":   db_setupvalue,
    "setuservalue": db_setuservalue,
    "traceback":    db_traceback,
    "upvalueid":    db_upvalueid,
    "upvaluejoin":  db_upvaluejoin
};

// Only with Node
if (false) {
    const readlineSync = require('readline-sync');
    readlineSync.setDefaultOptions({
        prompt: 'lua_debug> '
    });

    // TODO: if in browser, use a designated input in the DOM ?
    const db_debug = function(L) {
        for (;;) {
            let input = readlineSync.prompt();

            if (input === "cont")
                return 0;

            if (input.length === 0)
                continue;

            let buffer = lua.to_luastring(input);
            if (lauxlib.luaL_loadbuffer(L, buffer, buffer.length, lua.to_luastring("=(debug command)", true))
                || lua.lua_pcall(L, 0, 0, 0)) {
                lauxlib.lua_writestringerror(`${lua.lua_tojsstring(L, -1)}\n`);
            }
            lua.lua_settop(L, 0);  /* remove eventual returns */
        }
    };

    dblib.debug = db_debug;
}

const luaopen_debug = function(L) {
    lauxlib.luaL_newlib(L, dblib);
    return 1;
};

module.exports.luaopen_debug = luaopen_debug;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

const lua      = __webpack_require__(2);
const lauxlib  = __webpack_require__(6);
const llimit   = __webpack_require__(5);

const strftime = __webpack_require__(59);

/* options for ANSI C 89 (only 1-char options) */
const L_STRFTIMEC89 = lua.to_luastring("aAbBcdHIjmMpSUwWxXyYZ%", true);

/* options for ISO C 99 and POSIX */
const L_STRFTIMEC99 = lua.to_luastring("aAbBcCdDeFgGhHIjmMnprRStTuUVwWxXyYzZ%||EcECExEXEyEYOdOeOHOIOmOMOSOuOUOVOwOWOy", true);  /* two-char options */

/* options for Windows */
const L_STRFTIMEWIN = lua.to_luastring("aAbBcdHIjmMpSUwWxXyYzZ%||#c#x#d#H#I#j#m#M#S#U#w#W#y#Y", true);  /* two-char options */

// const LUA_STRFTIMEOPTIONS = L_STRFTIMEWIN;
const LUA_STRFTIMEOPTIONS = L_STRFTIMEC89;
// const LUA_STRFTIMEOPTIONS = L_STRFTIMEC99;

const setfield = function(L, key, value) {
    lua.lua_pushinteger(L, value);
    lua.lua_setfield(L, -2, lua.to_luastring(key, true));
};

const setallfields = function(L, time, utc) {
    setfield(L, "sec",   !utc ? time.getSeconds()  : time.getUTCSeconds());
    setfield(L, "min",   !utc ? time.getMinutes()  : time.getUTCMinutes());
    setfield(L, "hour",  !utc ? time.getHours()    : time.getUTCHours());
    setfield(L, "day",   !utc ? time.getDate()     : time.getUTCDate());
    setfield(L, "month", !utc ? time.getMonth()    : time.getUTCMonth());
    setfield(L, "year",  !utc ? time.getFullYear() : time.getUTCFullYear());
    setfield(L, "wday",  !utc ? time.getDay()      : time.getUTCDay());
    let now = new Date();
    setfield(L, "yday", Math.floor((now - (new Date(now.getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24)));
    // setboolfield(L, "isdst", time.get);
};

const L_MAXDATEFIELD = (llimit.MAX_INT / 2);

const getfield = function(L, key, d, delta) {
    let t = lua.lua_getfield(L, -1, lua.to_luastring(key, true));  /* get field and its type */
    let res = lua.lua_tointegerx(L, -1);
    if (res === false) {  /* field is not an integer? */
        if (t !== lua.LUA_TNIL)  /* some other value? */
            return lauxlib.luaL_error(L, lua.to_luastring("field '%s' is not an integer"), key);
        else if (d < 0)  /* absent field; no default? */
            return lauxlib.luaL_error(L, lua.to_luastring("field '%s' missing in date table"), key);
        res = d;
    }
    else {
        if (!(-L_MAXDATEFIELD <= res && res <= L_MAXDATEFIELD))
            return lauxlib.luaL_error(L, lua.to_luastring("field '%s' is out-of-bound"), key);
        res -= delta;
    }
    lua.lua_pop(L, 1);
    return res;
};

const checkoption = function(L, conv, buff) {
    let option = LUA_STRFTIMEOPTIONS;
    let oplen = 1;  /* length of options being checked */
    for (; option.length > 0 && oplen <= conv.length; option = option.slice(oplen)) {
        if (option[0] === '|'.charCodeAt(0))  /* next block? */
            oplen++;  /* will check options with next length (+1) */
        else if (lua.to_jsstring(conv.slice(0, oplen)) === lua.to_jsstring(option.slice(0, oplen))) {  /* match? */
            buff.push(...conv.slice(0, oplen)); /* copy valid option to buffer */
            return conv.slice(oplen);  /* return next item */
        }
    }
    lauxlib.luaL_argerror(L, 1, lua.lua_pushliteral(L, `invalid conversion specifier '%${conv}'`, conv));
};

/* maximum size for an individual 'strftime' item */
const SIZETIMEFMT = 250;


const os_date = function(L) {
    let s = lauxlib.luaL_optlstring(L, 1, "%c");
    let t = lauxlib.luaL_opt(L, l_checktime, 2, new Date().getTime() / 1000) * 1000;
    let stm = new Date(t);
    let utc = false;
    if (s[0] === '!'.charCodeAt(0)) {  /* UTC? */
        utc = true;
        s = s.slice(1);  /* skip '!' */
    }

    if (stm === null)  /* invalid date? */
        lauxlib.luaL_error(L, lua.to_luastring("time result cannot be represented in this installation", true));

    if (lua.to_jsstring(s) === "*t") {
        lua.lua_createtable(L, 0, 9);  /* 9 = number of fields */
        setallfields(L, stm, utc);
    } else {
        let cc;  /* buffer for individual conversion specifiers */
        let b = [];
        while (s.length > 0) {
            cc = ['%'.charCodeAt(0)];

            if (s[0] !== '%'.charCodeAt(0)) {  /* not a conversion specifier? */
                b.push(s[0]);
                s = s.slice(1);
            } else {
                s = s.slice(1);  /* skip '%' */
                s = checkoption(L, s, cc);  /* copy specifier to 'cc' */
                b.push(...(lua.to_luastring(strftime(lua.to_jsstring(cc), stm))));
            }
        }
        lua.lua_pushstring(L, b);
    }
    return 1;
};

const os_time = function(L) {
    let t = new Date();
    if (!lua.lua_isnoneornil(L, 1))  /* called with arg */{
        lauxlib.luaL_checktype(L, 1, lua.LUA_TTABLE);  /* make sure table is at the top */
        lua.lua_settop(L, 1);
        t.setSeconds(getfield(L, "sec", 0, 0));
        t.setMinutes(getfield(L, "min", 0, 0));
        t.setHours(getfield(L, "hour", 12, 0));
        t.setDate(getfield(L, "day", -1, 0));
        t.setMonth(getfield(L, "month", -1, 1));
        t.setFullYear(getfield(L, "year", -1, 0));
        setallfields(L, t);
    }

    lua.lua_pushinteger(L, Math.floor(t / 1000));
    return 1;
};

const l_checktime = function(L, arg) {
    let t = lauxlib.luaL_checkinteger(L, arg);
    // lauxlib.luaL_argcheck(L, t, arg, lua.to_luastring("time out-of-bounds"));
    return t;
};

const os_difftime = function(L) {
    let t1 = l_checktime(L, 1);
    let t2 = l_checktime(L, 2);
    lua.lua_pushnumber(L, new Date(t1) - new Date(t2));
    return 1;
};

const syslib = {
    "date": os_date,
    "difftime": os_difftime,
    "time": os_time
};

// Only with Node
if (process && process.exit && process.env && process.uptime) {
    const os_exit = function(L) {
        let status;
        if (lua.lua_isboolean(L, 1))
            status = (lua.lua_toboolean(L, 1) ? 0 : 1);
        else
            status = lauxlib.luaL_optinteger(L, 1, 0);
        if (lua.lua_toboolean(L, 2))
            lua.lua_close(L);
        if (L) process.exit(status);  /* 'if' to avoid warnings for unreachable 'return' */
        return 0;
    };

    const os_getenv = function(L) {
        lua.lua_pushliteral(L, process.env[lua.to_jsstring(lauxlib.luaL_checkstring(L, 1))]);  /* if NULL push nil */
        return 1;
    };

    const os_clock = function(L) {
        lua.lua_pushnumber(L, process.uptime());
        return 1;
    };

    syslib.clock = os_clock;
    syslib.exit = os_exit;
    syslib.getenv = os_getenv;
}


// Only with Node
if (false) {

    const fs = require('fs');
    const tmp = require('tmp');
    const child_process = require('child_process');

    // TODO: on POSIX system, should create the file
    const lua_tmpname = function() {
        return tmp.tmpNameSync();
    };

    const os_remove = function(L) {
        let filename = lauxlib.luaL_checkstring(L, 1);
        try {
            if (fs.lstatSync(lua.to_jsstring(filename)).isDirectory()) {
                fs.rmdirSync(lua.to_jsstring(filename));
            } else {
                fs.unlinkSync(lua.to_jsstring(filename));
            }
        } catch (e) {
            return lauxlib.luaL_fileresult(L, false, filename, e);
        }
        return lauxlib.luaL_fileresult(L, true);
    };

    const os_rename = function(L) {
        let fromname = lua.to_jsstring(lauxlib.luaL_checkstring(L, 1));
        let toname = lua.to_jsstring(lauxlib.luaL_checkstring(L, 2));
        try {
            fs.renameSync(fromname, toname);
        } catch (e) {
            return lauxlib.luaL_fileresult(L, false, false, e);
        }
        return lauxlib.luaL_fileresult(L, true);
    };

    const os_tmpname = function(L) {
        let name = lua_tmpname();
        if (!name)
            return lauxlib.luaL_error(L, lua.to_luastring("unable to generate a unique filename"));
        lua.lua_pushstring(L, lua.to_luastring(name));
        return 1;
    };

    syslib.remove = os_remove;
    syslib.rename = os_rename;
    syslib.tmpname = os_tmpname;

    const os_execute = function(L) {
        let cmd = lauxlib.luaL_optstring(L, 1, null);
        if (cmd !== null) {
            try {
                child_process.execSync(
                    lua.to_jsstring(cmd),
                    {
                        stdio: [process.stdin, process.stdout, process.stderr]
                    }
                );
            } catch (e) {
                return lauxlib.luaL_execresult(L, e);
            }

            return lauxlib.luaL_execresult(L, null);
        } else {
            try {
                child_process.execSync(
                    lua.to_jsstring(cmd),
                    {
                        stdio: [process.stdin, process.stdout, process.stderr]
                    }
                );
                lua.lua_pushboolean(L, 1);
            } catch (e) {
                lua.lua_pushboolean(L, 0);
            }

            return 1;
        }
    };

    syslib.execute = os_execute;

}

const luaopen_os = function(L) {
    lauxlib.luaL_newlib(L, syslib);
    return 1;
};

module.exports.luaopen_os = luaopen_os;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

const lua      = __webpack_require__(2);
const lauxlib  = __webpack_require__(6);

const LUA_IGMARK    = ["-".charCodeAt(0)];

const CLIBS         = lua.to_luastring("__CLIBS__", true);
const LUA_PATH_VAR  = "LUA_PATH";
const LUA_CPATH_VAR = "LUA_CPATH";

/*
** LUA_CSUBSEP is the character that replaces dots in submodule names
** when searching for a C loader.
** LUA_LSUBSEP is the character that replaces dots in submodule names
** when searching for a Lua loader.
*/
const LUA_CSUBSEP   = lua.LUA_DIRSEP;
const LUA_LSUBSEP   = lua.LUA_DIRSEP;

/* prefix for open functions in C libraries */
const LUA_POF       = lua.to_luastring("luaopen_");

/* separator for open functions in C libraries */
const LUA_OFSEP     = lua.to_luastring("_");
const LIB_FAIL      = "open";

const AUXMARK       = [1];


/*
** load JS library in file 'path'. If 'seeglb', load with all names in
** the library global.
** Returns the library; in case of error, returns NULL plus an
** error string in the stack.
*/
let lsys_load;
if (true) {
    lsys_load = function(L, path) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", lua.to_jsstring(path), false);
        xhr.send();
        /* TODO: subresource integrity check? */

        if (xhr.status === 200) {
            return eval(xhr.response);
        } else {
            lua.lua_pushstring(L, lua.to_luastring(`${xhr.status}: ${xhr.statusText}`));
            return null;
        }
    };
} else {
    lsys_load = function(L, path) {
        try {
            path = lua.to_jsstring(path);

            // Relative path ?
            if (path.startsWith('.'))
                path = `${process.env.PWD}/${path}`;

            return require(path);
        } catch (e) {
            lua.lua_pushstring(L, lua.to_luastring(e.message));
            return null;
        }
    };
}

/*
** Try to find a function named 'sym' in library 'lib'.
** Returns the function; in case of error, returns NULL plus an
** error string in the stack.
*/
const lsys_sym = function(L, lib, sym) {
    let f = lib[lua.to_jsstring(sym)];

    if (f && typeof f === 'function')
        return f;
    else {
        lua.lua_pushfstring(L, lua.to_luastring("undefined symbol: %s"), sym);
        return null;
    }
};

/*
** return registry.LUA_NOENV as a boolean
*/
const noenv = function(L) {
    lua.lua_getfield(L, lua.LUA_REGISTRYINDEX, lua.to_luastring("LUA_NOENV"));
    let b = lua.lua_toboolean(L, -1);
    lua.lua_pop(L, 1);  /* remove value */
    return b;
};

let readable;
// Only with Node
if (false) {

    const fs = require('fs');

    readable = function(filename) {
        let fd = false;

        try {
            fd = fs.openSync(lua.to_jsstring(filename), 'r');
            fs.closeSync(fd);
        } catch (e) {
            return false;
        }

        return true;
    };
} else {
    /* TODO: use async/await ? */
    readable = function(filename) {
        let xhr = new XMLHttpRequest();
        /* Following GET request done by searcher_Web will be cached */
        xhr.open("GET", lua.to_jsstring(filename), false);
        xhr.send();
        /* TODO: subresource integrity check? */

        return xhr.status === 200;
    };
}


/* error codes for 'lookforfunc' */
const ERRLIB  = 1;
const ERRFUNC = 2;

/*
** Look for a C function named 'sym' in a dynamically loaded library
** 'path'.
** First, check whether the library is already loaded; if not, try
** to load it.
** Then, if 'sym' is '*', return true (as library has been loaded).
** Otherwise, look for symbol 'sym' in the library and push a
** C function with that symbol.
** Return 0 and 'true' or a function in the stack; in case of
** errors, return an error code and an error message in the stack.
*/
const lookforfunc = function(L, path, sym) {
    let reg = checkclib(L, path);  /* check loaded C libraries */
    if (reg === null) {  /* must load library? */
        reg = lsys_load(L, path, sym[0] === '*'.charCodeAt(0));  /* a global symbols if 'sym'=='*' */
        if (reg === null) return ERRLIB;  /* unable to load library */
        addtoclib(L, path, reg);
    }
    if (sym[0] === '*'.charCodeAt(0)) {  /* loading only library (no function)? */
        lua.lua_pushboolean(L, 1);  /* return 'true' */
        return 0;  /* no errors */
    }
    else {
        let f = lsys_sym(L, reg, sym);
        if (f === null)
            return ERRFUNC;  /* unable to find function */
        lua.lua_pushcfunction(L, f);  /* else create new function */
        return 0;  /* no errors */
    }
};

const ll_loadlib = function(L) {
    let path = lauxlib.luaL_checkstring(L, 1);
    let init = lauxlib.luaL_checkstring(L, 2);
    let stat = lookforfunc(L, path, init);
    if (stat === 0)  /* no errors? */
        return 1;  /* return the loaded function */
    else {  /* error; error message is on stack top */
        lua.lua_pushnil(L);
        lua.lua_insert(L, -2);
        lua.lua_pushliteral(L, (stat === ERRLIB) ? LIB_FAIL : "init");
        return 3;  /* return nil, error message, and where */
    }
};

/*
** Set a path
*/
const setpath = function(L, fieldname, envname, dft) {
    let nver = lua.lua_pushstring(L, lua.to_luastring(`${envname}${lua.LUA_VERSUFFIX}`, true));
    let path = process.env[nver];  /* use versioned name */
    if (path === undefined)  /* no environment variable? */
        path = process.env[envname];  /* try unversioned name */
    if (path === undefined || noenv(L))  /* no environment variable? */
        lua.lua_pushstring(L, lua.to_luastring(dft, true));  /* use default */
    else {
        /* replace ";;" by ";AUXMARK;" and then AUXMARK by default path */
        path = lauxlib.luaL_gsub(
            L,
            lua.to_luastring(path),
            lua.to_luastring(lua.LUA_PATH_SEP + lua.LUA_PATH_SEP, true),
            lua.to_luastring(lua.LUA_PATH_SEP, true)
                .concat(AUXMARK)
                .concat(lua.to_luastring(lua.LUA_PATH_SEP, true))
        );
        lauxlib.luaL_gsub(L, path, AUXMARK, lua.to_luastring(dft));
        lua.lua_remove(L, -2); /* remove result from 1st 'gsub' */
    }
    lua.lua_setfield(L, -3, fieldname);  /* package[fieldname] = path value */
    lua.lua_pop(L, 1);  /* pop versioned variable name */
};

/*
** return registry.CLIBS[path]
*/
const checkclib = function(L, path) {
    lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, CLIBS);
    lua.lua_getfield(L, -1, path);
    let plib = lua.lua_touserdata(L, -1);  /* plib = CLIBS[path] */
    lua.lua_pop(L, 2);  /* pop CLIBS table and 'plib' */
    return plib;
};

/*
** registry.CLIBS[path] = plib        -- for queries
** registry.CLIBS[#CLIBS + 1] = plib  -- also keep a list of all libraries
*/
const addtoclib = function(L, path, plib) {
    lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, CLIBS);
    lua.lua_pushlightuserdata(L, plib);
    lua.lua_pushvalue(L, -1);
    lua.lua_setfield(L, -3, path);  /* CLIBS[path] = plib */
    lua.lua_rawseti(L, -2, lauxlib.luaL_len(L, -2) + 1);  /* CLIBS[#CLIBS + 1] = plib */
    lua.lua_pop(L, 1);  /* pop CLIBS table */
};

const pushnexttemplate = function(L, path) {
    while (path[0] === lua.LUA_PATH_SEP.charCodeAt(0)) path = path.slice(1);  /* skip separators */
    if (path.length === 0) return null;  /* no more templates */
    let l = path.indexOf(lua.LUA_PATH_SEP.charCodeAt(0));  /* find next separator */
    if (l < 0) l = path.length;
    lua.lua_pushlstring(L, path, l);  /* template */
    return path.slice(l);
};

const searchpath = function(L, name, path, sep, dirsep) {
    let msg = new lauxlib.luaL_Buffer();  /* to build error message */
    lauxlib.luaL_buffinit(L, msg);
    if (sep[0] !== 0)  /* non-empty separator? */
        name = lauxlib.luaL_gsub(L, name, sep, dirsep);  /* replace it by 'dirsep' */
    while ((path = pushnexttemplate(L, path)) !== null) {
        let filename = lauxlib.luaL_gsub(L, lua.lua_tostring(L, -1), lua.to_luastring(lua.LUA_PATH_MARK, true), name);
        lua.lua_remove(L, -2);  /* remove path template */
        if (readable(filename))  /* does file exist and is readable? */
            return filename;  /* return that file name */
        lua.lua_pushfstring(L, lua.to_luastring("\n\tno file '%s'"), filename);
        lua.lua_remove(L, -2);  /* remove file name */
        lauxlib.luaL_addvalue(msg);
    }
    lauxlib.luaL_pushresult(msg);  /* create error message */
    return null;  /* not found */
};

const ll_searchpath = function(L) {
    let f = searchpath(
        L,
        lauxlib.luaL_checkstring(L, 1),
        lauxlib.luaL_checkstring(L, 2),
        lauxlib.luaL_optstring(L, 3, [".".charCodeAt(0)]),
        lauxlib.luaL_optstring(L, 4, [lua.LUA_DIRSEP.charCodeAt(0)])
    );
    if (f !== null) return 1;
    else {  /* error message is on top of the stack */
        lua.lua_pushnil(L);
        lua.lua_insert(L, -2);
        return 2;  /* return nil + error message */
    }
};

const findfile = function(L, name, pname, dirsep) {
    lua.lua_getfield(L, lua.lua_upvalueindex(1), pname);
    let path = lua.lua_tostring(L, -1);
    if (path === null)
        lauxlib.luaL_error(L, lua.to_luastring("'package.%s' must be a string"), pname);
    return searchpath(L, name, path, ['.'.charCodeAt(0)], dirsep);
};

const checkload = function(L, stat, filename) {
    if (stat) {  /* module loaded successfully? */
        lua.lua_pushstring(L, filename);  /* will be 2nd argument to module */
        return 2;  /* return open function and file name */
    } else
        return lauxlib.luaL_error(L, lua.to_luastring("error loading module '%s' from file '%s':\n\t%s"),
                lua.lua_tostring(L, 1), filename, lua.lua_tostring(L, -1));
};

const searcher_Lua = function(L) {
    let name = lauxlib.luaL_checkstring(L, 1);
    let filename = findfile(L, name, lua.to_luastring("path", true), lua.to_luastring(LUA_LSUBSEP, true));
    if (filename === null) return 1;  /* module not found in this path */
    return checkload(L, lauxlib.luaL_loadfile(L, filename) === lua.LUA_OK, filename);
};

/*
** Try to find a load function for module 'modname' at file 'filename'.
** First, change '.' to '_' in 'modname'; then, if 'modname' has
** the form X-Y (that is, it has an "ignore mark"), build a function
** name "luaopen_X" and look for it. (For compatibility, if that
** fails, it also tries "luaopen_Y".) If there is no ignore mark,
** look for a function named "luaopen_modname".
*/
const loadfunc = function(L, filename, modname) {
    let openfunc;
    modname = lauxlib.luaL_gsub(L, modname, [".".charCodeAt(0)], LUA_OFSEP);
    let mark = modname.indexOf(LUA_IGMARK[0]);
    if (mark >= 0) {
        openfunc = lua.lua_pushlstring(L, modname, mark);
        openfunc = lua.lua_pushfstring(L, lua.to_luastring("%s%s"), LUA_POF, openfunc);
        let stat = lookforfunc(L, filename, openfunc);
        if (stat !== ERRFUNC) return stat;
        modname = mark + 1;  /* else go ahead and try old-style name */
    }
    openfunc = lua.lua_pushfstring(L, lua.to_luastring("%s%s"), LUA_POF, modname);
    return lookforfunc(L, filename, openfunc);
};

const searcher_C = function(L) {
    let name = lauxlib.luaL_checkstring(L, 1);
    let filename = findfile(L, name, lua.to_luastring("cpath", true), lua.to_luastring(LUA_CSUBSEP, true));
    if (filename === null) return 1;  /* module not found in this path */
    return checkload(L, (loadfunc(L, filename, name) === 0), filename);
};

const searcher_Croot = function(L) {
    let name = lauxlib.luaL_checkstring(L, 1);
    let p = name.indexOf('.'.charCodeAt(0));
    let stat;
    if (p < 0) return 0;  /* is root */
    lua.lua_pushlstring(L, name, p);
    let filename = findfile(L, lua.lua_tostring(L, -1), lua.to_luastring("cpath", true), lua.to_luastring(LUA_CSUBSEP, true));
    if (filename === null) return 1;  /* root not found */
    if ((stat = loadfunc(L, filename, name)) !== 0) {
        if (stat != ERRFUNC)
            return checkload(L, 0, filename);  /* real error */
        else {  /* open function not found */
          lua.lua_pushstring(L, lua.to_luastring(`\n\tno module '${lua.to_jsstring(name)}' in file '${lua.to_jsstring(filename)}'`));
            return 1;
        }
    }
    lua.lua_pushstring(L, filename);  /* will be 2nd argument to module */
    return 2;
};

const searcher_preload = function(L) {
    let name = lauxlib.luaL_checkstring(L, 1);
    lua.lua_getfield(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(lauxlib.LUA_PRELOAD_TABLE, true));
    if (lua.lua_getfield(L, -1, name) === lua.LUA_TNIL)  /* not found? */
        lua.lua_pushliteral(L, `\n\tno field package.preload['${lua.to_jsstring(name)}']`);
    return 1;
};

const findloader = function(L, name, ctx, k) {
    let msg = new lauxlib.luaL_Buffer();  /* to build error message */
    lauxlib.luaL_buffinit(L, msg);
    /* push 'package.searchers' to index 3 in the stack */
    if (lua.lua_getfield(L, lua.lua_upvalueindex(1), lua.to_luastring("searchers", true)) !== lua.LUA_TTABLE)
        lauxlib.luaL_error(L, lua.to_luastring("'package.searchers' must be a table"));
    let ctx2 = {name: name, i: 1, msg: msg, ctx: ctx, k: k};
    return findloader_cont(L, lua.LUA_OK, ctx2);
};

const findloader_cont = function(L, status, ctx) {
    /*  iterate over available searchers to find a loader */
    for (; ; ctx.i++) {
        if (status === lua.LUA_OK) {
            if (lua.lua_rawgeti(L, 3, ctx.i) === lua.LUA_TNIL) {  /* no more searchers? */
                lua.lua_pop(L, 1);  /* remove nil */
                lauxlib.luaL_pushresult(ctx.msg);  /* create error message */
                lauxlib.luaL_error(L, lua.to_luastring("module '%s' not found:%s"), ctx.name, lua.lua_tostring(L, -1));
            }
            lua.lua_pushstring(L, ctx.name);
            lua.lua_callk(L, 1, 2, ctx, findloader_cont);  /* call it */
        } else {
            status = lua.LUA_OK;
        }
        if (lua.lua_isfunction(L, -2))  /* did it find a loader? */
            break;  /* module loader found */
        else if (lua.lua_isstring(L, -2)) {  /* searcher returned error message? */
            lua.lua_pop(L, 1);  /* remove extra return */
            lauxlib.luaL_addvalue(ctx.msg);  /* concatenate error message */
        }
        else
            lua.lua_pop(L, 2);  /* remove both returns */
    }
    return ctx.k(L, lua.LUA_OK, ctx.ctx);
};

const ll_require = function(L) {
    let name = lauxlib.luaL_checkstring(L, 1);
    lua.lua_settop(L, 1);  /* LOADED table will be at index 2 */
    lua.lua_getfield(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(lauxlib.LUA_LOADED_TABLE, true));
    lua.lua_getfield(L, 2, name);  /* LOADED[name] */
    if (lua.lua_toboolean(L, -1))  /* is it there? */
      return 1;  /* package is already loaded */
    /* else must load package */
    lua.lua_pop(L, 1);  /* remove 'getfield' result */
    let ctx = name;
    return findloader(L, name, ctx, ll_require_cont);
};

const ll_require_cont = function(L, status, ctx) {
    let name = ctx;
    lua.lua_pushstring(L, name);  /* pass name as argument to module loader */
    lua.lua_insert(L, -2);  /* name is 1st argument (before search data) */
    lua.lua_callk(L, 2, 1, ctx, ll_require_cont2);
    return ll_require_cont2(L, lua.LUA_OK, ctx);  /* run loader to load module */
};

const ll_require_cont2 = function(L, status, ctx) {
    let name = ctx;
    if (!lua.lua_isnil(L, -1))  /* non-nil return? */
      lua.lua_setfield(L, 2, name);  /* LOADED[name] = returned value */
    if (lua.lua_getfield(L, 2, name) == lua.LUA_TNIL) {   /* module set no value? */
      lua.lua_pushboolean(L, 1);  /* use true as result */
      lua.lua_pushvalue(L, -1);  /* extra copy to be returned */
      lua.lua_setfield(L, 2, name);  /* LOADED[name] = true */
    }
    return 1;
};

const pk_funcs = {
    "loadlib": ll_loadlib,
    "searchpath": ll_searchpath
};

const ll_funcs = {
    "require": ll_require
};

const createsearcherstable = function(L) {
    let searchers = [searcher_preload, searcher_Lua, searcher_C, searcher_Croot, null];
    /* create 'searchers' table */
    lua.lua_createtable(L);
    /* fill it with predefined searchers */
    for (let i = 0; searchers[i]; i++) {
      lua.lua_pushvalue(L, -2);  /* set 'package' as upvalue for all searchers */
      lua.lua_pushcclosure(L, searchers[i], 1);
      lua.lua_rawseti(L, -2, i+1);
    }
    lua.lua_setfield(L, -2, lua.to_luastring("searchers", true));  /* put it in field 'searchers' */
};

/*
** create table CLIBS to keep track of loaded C libraries,
** setting a finalizer to close all libraries when closing state.
*/
const createclibstable = function(L) {
    lua.lua_newtable(L);  /* create CLIBS table */
    lua.lua_createtable(L, 0, 1);  /* create metatable for CLIBS */
    lua.lua_setmetatable(L, -2);
    lua.lua_rawsetp(L, lua.LUA_REGISTRYINDEX, CLIBS);  /* set CLIBS table in registry */
};

const luaopen_package = function(L) {
    createclibstable(L);
    lauxlib.luaL_newlib(L, pk_funcs);  /* create 'package' table */
    createsearcherstable(L);
    /* set paths */
    setpath(L, lua.to_luastring("path", true), LUA_PATH_VAR, lua.LUA_PATH_DEFAULT);
    setpath(L, lua.to_luastring("cpath", true), LUA_CPATH_VAR, lua.LUA_CPATH_DEFAULT);
    /* store config information */
    lua.lua_pushliteral(L, lua.LUA_DIRSEP + "\n" + lua.LUA_PATH_SEP + "\n" + lua.LUA_PATH_MARK + "\n" +
                        lua.LUA_EXEC_DIR + "\n" + LUA_IGMARK + "\n");
    lua.lua_setfield(L, -2, lua.to_luastring("config", true));
    /* set field 'loaded' */
    lauxlib.luaL_getsubtable(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(lauxlib.LUA_LOADED_TABLE, true));
    lua.lua_setfield(L, -2, lua.to_luastring("loaded", true));
    /* set field 'preload' */
    lauxlib.luaL_getsubtable(L, lua.LUA_REGISTRYINDEX, lua.to_luastring(lauxlib.LUA_PRELOAD_TABLE, true));
    lua.lua_setfield(L, -2, lua.to_luastring("preload", true));
    lua.lua_pushglobaltable(L);
    lua.lua_pushvalue(L, -2);  /* set 'package' as upvalue for next lib */
    lauxlib.luaL_setfuncs(L, ll_funcs, 1);  /* open lib into global table */
    lua.lua_pop(L, 1);  /* pop global table */
    return 1;  /* return 'package' table */
};

module.exports.luaopen_package = luaopen_package;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


window.WEB = true;

const fengari  = __webpack_require__(23);
const lua      = fengari.lua;
const lauxlib  = fengari.lauxlib;
const lualib   = fengari.lualib;
const interop  = __webpack_require__(60);

const L = lauxlib.luaL_newstate();

/* open standard libraries */
lualib.luaL_openlibs(L);
lauxlib.luaL_requiref(L, lua.to_luastring("js"), interop.luaopen_js, 1);
lua.lua_pop(L, 1); /* remove lib */

let ok = lauxlib.luaL_loadfile(L, lua.to_luastring("src/test.lua"));

if (ok === lua.LUA_OK) {
    ok = lua.lua_pcall(L, 0, 0, 0); /* TODO: use message handler to add traceback */
}

if (ok !== lua.LUA_OK) {
    let msg = lauxlib.luaL_tolstring(L, -1);
    lua.lua_pop(L, 1);
    console.error(lua.to_jsstring(msg));
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const assert   = __webpack_require__(0);

const defs     = __webpack_require__(1);
const llex     = __webpack_require__(28);
const lobject  = __webpack_require__(3);
const lopcodes = __webpack_require__(16);
const lparser  = __webpack_require__(27);
const ltable   = __webpack_require__(8);
const lvm      = __webpack_require__(15);

const CT       = defs.CT;
const OpCodesI = lopcodes.OpCodesI;
const TValue   = lobject.TValue;

/* Maximum number of registers in a Lua function (must fit in 8 bits) */
const MAXREGS = 255;

/*
** Marks the end of a patch list. It is an invalid value both as an absolute
** address, and as a list link (would link an element to itself).
*/
const NO_JUMP = -1;

const BinOpr = {
    OPR_ADD:      0,
    OPR_SUB:      1,
    OPR_MUL:      2,
    OPR_MOD:      3,
    OPR_POW:      4,
    OPR_DIV:      5,
    OPR_IDIV:     6,
    OPR_BAND:     7,
    OPR_BOR:      8,
    OPR_BXOR:     9,
    OPR_SHL:      10,
    OPR_SHR:      11,
    OPR_CONCAT:   12,
    OPR_EQ:       13,
    OPR_LT:       14,
    OPR_LE:       15,
    OPR_NE:       16,
    OPR_GT:       17,
    OPR_GE:       18,
    OPR_AND:      19,
    OPR_OR:       20,
    OPR_NOBINOPR: 21
};

const UnOpr = {
    OPR_MINUS:    0,
    OPR_BNOT:     1,
    OPR_NOT:      2,
    OPR_LEN:      3,
    OPR_NOUNOPR:  4
};

const hasjumps = function(e) {
    return e.t !== e.f;
};

/*
** If expression is a numeric constant returns either true or a new TValue
** (depending on 'make_tvalue'). Otherwise, returns false.
*/
const tonumeral = function(e, make_tvalue) {
    let ek = lparser.expkind;
    if (hasjumps(e))
        return false;  /* not a numeral */
    switch (e.k) {
        case ek.VKINT:
            if (make_tvalue) {
                return new TValue(CT.LUA_TNUMINT, e.u.ival);
            }
            return true;
        case ek.VKFLT:
            if (make_tvalue) {
                return new TValue(CT.LUA_TNUMFLT, e.u.nval);
            }
            return true;
        default: return false;
    }
};

/*
** Create a OP_LOADNIL instruction, but try to optimize: if the previous
** instruction is also OP_LOADNIL and ranges are compatible, adjust
** range of previous instruction instead of emitting a new one. (For
** instance, 'local a; local b' will generate a single opcode.)
*/
const luaK_nil = function(fs, from, n) {
    let previous;
    let l = from + n - 1;  /* last register to set nil */
    if (fs.pc > fs.lasttarget) {  /* no jumps to current position? */
        previous = fs.f.code[fs.pc-1];
        if (previous.opcode === OpCodesI.OP_LOADNIL) {  /* previous is LOADNIL? */
            let pfrom = previous.A;  /* get previous range */
            let pl = pfrom + previous.B;
            if ((pfrom <= from && from <= pl + 1) ||
                    (from <= pfrom && pfrom <= l + 1)) {  /* can connect both? */
                if (pfrom < from) from = pfrom;  /* from = min(from, pfrom) */
                if (pl > l) l = pl;  /* l = max(l, pl) */
                lopcodes.SETARG_A(previous, from);
                lopcodes.SETARG_B(previous, l - from);
                return;
            }
        }  /* else go through */
    }
    luaK_codeABC(fs, OpCodesI.OP_LOADNIL, from, n - 1, 0);  /* else no optimization */
};

const getinstruction = function(fs, e) {
    return fs.f.code[e.u.info];
};

/*
** Gets the destination address of a jump instruction. Used to traverse
** a list of jumps.
*/
const getjump = function(fs, pc) {
    let offset = fs.f.code[pc].sBx;
    if (offset === NO_JUMP)  /* point to itself represents end of list */
        return NO_JUMP;  /* end of list */
    else
        return pc + 1 + offset;  /* turn offset into absolute position */
};

/*
** Fix jump instruction at position 'pc' to jump to 'dest'.
** (Jump addresses are relative in Lua)
*/
const fixjump = function(fs, pc, dest) {
    let jmp = fs.f.code[pc];
    let offset = dest - (pc + 1);
    assert(dest !== NO_JUMP);
    if (Math.abs(offset) > lopcodes.MAXARG_sBx)
        llex.luaX_syntaxerror(fs.ls, defs.to_luastring("control structure too long", true));
    lopcodes.SETARG_sBx(jmp, offset);
};

/*
** Concatenate jump-list 'l2' into jump-list 'l1'
*/
const luaK_concat = function(fs, l1, l2) {
    if (l2 === NO_JUMP) return l1;  /* nothing to concatenate? */
    else if (l1 === NO_JUMP)  /* no original list? */
        l1 = l2;
    else {
        let list = l1;
        let next = getjump(fs, list);
        while (next !== NO_JUMP) {  /* find last element */
            list = next;
            next = getjump(fs, list);
        }
        fixjump(fs, list, l2);
    }

    return l1;
};

/*
** Create a jump instruction and return its position, so its destination
** can be fixed later (with 'fixjump'). If there are jumps to
** this position (kept in 'jpc'), link them all together so that
** 'patchlistaux' will fix all them directly to the final destination.
*/
const luaK_jump = function (fs) {
    let jpc = fs.jpc;  /* save list of jumps to here */
    fs.jpc = NO_JUMP;  /* no more jumps to here */
    let j = luaK_codeAsBx(fs, OpCodesI.OP_JMP, 0, NO_JUMP);
    j = luaK_concat(fs, j, jpc);  /* keep them on hold */
    return j;
};

const luaK_jumpto = function(fs, t) {
    return luaK_patchlist(fs, luaK_jump(fs), t);
};

/*
** Code a 'return' instruction
*/
const luaK_ret = function(fs, first, nret) {
    luaK_codeABC(fs, OpCodesI.OP_RETURN, first, nret + 1, 0);
};

/*
** Code a "conditional jump", that is, a test or comparison opcode
** followed by a jump. Return jump position.
*/
const condjump = function(fs, op, A, B, C) {
   luaK_codeABC(fs, op, A, B, C);
   return luaK_jump(fs);
};

/*
** returns current 'pc' and marks it as a jump target (to avoid wrong
** optimizations with consecutive instructions not in the same basic block).
*/
const luaK_getlabel = function(fs) {
    fs.lasttarget = fs.pc;
    return fs.pc;
};

/*
** Returns the position of the instruction "controlling" a given
** jump (that is, its condition), or the jump itself if it is
** unconditional.
*/
const getjumpcontroloffset = function(fs, pc) {
    if (pc >= 1 && lopcodes.testTMode(fs.f.code[pc - 1].opcode))
        return pc - 1;
    else
        return pc;
};
const getjumpcontrol = function(fs, pc) {
    return fs.f.code[getjumpcontroloffset(fs, pc)];
};

/*
** Patch destination register for a TESTSET instruction.
** If instruction in position 'node' is not a TESTSET, return 0 ("fails").
** Otherwise, if 'reg' is not 'NO_REG', set it as the destination
** register. Otherwise, change instruction to a simple 'TEST' (produces
** no register value)
*/
const patchtestreg = function(fs, node, reg) {
    let pc = getjumpcontroloffset(fs, node);
    let i = fs.f.code[pc];
    if (i.opcode !== OpCodesI.OP_TESTSET)
        return false;  /* cannot patch other instructions */
    if (reg !== lopcodes.NO_REG && reg !== i.B)
        lopcodes.SETARG_A(i, reg);
    else {
        /* no register to put value or register already has the value;
           change instruction to simple test */
        fs.f.code[pc] = lopcodes.CREATE_ABC(OpCodesI.OP_TEST, i.B, 0, i.C);
    }
    return true;
};

/*
** Traverse a list of tests ensuring no one produces a value
*/
const removevalues = function(fs, list) {
    for (; list !== NO_JUMP; list = getjump(fs, list))
        patchtestreg(fs, list, lopcodes.NO_REG);
};

/*
** Traverse a list of tests, patching their destination address and
** registers: tests producing values jump to 'vtarget' (and put their
** values in 'reg'), other tests jump to 'dtarget'.
*/
const patchlistaux = function(fs, list, vtarget, reg, dtarget) {
    while (list !== NO_JUMP) {
        let next = getjump(fs, list);
        if (patchtestreg(fs, list, reg))
            fixjump(fs, list, vtarget);
        else
            fixjump(fs, list, dtarget);  /* jump to default target */
        list = next;
    }
};

/*
** Ensure all pending jumps to current position are fixed (jumping
** to current position with no values) and reset list of pending
** jumps
*/
const dischargejpc = function(fs) {
    patchlistaux(fs, fs.jpc, fs.pc, lopcodes.NO_REG, fs.pc);
    fs.jpc = NO_JUMP;
};

/*
** Add elements in 'list' to list of pending jumps to "here"
** (current position)
*/
const luaK_patchtohere = function(fs, list) {
    luaK_getlabel(fs);  /* mark "here" as a jump target */
    fs.jpc = luaK_concat(fs, fs.jpc, list);
};

/*
** Path all jumps in 'list' to jump to 'target'.
** (The assert means that we cannot fix a jump to a forward address
** because we only know addresses once code is generated.)
*/
const luaK_patchlist = function(fs, list, target) {
    if (target === fs.pc)  /* 'target' is current position? */
        luaK_patchtohere(fs, list);  /* add list to pending jumps */
    else {
        assert(target < fs.pc);
        patchlistaux(fs, list, target, lopcodes.NO_REG, target);
    }
};

/*
** Path all jumps in 'list' to close upvalues up to given 'level'
** (The assertion checks that jumps either were closing nothing
** or were closing higher levels, from inner blocks.)
*/
const luaK_patchclose = function(fs, list, level) {
    level++;  /* argument is +1 to reserve 0 as non-op */
    for (; list !== NO_JUMP; list = getjump(fs, list)) {
        let ins = fs.f.code[list];
        assert(ins.opcode === OpCodesI.OP_JMP && (ins.A === 0 || ins.A >= level));
        lopcodes.SETARG_A(ins, level);
    }
};

/*
** Emit instruction 'i', checking for array sizes and saving also its
** line information. Return 'i' position.
*/
const luaK_code = function(fs, i) {
    let f = fs.f;
    dischargejpc(fs);  /* 'pc' will change */
    /* put new instruction in code array */
    f.code[fs.pc] = i;
    f.lineinfo[fs.pc] = fs.ls.lastline;
    return fs.pc++;
};

/*
** Format and emit an 'iABC' instruction. (Assertions check consistency
** of parameters versus opcode.)
*/
const luaK_codeABC = function(fs, o, a, b, c) {
    assert(lopcodes.getOpMode(o) === lopcodes.iABC);
    assert(lopcodes.getBMode(o) !== lopcodes.OpArgN || b === 0);
    assert(lopcodes.getCMode(o) !== lopcodes.OpArgN || c === 0);
    assert(a <= lopcodes.MAXARG_A && b <= lopcodes.MAXARG_B && c <= lopcodes.MAXARG_C);
    return luaK_code(fs, lopcodes.CREATE_ABC(o, a, b, c));
};

/*
** Format and emit an 'iABx' instruction.
*/
const luaK_codeABx = function(fs, o, a, bc) {
    assert(lopcodes.getOpMode(o) === lopcodes.iABx || lopcodes.getOpMode(o) === lopcodes.iAsBx);
    assert(lopcodes.getCMode(o) === lopcodes.OpArgN);
    assert(a <= lopcodes.MAXARG_A && bc <= lopcodes.MAXARG_Bx);
    return luaK_code(fs, lopcodes.CREATE_ABx(o, a, bc));
};

const luaK_codeAsBx = function(fs,o,A,sBx) {
    return luaK_codeABx(fs, o, A, (sBx) + lopcodes.MAXARG_sBx);
};

/*
** Emit an "extra argument" instruction (format 'iAx')
*/
const codeextraarg = function(fs, a) {
    assert(a <= lopcodes.MAXARG_Ax);
    return luaK_code(fs, lopcodes.CREATE_Ax(OpCodesI.OP_EXTRAARG, a));
};

/*
** Emit a "load constant" instruction, using either 'OP_LOADK'
** (if constant index 'k' fits in 18 bits) or an 'OP_LOADKX'
** instruction with "extra argument".
*/
const luaK_codek = function(fs, reg, k) {
    if (k <= lopcodes.MAXARG_Bx)
        return luaK_codeABx(fs, OpCodesI.OP_LOADK, reg, k);
    else {
        let p = luaK_codeABx(fs, OpCodesI.OP_LOADKX, reg, 0);
        codeextraarg(fs, k);
        return p;
    }
};

/*
** Check register-stack level, keeping track of its maximum size
** in field 'maxstacksize'
*/
const luaK_checkstack = function(fs, n) {
    let newstack = fs.freereg + n;
    if (newstack > fs.f.maxstacksize) {
        if (newstack >= MAXREGS)
            llex.luaX_syntaxerror(fs.ls, defs.to_luastring("function or expression needs too many registers", true));
        fs.f.maxstacksize = newstack;
    }
};

/*
** Reserve 'n' registers in register stack
*/
const luaK_reserveregs = function(fs, n) {
   luaK_checkstack(fs, n);
   fs.freereg += n;
};

/*
** Free register 'reg', if it is neither a constant index nor
** a local variable.
*/
const freereg = function(fs, reg) {
    if (!lopcodes.ISK(reg) && reg >= fs.nactvar) {
        fs.freereg--;
        assert(reg === fs.freereg);
    }
};

/*
** Free register used by expression 'e' (if any)
*/
const freeexp = function(fs, e) {
    if (e.k === lparser.expkind.VNONRELOC)
        freereg(fs, e.u.info);
};

/*
** Free registers used by expressions 'e1' and 'e2' (if any) in proper
** order.
*/
const freeexps = function(fs, e1, e2) {
    let r1 = (e1.k === lparser.expkind.VNONRELOC) ? e1.u.info : -1;
    let r2 = (e2.k === lparser.expkind.VNONRELOC) ? e2.u.info : -1;
    if (r1 > r2) {
        freereg(fs, r1);
        freereg(fs, r2);
    }
    else {
        freereg(fs, r2);
        freereg(fs, r1);
    }
};


/*
** Add constant 'v' to prototype's list of constants (field 'k').
** Use scanner's table to cache position of constants in constant list
** and try to reuse constants. Because some values should not be used
** as keys (nil cannot be a key, integer keys can collapse with float
** keys), the caller must provide a useful 'key' for indexing the cache.
*/
const addk = function(fs, key, v) {
    let f = fs.f;
    let idx = ltable.luaH_set(fs.L, fs.ls.h, key);  /* index scanner table */
    if (idx.ttisinteger()) {  /* is there an index there? */
        let k = idx.value;
        /* correct value? (warning: must distinguish floats from integers!) */
        if (k < fs.nk && f.k[k].ttype() === v.ttype() && f.k[k].value === v.value)
            return k;  /* reuse index */
    }
    /* constant not found; create a new entry */
    let k = fs.nk;
    idx.setivalue(k);
    f.k[k] = v;
    fs.nk++;
    return k;
};

/*
** Add a string to list of constants and return its index.
*/
const luaK_stringK = function(fs, s) {
    let o = new TValue(CT.LUA_TLNGSTR, s);
    return addk(fs, o, o);  /* use string itself as key */
};


/*
** Add an integer to list of constants and return its index.
** Integers use userdata as keys to avoid collision with floats with
** same value.
*/
const luaK_intK = function(fs, n) {
    let k = new TValue(CT.LUA_TLIGHTUSERDATA, n);
    let o = new TValue(CT.LUA_TNUMINT, n);
    return addk(fs, k, o);
};

/*
** Add a float to list of constants and return its index.
*/
const luaK_numberK = function(fs, r) {
    let o = new TValue(CT.LUA_TNUMFLT, r);
    return addk(fs, o, o);  /* use number itself as key */
};


/*
** Add a boolean to list of constants and return its index.
*/
const boolK = function(fs, b) {
    let o = new TValue(CT.LUA_TBOOLEAN, b);
    return addk(fs, o, o);  /* use boolean itself as key */
};


/*
** Add nil to list of constants and return its index.
*/
const nilK = function(fs) {
    let v = new TValue(CT.LUA_TNIL, null);
    let k = new TValue(CT.LUA_TTABLE, fs.ls.h);
    /* cannot use nil as key; instead use table itself to represent nil */
    return addk(fs, k, v);
};

/*
** Fix an expression to return the number of results 'nresults'.
** Either 'e' is a multi-ret expression (function call or vararg)
** or 'nresults' is LUA_MULTRET (as any expression can satisfy that).
*/
const luaK_setreturns = function(fs, e, nresults) {
    let ek = lparser.expkind;
    if (e.k === ek.VCALL) {  /* expression is an open function call? */
        lopcodes.SETARG_C(getinstruction(fs, e), nresults + 1);
    }
    else if (e.k === ek.VVARARG) {
        let pc = getinstruction(fs, e);
        lopcodes.SETARG_B(pc, nresults + 1);
        lopcodes.SETARG_A(pc, fs.freereg);
        luaK_reserveregs(fs, 1);
    }
    else assert(nresults === defs.LUA_MULTRET);
};

const luaK_setmultret = function(fs, e) {
    luaK_setreturns(fs, e, defs.LUA_MULTRET);
};

/*
** Fix an expression to return one result.
** If expression is not a multi-ret expression (function call or
** vararg), it already returns one result, so nothing needs to be done.
** Function calls become VNONRELOC expressions (as its result comes
** fixed in the base register of the call), while vararg expressions
** become VRELOCABLE (as OP_VARARG puts its results where it wants).
** (Calls are created returning one result, so that does not need
** to be fixed.)
*/
const luaK_setoneret = function(fs, e) {
    let ek = lparser.expkind;
    if (e.k === ek.VCALL) {  /* expression is an open function call? */
        /* already returns 1 value */
        assert(getinstruction(fs, e).C === 2);
        e.k = ek.VNONRELOC;  /* result has fixed position */
        e.u.info = getinstruction(fs, e).A;
    } else if (e.k === ek.VVARARG) {
        lopcodes.SETARG_B(getinstruction(fs, e), 2);
        e.k = ek.VRELOCABLE;  /* can relocate its simple result */
    }
};

/*
** Ensure that expression 'e' is not a variable.
*/
const luaK_dischargevars = function(fs, e) {
    let ek = lparser.expkind;

    switch (e.k) {
        case ek.VLOCAL: {  /* already in a register */
            e.k =  ek.VNONRELOC;  /* becomes a non-relocatable value */
            break;
        }
        case ek.VUPVAL: {  /* move value to some (pending) register */
            e.u.info = luaK_codeABC(fs, OpCodesI.OP_GETUPVAL, 0, e.u.info, 0);
            e.k = ek.VRELOCABLE;
            break;
        }
        case ek.VINDEXED: {
            let op;
            freereg(fs, e.u.ind.idx);
            if (e.u.ind.vt === ek.VLOCAL) {  /* is 't' in a register? */
                freereg(fs, e.u.ind.t);
                op = OpCodesI.OP_GETTABLE;
            } else {
                assert(e.u.ind.vt === ek.VUPVAL);
                op = OpCodesI.OP_GETTABUP;  /* 't' is in an upvalue */
            }
            e.u.info = luaK_codeABC(fs, op, 0, e.u.ind.t, e.u.ind.idx);
            e.k = ek.VRELOCABLE;
            break;
        }
        case ek.VVARARG: case ek.VCALL: {
            luaK_setoneret(fs, e);
            break;
        }
        default: break;  /* there is one value available (somewhere) */
    }
};

const code_loadbool = function(fs, A, b, jump) {
    luaK_getlabel(fs);  /* those instructions may be jump targets */
    return luaK_codeABC(fs, OpCodesI.OP_LOADBOOL, A, b, jump);
};

/*
** Ensures expression value is in register 'reg' (and therefore
** 'e' will become a non-relocatable expression).
*/
const discharge2reg = function(fs, e, reg) {
    let ek = lparser.expkind;
    luaK_dischargevars(fs, e);
    switch (e.k) {
        case ek.VNIL: {
            luaK_nil(fs, reg, 1);
            break;
        }
        case ek.VFALSE: case ek.VTRUE: {
            luaK_codeABC(fs, OpCodesI.OP_LOADBOOL, reg, e.k === ek.VTRUE, 0);
            break;
        }
        case ek.VK: {
            luaK_codek(fs, reg, e.u.info);
            break;
        }
        case ek.VKFLT: {
            luaK_codek(fs, reg, luaK_numberK(fs, e.u.nval));
            break;
        }
        case ek.VKINT: {
            luaK_codek(fs, reg, luaK_intK(fs, e.u.ival));
            break;
        }
        case ek.VRELOCABLE: {
            let pc = getinstruction(fs, e);
            lopcodes.SETARG_A(pc, reg);  /* instruction will put result in 'reg' */
            break;
        }
        case ek.VNONRELOC: {
            if (reg !== e.u.info)
                luaK_codeABC(fs, OpCodesI.OP_MOVE, reg, e.u.info, 0);
            break;
        }
        default: {
            assert(e.k === ek.VJMP);
            return;  /* nothing to do... */
        }
    }
    e.u.info = reg;
    e.k = ek.VNONRELOC;
};

/*
** Ensures expression value is in any register.
*/
const discharge2anyreg = function(fs, e) {
    if (e.k !== lparser.expkind.VNONRELOC) {  /* no fixed register yet? */
        luaK_reserveregs(fs, 1);  /* get a register */
        discharge2reg(fs, e, fs.freereg-1);  /* put value there */
    }
};

/*
** check whether list has any jump that do not produce a value
** or produce an inverted value
*/
const need_value = function(fs, list) {
    for (; list !== NO_JUMP; list = getjump(fs, list)) {
        let i = getjumpcontrol(fs, list);
        if (i.opcode !== OpCodesI.OP_TESTSET) return true;
    }
    return false;  /* not found */
};

/*
** Ensures final expression result (including results from its jump
** lists) is in register 'reg'.
** If expression has jumps, need to patch these jumps either to
** its final position or to "load" instructions (for those tests
** that do not produce values).
*/
const exp2reg = function(fs, e, reg) {
    let ek = lparser.expkind;
    discharge2reg(fs, e, reg);
    if (e.k === ek.VJMP)  /* expression itself is a test? */
        e.t = luaK_concat(fs, e.t, e.u.info);  /* put this jump in 't' list */
    if (hasjumps(e)) {
        let final;  /* position after whole expression */
        let p_f = NO_JUMP;  /* position of an eventual LOAD false */
        let p_t = NO_JUMP;  /* position of an eventual LOAD true */
        if (need_value(fs, e.t) || need_value(fs, e.f)) {
            let fj = (e.k === ek.VJMP) ? NO_JUMP : luaK_jump(fs);
            p_f = code_loadbool(fs, reg, 0, 1);
            p_t = code_loadbool(fs, reg, 1, 0);
            luaK_patchtohere(fs, fj);
        }
        final = luaK_getlabel(fs);
        patchlistaux(fs, e.f, final, reg, p_f);
        patchlistaux(fs, e.t, final, reg, p_t);
    }
    e.f = e.t = NO_JUMP;
    e.u.info = reg;
    e.k = ek.VNONRELOC;
};

/*
** Ensures final expression result (including results from its jump
** lists) is in next available register.
*/
const luaK_exp2nextreg = function(fs, e) {
    luaK_dischargevars(fs, e);
    freeexp(fs, e);
    luaK_reserveregs(fs, 1);
    exp2reg(fs, e, fs.freereg - 1);
};


/*
** Ensures final expression result (including results from its jump
** lists) is in some (any) register and return that register.
*/
const luaK_exp2anyreg = function(fs, e) {
    luaK_dischargevars(fs, e);
    if (e.k === lparser.expkind.VNONRELOC) {  /* expression already has a register? */
        if (!hasjumps(e))  /* no jumps? */
            return e.u.info;  /* result is already in a register */
        if (e.u.info >= fs.nactvar) {  /* reg. is not a local? */
            exp2reg(fs, e, e.u.info);  /* put final result in it */
            return e.u.info;
        }
    }
    luaK_exp2nextreg(fs, e);  /* otherwise, use next available register */
    return e.u.info;
};

/*
** Ensures final expression result is either in a register or in an
** upvalue.
*/
const luaK_exp2anyregup = function(fs, e) {
    if (e.k !== lparser.expkind.VUPVAL || hasjumps(e))
        luaK_exp2anyreg(fs, e);
};

/*
** Ensures final expression result is either in a register or it is
** a constant.
*/
const luaK_exp2val = function(fs, e) {
    if (hasjumps(e))
        luaK_exp2anyreg(fs, e);
    else
        luaK_dischargevars(fs, e);
};

/*
** Ensures final expression result is in a valid R/K index
** (that is, it is either in a register or in 'k' with an index
** in the range of R/K indices).
** Returns R/K index.
*/
const luaK_exp2RK = function(fs, e) {
    let ek = lparser.expkind;
    let vk = false;
    luaK_exp2val(fs, e);
    switch (e.k) {  /* move constants to 'k' */
        case ek.VTRUE: e.u.info = boolK(fs, true); vk = true; break;
        case ek.VFALSE: e.u.info = boolK(fs, false); vk = true; break;
        case ek.VNIL: e.u.info = nilK(fs); vk = true; break;
        case ek.VKINT: e.u.info = luaK_intK(fs, e.u.ival); vk = true; break;
        case ek.VKFLT: e.u.info = luaK_numberK(fs, e.u.nval); vk = true; break;
        case ek.VK: vk = true; break;
        default: break;
    }

    if (vk) {
        e.k = ek.VK;
        if (e.u.info <= lopcodes.MAXINDEXRK)  /* constant fits in 'argC'? */
            return lopcodes.RKASK(e.u.info);
    }

    /* not a constant in the right range: put it in a register */
    return luaK_exp2anyreg(fs, e);
};

/*
** Generate code to store result of expression 'ex' into variable 'var'.
*/
const luaK_storevar = function(fs, vr, ex) {
    let ek = lparser.expkind;
    switch (vr.k) {
        case ek.VLOCAL: {
            freeexp(fs, ex);
            exp2reg(fs, ex, vr.u.info);  /* compute 'ex' into proper place */
            return;
        }
        case ek.VUPVAL: {
            let e = luaK_exp2anyreg(fs, ex);
            luaK_codeABC(fs, OpCodesI.OP_SETUPVAL, e, vr.u.info, 0);
          break;
        }
        case ek.VINDEXED: {
            let op = (vr.u.ind.vt === ek.VLOCAL) ? OpCodesI.OP_SETTABLE : OpCodesI.OP_SETTABUP;
            let e = luaK_exp2RK(fs, ex);
            luaK_codeABC(fs, op, vr.u.ind.t, vr.u.ind.idx, e);
            break;
        }
    }
    freeexp(fs, ex);
};


/*
** Emit SELF instruction (convert expression 'e' into 'e:key(e,').
*/
const luaK_self = function(fs, e, key) {
    luaK_exp2anyreg(fs, e);
    let ereg = e.u.info;  /* register where 'e' was placed */
    freeexp(fs, e);
    e.u.info = fs.freereg;  /* base register for op_self */
    e.k = lparser.expkind.VNONRELOC;  /* self expression has a fixed register */
    luaK_reserveregs(fs, 2);  /* function and 'self' produced by op_self */
    luaK_codeABC(fs, OpCodesI.OP_SELF, e.u.info, ereg, luaK_exp2RK(fs, key));
    freeexp(fs, key);
};

/*
** Negate condition 'e' (where 'e' is a comparison).
*/
const negatecondition = function(fs, e) {
    let pc = getjumpcontrol(fs, e.u.info);
    assert(lopcodes.testTMode(pc.opcode) && pc.opcode !== OpCodesI.OP_TESTSET && pc.opcode !== OpCodesI.OP_TEST);
    lopcodes.SETARG_A(pc, !(pc.A));
};

/*
** Emit instruction to jump if 'e' is 'cond' (that is, if 'cond'
** is true, code will jump if 'e' is true.) Return jump position.
** Optimize when 'e' is 'not' something, inverting the condition
** and removing the 'not'.
*/
const jumponcond = function(fs, e, cond) {
    if (e.k === lparser.expkind.VRELOCABLE) {
        let ie = getinstruction(fs, e);
        if (ie.opcode === OpCodesI.OP_NOT) {
            fs.pc--;  /* remove previous OP_NOT */
            return condjump(fs, OpCodesI.OP_TEST, ie.B, 0, !cond);
        }
        /* else go through */
    }
    discharge2anyreg(fs, e);
    freeexp(fs, e);
    return condjump(fs, OpCodesI.OP_TESTSET, lopcodes.NO_REG, e.u.info, cond);
};

/*
** Emit code to go through if 'e' is true, jump otherwise.
*/
const luaK_goiftrue = function(fs, e) {
    let ek = lparser.expkind;
    let pc;  /* pc of new jump */
    luaK_dischargevars(fs, e);
    switch (e.k) {
        case ek.VJMP: {  /* condition? */
           negatecondition(fs, e);  /* jump when it is false */
           pc = e.u.info;  /* save jump position */
           break;
        }
        case ek.VK: case ek.VKFLT: case ek.VKINT: case ek.VTRUE: {
           pc = NO_JUMP;  /* always true; do nothing */
           break;
        }
        default: {
           pc = jumponcond(fs, e, 0);  /* jump when false */
           break;
        }
    }
    e.f = luaK_concat(fs, e.f, pc);  /* insert new jump in false list */
    luaK_patchtohere(fs, e.t);  /* true list jumps to here (to go through) */
    e.t = NO_JUMP;
};

/*
** Emit code to go through if 'e' is false, jump otherwise.
*/
const luaK_goiffalse = function(fs, e) {
    let ek = lparser.expkind;
    let pc;  /* pc of new jump */
    luaK_dischargevars(fs, e);
    switch (e.k) {
        case ek.VJMP: {
            pc = e.u.info;  /* already jump if true */
            break;
        }
        case ek.VNIL: case ek.VFALSE: {
            pc = NO_JUMP;  /* always false; do nothing */
            break;
        }
        default: {
            pc = jumponcond(fs, e, 1);  /* jump if true */
            break;
        }
    }
    e.t = luaK_concat(fs, e.t, pc);  /* insert new jump in 't' list */
    luaK_patchtohere(fs, e.f);  /* false list jumps to here (to go through) */
    e.f = NO_JUMP;
};

/*
** Code 'not e', doing constant folding.
*/
const codenot = function(fs, e) {
    let ek = lparser.expkind;
    luaK_dischargevars(fs, e);
    switch (e.k) {
        case ek.VNIL: case ek.VFALSE: {
            e.k = ek.VTRUE;  /* true === not nil === not false */
            break;
        }
        case ek.VK: case ek.VKFLT: case ek.VKINT: case ek.VTRUE: {
            e.k = ek.VFALSE;  /* false === not "x" === not 0.5 === not 1 === not true */
            break;
        }
        case ek.VJMP: {
            negatecondition(fs, e);
            break;
        }
        case ek.VRELOCABLE:
        case ek.VNONRELOC: {
            discharge2anyreg(fs, e);
            freeexp(fs, e);
            e.u.info = luaK_codeABC(fs, OpCodesI.OP_NOT, 0, e.u.info, 0);
            e.k = ek.VRELOCABLE;
            break;
        }
    }
    /* interchange true and false lists */
    { let temp = e.f; e.f = e.t; e.t = temp; }
    removevalues(fs, e.f);  /* values are useless when negated */
    removevalues(fs, e.t);
};

/*
** Create expression 't[k]'. 't' must have its final result already in a
** register or upvalue.
*/
const luaK_indexed = function(fs, t, k) {
    let ek = lparser.expkind;
    assert(!hasjumps(t) && (lparser.vkisinreg(t.k) || t.k === ek.VUPVAL));
    t.u.ind.t = t.u.info;  /* register or upvalue index */
    t.u.ind.idx = luaK_exp2RK(fs, k);  /* R/K index for key */
    t.u.ind.vt = (t.k === ek.VUPVAL) ? ek.VUPVAL : ek.VLOCAL;
    t.k = ek.VINDEXED;
};

/*
** Return false if folding can raise an error.
** Bitwise operations need operands convertible to integers; division
** operations cannot have 0 as divisor.
*/
const validop = function(op, v1, v2) {
    switch (op) {
        case defs.LUA_OPBAND: case defs.LUA_OPBOR: case defs.LUA_OPBXOR:
        case defs.LUA_OPSHL: case defs.LUA_OPSHR: case defs.LUA_OPBNOT: {  /* conversion errors */
            return (lvm.tointeger(v1) !== false && lvm.tointeger(v2) !== false);
        }
        case defs.LUA_OPDIV: case defs.LUA_OPIDIV: case defs.LUA_OPMOD:  /* division by 0 */
            return (v2.value !== 0);
        default: return 1;  /* everything else is valid */
    }
};

/*
** Try to "constant-fold" an operation; return 1 iff successful.
** (In this case, 'e1' has the final result.)
*/
const constfolding = function(op, e1, e2) {
    let ek = lparser.expkind;
    let v1, v2;
    if (!(v1 = tonumeral(e1, true)) || !(v2 = tonumeral(e2, true)) || !validop(op, v1, v2))
        return 0;  /* non-numeric operands or not safe to fold */
    let res = new TValue(); /* FIXME */
    lobject.luaO_arith(null, op, v1, v2, res);  /* does operation */
    if (res.ttisinteger()) {
        e1.k = ek.VKINT;
        e1.u.ival = res.value;
    }
    else {  /* folds neither NaN nor 0.0 (to avoid problems with -0.0) */
        let n = res.value;
        if (isNaN(n) || n === 0)
            return false;
        e1.k = ek.VKFLT;
        e1.u.nval = n;
    }
    return true;
};

/*
** Emit code for unary expressions that "produce values"
** (everything but 'not').
** Expression to produce final result will be encoded in 'e'.
*/
const codeunexpval = function(fs, op, e, line) {
   let r = luaK_exp2anyreg(fs, e);  /* opcodes operate only on registers */
   freeexp(fs, e);
   e.u.info = luaK_codeABC(fs, op, 0, r, 0);  /* generate opcode */
   e.k = lparser.expkind.VRELOCABLE;  /* all those operations are relocatable */
   luaK_fixline(fs, line);
};

/*
** Emit code for binary expressions that "produce values"
** (everything but logical operators 'and'/'or' and comparison
** operators).
** Expression to produce final result will be encoded in 'e1'.
** Because 'luaK_exp2RK' can free registers, its calls must be
** in "stack order" (that is, first on 'e2', which may have more
** recent registers to be released).
*/
const codebinexpval = function(fs, op, e1, e2, line) {
    let rk2 = luaK_exp2RK(fs, e2);  /* both operands are "RK" */
    let rk1 = luaK_exp2RK(fs, e1);
    freeexps(fs, e1, e2);
    e1.u.info = luaK_codeABC(fs, op, 0, rk1, rk2);  /* generate opcode */
    e1.k = lparser.expkind.VRELOCABLE;  /* all those operations are relocatable */
    luaK_fixline(fs, line);
};


/*
** Emit code for comparisons.
** 'e1' was already put in R/K form by 'luaK_infix'.
*/
const codecomp = function(fs, opr, e1, e2) {
    let ek = lparser.expkind;

    let rk1;
    if (e1.k === ek.VK)
        rk1 = lopcodes.RKASK(e1.u.info);
    else {
        assert(e1.k === ek.VNONRELOC);
        rk1 = e1.u.info;
    }

    let rk2 = luaK_exp2RK(fs, e2);
    freeexps(fs, e1, e2);
    switch (opr) {
        case BinOpr.OPR_NE: {  /* '(a ~= b)' ==> 'not (a === b)' */
            e1.u.info = condjump(fs, OpCodesI.OP_EQ, 0, rk1, rk2);
            break;
        }
        case BinOpr.OPR_GT: case BinOpr.OPR_GE: {
            /* '(a > b)' ==> '(b < a)';  '(a >= b)' ==> '(b <= a)' */
            let op = (opr - BinOpr.OPR_NE) + OpCodesI.OP_EQ;
            e1.u.info = condjump(fs, op, 1, rk2, rk1);  /* invert operands */
            break;
        }
        default: {  /* '==', '<', '<=' use their own opcodes */
            let op = (opr - BinOpr.OPR_EQ) + OpCodesI.OP_EQ;
            e1.u.info = condjump(fs, op, 1, rk1, rk2);
            break;
        }
    }
    e1.k = ek.VJMP;
};

/*
** Apply prefix operation 'op' to expression 'e'.
*/
const luaK_prefix = function(fs, op, e, line) {
    let ef = new lparser.expdesc();
    ef.k = lparser.expkind.VKINT;
    ef.u.ival = ef.u.nval = ef.u.info = 0;
    ef.t = NO_JUMP;
    ef.f = NO_JUMP;
    switch (op) {
        case UnOpr.OPR_MINUS: case UnOpr.OPR_BNOT:  /* use 'ef' as fake 2nd operand */
            if (constfolding(op + defs.LUA_OPUNM, e, ef))
                break;
            /* FALLTHROUGH */
        case UnOpr.OPR_LEN:
            codeunexpval(fs, op + OpCodesI.OP_UNM, e, line);
            break;
        case UnOpr.OPR_NOT: codenot(fs, e); break;
    }
};

/*
** Process 1st operand 'v' of binary operation 'op' before reading
** 2nd operand.
*/
const luaK_infix = function(fs, op, v) {
    switch (op) {
        case BinOpr.OPR_AND: {
            luaK_goiftrue(fs, v);  /* go ahead only if 'v' is true */
            break;
        }
        case BinOpr.OPR_OR: {
            luaK_goiffalse(fs, v);  /* go ahead only if 'v' is false */
            break;
        }
        case BinOpr.OPR_CONCAT: {
            luaK_exp2nextreg(fs, v);  /* operand must be on the 'stack' */
            break;
        }
        case BinOpr.OPR_ADD: case BinOpr.OPR_SUB:
        case BinOpr.OPR_MUL: case BinOpr.OPR_DIV: case BinOpr.OPR_IDIV:
        case BinOpr.OPR_MOD: case BinOpr.OPR_POW:
        case BinOpr.OPR_BAND: case BinOpr.OPR_BOR: case BinOpr.OPR_BXOR:
        case BinOpr.OPR_SHL: case BinOpr.OPR_SHR: {
            if (!tonumeral(v, false))
                luaK_exp2RK(fs, v);
            /* else keep numeral, which may be folded with 2nd operand */
            break;
        }
        default: {
            luaK_exp2RK(fs, v);
            break;
        }
    }
};

/*
** Finalize code for binary operation, after reading 2nd operand.
** For '(a .. b .. c)' (which is '(a .. (b .. c))', because
** concatenation is right associative), merge second CONCAT into first
** one.
*/
const luaK_posfix = function(fs, op, e1, e2, line) {
    let ek = lparser.expkind;
    switch (op) {
        case BinOpr.OPR_AND: {
            assert(e1.t === NO_JUMP);  /* list closed by 'luK_infix' */
            luaK_dischargevars(fs, e2);
            e2.f = luaK_concat(fs, e2.f, e1.f);
            e1.to(e2);
            break;
        }
        case BinOpr.OPR_OR: {
            assert(e1.f === NO_JUMP);  /* list closed by 'luK_infix' */
            luaK_dischargevars(fs, e2);
            e2.t = luaK_concat(fs, e2.t, e1.t);
            e1.to(e2);
            break;
        }
        case BinOpr.OPR_CONCAT: {
            luaK_exp2val(fs, e2);
            let ins = getinstruction(fs, e2);
            if (e2.k === ek.VRELOCABLE && ins.opcode === OpCodesI.OP_CONCAT) {
                assert(e1.u.info === ins.B - 1);
                freeexp(fs, e1);
                lopcodes.SETARG_B(ins, e1.u.info);
                e1.k = ek.VRELOCABLE; e1.u.info = e2.u.info;
            }
            else {
                luaK_exp2nextreg(fs, e2);  /* operand must be on the 'stack' */
                codebinexpval(fs, OpCodesI.OP_CONCAT, e1, e2, line);
            }
            break;
        }
        case BinOpr.OPR_ADD: case BinOpr.OPR_SUB: case BinOpr.OPR_MUL: case BinOpr.OPR_DIV:
        case BinOpr.OPR_IDIV: case BinOpr.OPR_MOD: case BinOpr.OPR_POW:
        case BinOpr.OPR_BAND: case BinOpr.OPR_BOR: case BinOpr.OPR_BXOR:
        case BinOpr.OPR_SHL: case BinOpr.OPR_SHR: {
            if (!constfolding(op + defs.LUA_OPADD, e1, e2))
                codebinexpval(fs, op + OpCodesI.OP_ADD, e1, e2, line);
            break;
        }
        case BinOpr.OPR_EQ: case BinOpr.OPR_LT: case BinOpr.OPR_LE:
        case BinOpr.OPR_NE: case BinOpr.OPR_GT: case BinOpr.OPR_GE: {
            codecomp(fs, op, e1, e2);
            break;
        }
    }

    return e1;
};

/*
** Change line information associated with current position.
*/
const luaK_fixline = function(fs, line) {
    fs.f.lineinfo[fs.pc - 1] = line;
};

/*
** Emit a SETLIST instruction.
** 'base' is register that keeps table;
** 'nelems' is #table plus those to be stored now;
** 'tostore' is number of values (in registers 'base + 1',...) to add to
** table (or LUA_MULTRET to add up to stack top).
*/
const luaK_setlist = function(fs, base, nelems, tostore) {
    let c =  (nelems - 1)/lopcodes.LFIELDS_PER_FLUSH + 1;
    let b = (tostore === defs.LUA_MULTRET) ? 0 : tostore;
    assert(tostore !== 0 && tostore <= lopcodes.LFIELDS_PER_FLUSH);
    if (c <= lopcodes.MAXARG_C)
        luaK_codeABC(fs, OpCodesI.OP_SETLIST, base, b, c);
    else if (c <= lopcodes.MAXARG_Ax) {
        luaK_codeABC(fs, OpCodesI.OP_SETLIST, base, b, 0);
        codeextraarg(fs, c);
    }
    else
        llex.luaX_syntaxerror(fs.ls, defs.to_luastring("constructor too long", true));
    fs.freereg = base + 1;  /* free registers with list values */
};


module.exports.BinOpr             = BinOpr;
module.exports.NO_JUMP            = NO_JUMP;
module.exports.UnOpr              = UnOpr;
module.exports.getinstruction     = getinstruction;
module.exports.luaK_checkstack    = luaK_checkstack;
module.exports.luaK_code          = luaK_code;
module.exports.luaK_codeABC       = luaK_codeABC;
module.exports.luaK_codeABx       = luaK_codeABx;
module.exports.luaK_codeAsBx      = luaK_codeAsBx;
module.exports.luaK_codek         = luaK_codek;
module.exports.luaK_concat        = luaK_concat;
module.exports.luaK_dischargevars = luaK_dischargevars;
module.exports.luaK_exp2RK        = luaK_exp2RK;
module.exports.luaK_exp2anyreg    = luaK_exp2anyreg;
module.exports.luaK_exp2anyregup  = luaK_exp2anyregup;
module.exports.luaK_exp2nextreg   = luaK_exp2nextreg;
module.exports.luaK_exp2val       = luaK_exp2val;
module.exports.luaK_fixline       = luaK_fixline;
module.exports.luaK_getlabel      = luaK_getlabel;
module.exports.luaK_goiffalse     = luaK_goiffalse;
module.exports.luaK_goiftrue      = luaK_goiftrue;
module.exports.luaK_indexed       = luaK_indexed;
module.exports.luaK_infix         = luaK_infix;
module.exports.luaK_intK          = luaK_intK;
module.exports.luaK_jump          = luaK_jump;
module.exports.luaK_jumpto        = luaK_jumpto;
module.exports.luaK_nil           = luaK_nil;
module.exports.luaK_numberK       = luaK_numberK;
module.exports.luaK_patchclose    = luaK_patchclose;
module.exports.luaK_patchlist     = luaK_patchlist;
module.exports.luaK_patchtohere   = luaK_patchtohere;
module.exports.luaK_posfix        = luaK_posfix;
module.exports.luaK_prefix        = luaK_prefix;
module.exports.luaK_reserveregs   = luaK_reserveregs;
module.exports.luaK_ret           = luaK_ret;
module.exports.luaK_self          = luaK_self;
module.exports.luaK_setlist       = luaK_setlist;
module.exports.luaK_setmultret    = luaK_setmultret;
module.exports.luaK_setoneret     = luaK_setoneret;
module.exports.luaK_setreturns    = luaK_setreturns;
module.exports.luaK_storevar      = luaK_storevar;
module.exports.luaK_stringK       = luaK_stringK;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint esversion: 6 */


const assert  = __webpack_require__(0);

const defs     = __webpack_require__(1);
const ldo      = __webpack_require__(7);
const lfunc    = __webpack_require__(12);
const lobject  = __webpack_require__(3);
const lopcodes = __webpack_require__(16);
const lstring  = __webpack_require__(9);
const lzio     = __webpack_require__(21);

let LUAC_DATA = [0x19, 0x93, defs.char["\r"], defs.char["\n"], 0x1a, defs.char["\n"]];

class BytecodeParser {

    constructor(L, Z, name) {
        this.intSize = 4;
        this.size_tSize = 4;
        this.instructionSize = 4;
        this.integerSize = 4;
        this.numberSize = 8;

        assert(Z instanceof lzio.ZIO, "BytecodeParser only operates on a ZIO");
        assert(defs.is_luastring(name));

        if (name[0] == defs.char["@"] || name[0] == defs.char["="])
            this.name = name.slice(1);
        else if (name[0] == defs.LUA_SIGNATURE.charCodeAt(0))
            this.name = defs.to_luastring("binary string", true);
        else
            this.name = name;

        this.L = L;
        this.Z = Z;

        // Used to do buffer to number conversions
        this.arraybuffer = new ArrayBuffer(
            Math.max(this.intSize, this.size_tSize, this.instructionSize, this.integerSize, this.numberSize)
        );
        this.dv = new DataView(this.arraybuffer);
        this.u8 = new Uint8Array(this.arraybuffer);
    }

    read(size) {
        let u8 = new Uint8Array(size);
        if(lzio.luaZ_read(this.Z, u8, 0, size) !== 0)
            this.error("truncated");
        return Array.from(u8);
    }

    readByte() {
        if (lzio.luaZ_read(this.Z, this.u8, 0, 1) !== 0)
            this.error("truncated");
        return this.u8[0];
    }

    readInteger() {
        if (lzio.luaZ_read(this.Z, this.u8, 0, this.integerSize) !== 0)
            this.error("truncated");
        return this.dv.getInt32(0, true);
    }

    readSize_t() {
        return this.readInteger();
    }

    readInt() {
        if (lzio.luaZ_read(this.Z, this.u8, 0, this.intSize) !== 0)
            this.error("truncated");
        return this.dv.getInt32(0, true);
    }

    readNumber() {
        if (lzio.luaZ_read(this.Z, this.u8, 0, this.numberSize) !== 0)
            this.error("truncated");
        return this.dv.getFloat64(0, true);
    }

    readString() {
        let size = Math.max(this.readByte() - 1, 0);

        if (size + 1 === 0xFF)
            size = this.readSize_t() - 1;

        if (size === 0) {
            return null;
        }

        return lstring.luaS_bless(this.L, this.read(size));
    }

    /* creates a mask with 'n' 1 bits at position 'p' */
    static MASK1(n, p) {
        return ((~((~0)<<(n)))<<(p));
    }

    /* creates a mask with 'n' 0 bits at position 'p' */
    static MASK0(n, p) {
        return (~BytecodeParser.MASK1(n,p));
    }

    readInstruction() {
        if (lzio.luaZ_read(this.Z, this.u8, 0, this.instructionSize) !== 0)
            this.error("truncated");
        return this.dv.getUint32(0, true);
    }

    readCode(f) {
        let n = this.readInt();
        let o = lopcodes;
        let p = BytecodeParser;

        for (let i = 0; i < n; i++) {
            let ins = this.readInstruction();
            f.code[i] = {
                code:   ins,
                opcode: (ins >> o.POS_OP) & p.MASK1(o.SIZE_OP, 0),
                A:      (ins >> o.POS_A)  & p.MASK1(o.SIZE_A,  0),
                B:      (ins >> o.POS_B)  & p.MASK1(o.SIZE_B,  0),
                C:      (ins >> o.POS_C)  & p.MASK1(o.SIZE_C,  0),
                Bx:     (ins >> o.POS_Bx) & p.MASK1(o.SIZE_Bx, 0),
                Ax:     (ins >> o.POS_Ax) & p.MASK1(o.SIZE_Ax, 0),
                sBx:    ((ins >> o.POS_Bx) & p.MASK1(o.SIZE_Bx, 0)) - o.MAXARG_sBx
            };
        }
    }

    readUpvalues(f) {
        let n = this.readInt();

        for (let i = 0; i < n; i++) {
            f.upvalues[i] = {
                name:    null,
                instack: this.readByte(),
                idx:     this.readByte()
            };
        }
    }

    readConstants(f) {
        let n = this.readInt();

        for (let i = 0; i < n; i++) {
            let t = this.readByte();

            switch (t) {
            case defs.CT.LUA_TNIL:
                f.k.push(new lobject.TValue(defs.CT.LUA_TNIL, null));
                break;
            case defs.CT.LUA_TBOOLEAN:
                f.k.push(new lobject.TValue(defs.CT.LUA_TBOOLEAN, this.readByte() !== 0));
                break;
            case defs.CT.LUA_TNUMFLT:
                f.k.push(new lobject.TValue(defs.CT.LUA_TNUMFLT, this.readNumber()));
                break;
            case defs.CT.LUA_TNUMINT:
                f.k.push(new lobject.TValue(defs.CT.LUA_TNUMINT, this.readInteger()));
                break;
            case defs.CT.LUA_TSHRSTR:
            case defs.CT.LUA_TLNGSTR:
                f.k.push(new lobject.TValue(defs.CT.LUA_TLNGSTR, this.readString()));
                break;
            default:
                this.error(`unrecognized constant '${t}'`);
            }
        }
    }

    readProtos(f) {
        let n = this.readInt();

        for (let i = 0; i < n; i++) {
            f.p[i] = new lfunc.Proto(this.L);
            this.readFunction(f.p[i], f.source);
        }
    }

    readDebug(f) {
        let n = this.readInt();
        for (let i = 0; i < n; i++)
            f.lineinfo[i] = this.readInt();

        n = this.readInt();
        for (let i = 0; i < n; i++) {
            f.locvars[i] = {
                varname: this.readString(),
                startpc: this.readInt(),
                endpc:   this.readInt()
            };
        }

        n = this.readInt();
        for (let i = 0; i < n; i++) {
            f.upvalues[i].name = this.readString();
        }
    }

    readFunction(f, psource) {
        f.source = this.readString();
        if (f.source === null)  /* no source in dump? */
            f.source = psource;  /* reuse parent's source */
        f.linedefined = this.readInt();
        f.lastlinedefined = this.readInt();
        f.numparams = this.readByte();
        f.is_vararg = this.readByte() !== 0;
        f.maxstacksize = this.readByte();
        this.readCode(f);
        this.readConstants(f);
        this.readUpvalues(f);
        this.readProtos(f);
        this.readDebug(f);
    }

    checkliteral(s, msg) {
        let buff = this.read(s.length);
        if (buff.join() !== s.join())
            this.error(msg);
    }

    checkHeader() {
        this.checkliteral(defs.to_luastring(defs.LUA_SIGNATURE.substring(1)), "not a"); /* 1st char already checked */

        if (this.readByte() !== 0x53)
            this.error("version mismatch in");

        if (this.readByte() !== 0)
            this.error("format mismatch in");

        this.checkliteral(LUAC_DATA, "corrupted");

        this.intSize         = this.readByte();
        this.size_tSize      = this.readByte();
        this.instructionSize = this.readByte();
        this.integerSize     = this.readByte();
        this.numberSize      = this.readByte();

        this.checksize(this.intSize, 4, "int");
        this.checksize(this.size_tSize, 4, "size_t");
        this.checksize(this.instructionSize, 4, "instruction");
        this.checksize(this.integerSize, 4, "integer");
        this.checksize(this.numberSize, 8, "number");

        if (this.readInteger() !== 0x5678)
            this.error("endianness mismatch in");

        if (this.readNumber() !== 370.5)
            this.error("float format mismatch in");

    }

    error(why) {
        lobject.luaO_pushfstring(this.L, defs.to_luastring("%s: %s precompiled chunk"), this.name, defs.to_luastring(why));
        ldo.luaD_throw(this.L, defs.thread_status.LUA_ERRSYNTAX);
    }

    checksize(byte, size, tname) {
        if (byte !== size)
            this.error(`${tname} size mismatch in`);
    }
}

const luaU_undump = function(L, Z, name) {
    let S = new BytecodeParser(L, Z, name);
    S.checkHeader();
    let cl = lfunc.luaF_newLclosure(L, S.readByte());
    ldo.luaD_inctop(L);
    L.stack[L.top-1].setclLvalue(cl);
    cl.p = new lfunc.Proto(L);
    S.readFunction(cl.p, null);
    assert(cl.nupvalues === cl.p.upvalues.length);
    /* luai_verifycode */
    return cl;
};

module.exports.luaU_undump = luaU_undump;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defs    = __webpack_require__(1);
const CT      = defs.constant_types;

const LUAC_DATA    = "\x19\x93\r\n\x1a\n";
const LUAC_INT     = 0x5678;
const LUAC_NUM     = 370.5;
const LUAC_VERSION = Number.parseInt(defs.LUA_VERSION_MAJOR) * 16 + Number.parseInt(defs.LUA_VERSION_MINOR);
const LUAC_FORMAT  = 0;   /* this is the official format */

class DumpState {
    constructor() {
        this.L = null;
        this.write = null;
        this.data = null;
        this.strip = NaN;
        this.status = NaN;
    }
}

const DumpBlock = function(b, size, D) {
    if (D.status === 0 && size > 0)
        D.status = D.writer(D.L, b, size, D.data);
};

const DumpLiteral = function(s, D) {
    s = defs.to_luastring(s);
    DumpBlock(s, s.length, D);
};

const DumpByte = function(y, D) {
    DumpBlock([y], 1, D);
};

const DumpInt = function(x, D) {
    let dv = new DataView(new ArrayBuffer(4));
    dv.setInt32(0, x, true);
    let t = [];
    for (let i = 0; i < 4; i++)
        t.push(dv.getUint8(i, true));

    DumpBlock(t, 4, D);
};

const DumpInteger = function(x, D) {
    let dv = new DataView(new ArrayBuffer(4));
    dv.setInt32(0, x, true);
    let t = [];
    for (let i = 0; i < 4; i++)
        t.push(dv.getUint8(i, true));
    DumpBlock(t, 8, D);
};

const DumpNumber = function(x, D) {
    let dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, x, true);
    let t = [];
    for (let i = 0; i < 8; i++)
        t.push(dv.getUint8(i, true));

    DumpBlock(t, 8, D);
};

const DumpString = function(s, D) {
    if (s === null)
        DumpByte(0, D);
    else {
        let size = s.tsslen() + 1;
        let str = s.getstr();
        if (size < 0xFF)
            DumpByte(size, D);
        else {
            DumpByte(0xFF, D);
            DumpInteger(size, D);
        }
        DumpBlock(str, size - 1, D);  /* no need to save '\0' */
    }
};

const DumpCode = function(f, D) {
    let s = f.code.map(e => e.code);
    DumpInt(s.length, D);

    for (let i = 0; i < s.length; i++)
        DumpInt(s[i], D);
};

const DumpConstants = function(f, D) {
    let n = f.k.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++) {
        let o = f.k[i];
        DumpByte(o.ttype(), D);
        switch (o.ttype()) {
            case CT.LUA_TNIL:
                break;
            case CT.LUA_TBOOLEAN:
                DumpByte(o.value ? 1 : 0, D);
                break;
            case CT.LUA_TNUMFLT:
                DumpNumber(o.value, D);
                break;
            case CT.LUA_TNUMINT:
                DumpInteger(o.value, D);
                break;
            case CT.LUA_TSHRSTR:
            case CT.LUA_TLNGSTR:
                DumpString(o.tsvalue(), D);
                break;
        }
    }
};

const DumpProtos = function(f, D) {
    let n = f.p.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++)
        DumpFunction(f.p[i], f.source, D);
};

const DumpUpvalues = function(f, D) {
    let n = f.upvalues.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++) {
        DumpByte(f.upvalues[i].instack ? 1 : 0, D);
        DumpByte(f.upvalues[i].idx, D);
    }
};

const DumpDebug = function(f, D) {
    let n = D.strip ? 0 : f.lineinfo.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++)
        DumpInt(f.lineinfo[i], D);
    n = D.strip ? 0 : f.locvars.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++) {
        DumpString(f.locvars[i].varname, D);
        DumpInt(f.locvars[i].startpc, D);
        DumpInt(f.locvars[i].endpc, D);
    }
    n = D.strip ? 0 : f.upvalues.length;
    DumpInt(n, D);
    for (let i = 0; i < n; i++)
        DumpString(f.upvalues[i].name, D);
};

const DumpFunction = function(f, psource, D) {
    if (D.strip || f.source === psource)
        DumpString(null, D);  /* no debug info or same source as its parent */
    else
        DumpString(f.source, D);
    DumpInt(f.linedefined, D);
    DumpInt(f.lastlinedefined, D);
    DumpByte(f.numparams, D);
    DumpByte(f.is_vararg?1:0, D);
    DumpByte(f.maxstacksize, D);
    DumpCode(f, D);
    DumpConstants(f, D);
    DumpUpvalues(f, D);
    DumpProtos(f, D);
    DumpDebug(f, D);
};

const DumpHeader = function(D) {
  DumpLiteral(defs.LUA_SIGNATURE, D);
  DumpByte(LUAC_VERSION, D);
  DumpByte(LUAC_FORMAT, D);
  let cdata = LUAC_DATA.split('').map(e => e.charCodeAt(0));
  DumpBlock(cdata, cdata.length, D);
  DumpByte(4, D); // intSize
  DumpByte(4, D); // size_tSize
  DumpByte(4, D); // instructionSize
  DumpByte(4, D); // integerSize
  DumpByte(8, D); // numberSize
  DumpInteger(LUAC_INT, D);
  DumpNumber(LUAC_NUM, D);
};

/*
** dump Lua function as precompiled chunk
*/
const luaU_dump = function(L, f, w, data, strip) {
    let D = new DumpState();
    D.L = L;
    D.writer = w;
    D.data = data;
    D.strip = strip;
    D.status = 0;
    DumpHeader(D);
    DumpByte(f.upvalues.length, D);
    DumpFunction(f, null, D);
    return D.status;
};

module.exports.luaU_dump = luaU_dump;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const lua      = __webpack_require__(2);
const lauxlib  = __webpack_require__(6);
const lbaselib = __webpack_require__(45);
const lcorolib = __webpack_require__(30);
const lmathlib = __webpack_require__(31);
const lstrlib  = __webpack_require__(32);
const ltablib  = __webpack_require__(33);
const lutf8lib = __webpack_require__(34);
const ldblib   = __webpack_require__(35);
const loslib   = __webpack_require__(36);
const loadlib  = __webpack_require__(37);
const lualib   = __webpack_require__(29);

const luaL_openlibs = function(L) {
    const loadedlibs = {
        [lualib.LUA_LOADLIBNAME]: loadlib.luaopen_package,
        [lualib.LUA_COLIBNAME]:   lcorolib.luaopen_coroutine,
        [lualib.LUA_DBLIBNAME]:   ldblib.luaopen_debug,
        [lualib.LUA_MATHLIBNAME]: lmathlib.luaopen_math,
        [lualib.LUA_OSLIBNAME]:   loslib.luaopen_os,
        [lualib.LUA_STRLIBNAME]:  lstrlib.luaopen_string,
        [lualib.LUA_TABLIBNAME]:  ltablib.luaopen_table,
        [lualib.LUA_UTF8LIBNAME]: lutf8lib.luaopen_utf8,
        "_G":                     lbaselib.luaopen_base
    };

    if (false) loadedlibs[lualib.LUA_IOLIBNAME] = require('./liolib.js').luaopen_io;

    /* "require" functions from 'loadedlibs' and set results to global table */
    for (let lib in loadedlibs) {
        lauxlib.luaL_requiref(L, lua.to_luastring(lib), loadedlibs[lib], 1);
        lua.lua_pop(L, 1); /* remove lib */
    }
};

module.exports.luaL_openlibs = luaL_openlibs;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

const lua     = __webpack_require__(2);
const lauxlib = __webpack_require__(6);

const luaB_print = function(L) {
    let n = lua.lua_gettop(L); /* number of arguments */
    let str = [];

    lua.lua_getglobal(L, lua.to_luastring("tostring", true));
    for (let i = 1; i <= n; i++) {
        lua.lua_pushvalue(L, -1);  /* function to be called */
        lua.lua_pushvalue(L, i);  /* value to print */
        lua.lua_call(L, 1, 1);
        let s = lua.lua_tolstring(L, -1);
        if (s === null)
            return lauxlib.luaL_error(L, lua.to_luastring("'tostring' must return a string to 'print'", true));
        if (i > 1) str.push("\t".charCodeAt(0));
        str = str.concat(s);
        lua.lua_pop(L, 1);
    }

    // Don't use console.log if Node
    if (process.stdout) {
        str.push("\n".charCodeAt(0));
        process.stdout.write(Buffer.from(str));
    } else console.log(lua.to_jsstring(str));
    return 0;
};

const luaB_tostring = function(L) {
    lauxlib.luaL_checkany(L, 1);
    lauxlib.luaL_tolstring(L, 1);

    return 1;
};

const luaB_getmetatable = function(L) {
    lauxlib.luaL_checkany(L, 1);
    if (!lua.lua_getmetatable(L, 1)) {
        lua.lua_pushnil(L);
        return 1;  /* no metatable */
    }
    lauxlib.luaL_getmetafield(L, 1, lua.to_luastring("__metatable", true));
    return 1;  /* returns either __metatable field (if present) or metatable */
};

const luaB_setmetatable = function(L) {
    let t = lua.lua_type(L, 2);
    lauxlib.luaL_checktype(L, 1, lua.LUA_TTABLE);
    lauxlib.luaL_argcheck(L, t === lua.LUA_TNIL || t === lua.LUA_TTABLE, 2, lua.to_luastring("nil or table expected", true));
    if (lauxlib.luaL_getmetafield(L, 1, lua.to_luastring("__metatable", true)) !== lua.LUA_TNIL)
        return lauxlib.luaL_error(L, lua.to_luastring("cannot change a protected metatable", true));
    lua.lua_settop(L, 2);
    lua.lua_setmetatable(L, 1);
    return 1;
};

const luaB_rawequal = function(L) {
    lauxlib.luaL_checkany(L, 1);
    lauxlib.luaL_checkany(L, 2);
    lua.lua_pushboolean(L, lua.lua_rawequal(L, 1, 2));
    return 1;
};

const luaB_rawlen = function(L) {
    let t = lua.lua_type(L, 1);
    lauxlib.luaL_argcheck(L, t === lua.LUA_TTABLE || t === lua.LUA_TSTRING, 1, lua.to_luastring("table or string expected", true));
    lua.lua_pushinteger(L, lua.lua_rawlen(L, 1));
    return 1;
};

const luaB_rawget = function(L) {
    lauxlib.luaL_checktype(L, 1, lua.LUA_TTABLE);
    lauxlib.luaL_checkany(L, 2);
    lua.lua_settop(L, 2);
    lua.lua_rawget(L, 1);
    return 1;
};

const luaB_rawset = function(L) {
    lauxlib.luaL_checktype(L, 1, lua.LUA_TTABLE);
    lauxlib.luaL_checkany(L, 2);
    lauxlib.luaL_checkany(L, 3);
    lua.lua_settop(L, 3);
    lua.lua_rawset(L, 1);
    return 1;
};

const opts = ["stop", "restart", "collect",
"count", "step", "setpause", "setstepmul",
"isrunning"].map((e) => lua.to_luastring(e));
const luaB_collectgarbage = function(L) {
    lauxlib.luaL_checkoption(L, 1, lua.to_luastring("collect"), opts);
    lauxlib.luaL_optinteger(L, 2, 0);
    lauxlib.luaL_error(L, lua.to_luastring("lua_gc not implemented"));
};

const luaB_type = function(L) {
    let t = lua.lua_type(L, 1);
    lauxlib.luaL_argcheck(L, t !== lua.LUA_TNONE, 1, lua.to_luastring("value expected", true));
    lua.lua_pushstring(L, lua.lua_typename(L, t));
    return 1;
};

const pairsmeta = function(L, method, iszero, iter) {
    lauxlib.luaL_checkany(L, 1);
    if (lauxlib.luaL_getmetafield(L, 1, method) === lua.LUA_TNIL) {  /* no metamethod? */
        lua.lua_pushcfunction(L, iter);  /* will return generator, */
        lua.lua_pushvalue(L, 1);  /* state, */
        if (iszero) lua.lua_pushinteger(L, 0);  /* and initial value */
        else lua.lua_pushnil(L);
    } else {
        lua.lua_pushvalue(L, 1);  /* argument 'self' to metamethod */
        lua.lua_call(L, 1, 3);  /* get 3 values from metamethod */
    }
    return 3;
};

const luaB_next = function(L) {
    lauxlib.luaL_checktype(L, 1, lua.LUA_TTABLE);
    lua.lua_settop(L, 2);  /* create a 2nd argument if there isn't one */
    if (lua.lua_next(L, 1))
        return 2;
    else {
        lua.lua_pushnil(L);
        return 1;
    }
};

const luaB_pairs = function(L) {
    return pairsmeta(L, lua.to_luastring("__pairs", true), 0, luaB_next);
};

/*
** Traversal function for 'ipairs'
*/
const ipairsaux = function(L) {
    let i = lauxlib.luaL_checkinteger(L, 2) + 1;
    lua.lua_pushinteger(L, i);
    return lua.lua_geti(L, 1, i) === lua.LUA_TNIL ? 1 : 2;
};

/*
** 'ipairs' function. Returns 'ipairsaux', given "table", 0.
** (The given "table" may not be a table.)
*/
const luaB_ipairs = function(L) {
    // Lua 5.2
    // return pairsmeta(L, "__ipairs", 1, ipairsaux);

    lauxlib.luaL_checkany(L, 1);
    lua.lua_pushcfunction(L, ipairsaux);  /* iteration function */
    lua.lua_pushvalue(L, 1);  /* state */
    lua.lua_pushinteger(L, 0);  /* initial value */
    return 3;
};

const b_str2int = function(s, base) {
    let r = /^[\t\v\f \n\r]*([\+\-]?)0*([0-9A-Za-z]+)[\t\v\f \n\r]*$/.exec(lua.to_jsstring(s));
    if (!r) return null;
    let neg = r[1] === "-";
    let digits = r[2];
    let n = 0;
    for (let si=0; si<digits.length; si++) {
        let digit = /\d/.test(digits[si]) ? (digits.charCodeAt(si) - '0'.charCodeAt(0))
                       : (digits[si].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 10);
        if (digit >= base) return null;  /* invalid numeral */
        n = ((n * base)|0) + digit;
    }
    return (neg ? -n : n)|0;
};

const luaB_tonumber = function(L) {
    if (lua.lua_type(L, 2) <= 0) {  /* standard conversion? */
        lauxlib.luaL_checkany(L, 1);
        if (lua.lua_type(L, 1) === lua.LUA_TNUMBER) {  /* already a number? */
            lua.lua_settop(L, 1);
            return 1;
        } else {
            let s = lua.lua_tostring(L, 1);
            if (s !== null && lua.lua_stringtonumber(L, s) === s.length+1)
                return 1;  /* successful conversion to number */
        }
    } else {
        let base = lauxlib.luaL_checkinteger(L, 2);
        lauxlib.luaL_checktype(L, 1, lua.LUA_TSTRING);  /* no numbers as strings */
        let s = lua.lua_tostring(L, 1);
        lauxlib.luaL_argcheck(L, 2 <= base && base <= 36, 2, lua.to_luastring("base out of range", true));
        let n = b_str2int(s, base);
        if (n !== null) {
            lua.lua_pushinteger(L, n);
            return 1;
        }
    }

    lua.lua_pushnil(L);
    return 1;
};

const luaB_error = function(L) {
    let level = lauxlib.luaL_optinteger(L, 2, 1);
    lua.lua_settop(L, 1);
    if (lua.lua_type(L, 1) === lua.LUA_TSTRING && level > 0) {
        lauxlib.luaL_where(L, level);  /* add extra information */
        lua.lua_pushvalue(L, 1);
        lua.lua_concat(L, 2);
    }
    return lua.lua_error(L);
};

const luaB_assert = function(L) {
    if (lua.lua_toboolean(L, 1))  /* condition is true? */
        return lua.lua_gettop(L);  /* return all arguments */
    else {
        lauxlib.luaL_checkany(L, 1);  /* there must be a condition */
        lua.lua_remove(L, 1);  /* remove it */
        lua.lua_pushliteral(L, "assertion failed!");  /* default message */
        lua.lua_settop(L, 1);  /* leave only message (default if no other one) */
        return luaB_error(L);  /* call 'error' */
    }
};

const luaB_select = function(L) {
    let n = lua.lua_gettop(L);
    if (lua.lua_type(L, 1) === lua.LUA_TSTRING && lua.lua_tostring(L, 1)[0] === "#".charCodeAt(0)) {
        lua.lua_pushinteger(L, n - 1);
        return 1;
    } else {
        let i = lauxlib.luaL_checkinteger(L, 1);
        if (i < 0) i = n + i;
        else if (i > n) i = n;
        lauxlib.luaL_argcheck(L, 1 <= i, 1, lua.to_luastring("index out of range", true));
        return n - i;
    }
};

/*
** Continuation function for 'pcall' and 'xpcall'. Both functions
** already pushed a 'true' before doing the call, so in case of success
** 'finishpcall' only has to return everything in the stack minus
** 'extra' values (where 'extra' is exactly the number of items to be
** ignored).
*/
const finishpcall = function(L, status, extra) {
    if (status !== lua.LUA_OK && status !== lua.LUA_YIELD) {  /* error? */
        lua.lua_pushboolean(L, 0);  /* first result (false) */
        lua.lua_pushvalue(L, -2);  /* error message */
        return 2;  /* return false, msg */
    } else
        return lua.lua_gettop(L) - extra;
};

const luaB_pcall = function(L) {
    lauxlib.luaL_checkany(L, 1);
    lua.lua_pushboolean(L, 1);  /* first result if no errors */
    lua.lua_insert(L, 1);  /* put it in place */
    let status = lua.lua_pcallk(L, lua.lua_gettop(L) - 2, lua.LUA_MULTRET, 0, 0, finishpcall);
    return finishpcall(L, status, 0);
};

/*
** Do a protected call with error handling. After 'lua_rotate', the
** stack will have <f, err, true, f, [args...]>; so, the function passes
** 2 to 'finishpcall' to skip the 2 first values when returning results.
*/
const luaB_xpcall = function(L) {
    let n = lua.lua_gettop(L);
    lauxlib.luaL_checktype(L, 2, lua.LUA_TFUNCTION);  /* check error function */
    lua.lua_pushboolean(L, 1);  /* first result */
    lua.lua_pushvalue(L, 1);  /* function */
    lua.lua_rotate(L, 3, 2);  /* move them below function's arguments */
    let status = lua.lua_pcallk(L, n - 2, lua.LUA_MULTRET, 2, 2, finishpcall);
    return finishpcall(L, status, 2);
};

// TODO: does it overwrite the upvalue of the previous closure ?
const load_aux = function(L, status, envidx) {
    if (status === lua.LUA_OK) {
        if (envidx !== 0) {  /* 'env' parameter? */
            lua.lua_pushvalue(L, envidx);  /* environment for loaded function */
            if (!lua.lua_setupvalue(L, -2, 1))  /* set it as 1st upvalue */
                lua.lua_pop(L, 1);  /* remove 'env' if not used by previous call */
        }
        return 1;
    } else {  /* error (message is on top of the stack) */
        lua.lua_pushnil(L);
        lua.lua_insert(L, -2);  /* put before error message */
        return 2;  /* return nil plus error message */
    }
};

/*
** reserved slot, above all arguments, to hold a copy of the returned
** string to avoid it being collected while parsed. 'load' has four
** optional arguments (chunk, source name, mode, and environment).
*/
const RESERVEDSLOT = 5;

/*
** Reader for generic 'load' function: 'lua_load' uses the
** stack for internal stuff, so the reader cannot change the
** stack top. Instead, it keeps its resulting string in a
** reserved slot inside the stack.
*/
const generic_reader = function(L, ud) {
    lauxlib.luaL_checkstack(L, 2, lua.to_luastring("too many nested functions", true));
    lua.lua_pushvalue(L, 1);  /* get function */
    lua.lua_call(L, 0, 1);  /* call it */
    if (lua.lua_isnil(L, -1)) {
        lua.lua_pop(L, 1);  /* pop result */
        return null;
    } else if (!lua.lua_isstring(L, -1))
        lauxlib.luaL_error(L, lua.to_luastring("reader function must return a string", true));
    lua.lua_replace(L, RESERVEDSLOT);  /* save string in reserved slot */
    return lua.lua_tostring(L, RESERVEDSLOT);
};

const luaB_load = function(L) {
    let s = lua.lua_tostring(L, 1);
    let mode = lauxlib.luaL_optstring(L, 3, lua.to_luastring("bt", true));
    let env = !lua.lua_isnone(L, 4) ? 4 : 0;  /* 'env' index or 0 if no 'env' */
    let status;
    if (s !== null) {  /* loading a string? */
        let chunkname = lauxlib.luaL_optstring(L, 2, s);
        status = lauxlib.luaL_loadbufferx(L, s, s.length, chunkname, mode);
    } else {  /* loading from a reader function */
        let chunkname = lauxlib.luaL_optstring(L, 2, lua.to_luastring("=(load)", true));
        lauxlib.luaL_checktype(L, 1, lua.LUA_TFUNCTION);
        lua.lua_settop(L, RESERVEDSLOT);  /* create reserved slot */
        status = lua.lua_load(L, generic_reader, null, chunkname, mode);
    }
    return load_aux(L, status, env);
};

const base_funcs = {
    "assert":         luaB_assert,
    "collectgarbage": luaB_collectgarbage,
    "error":          luaB_error,
    "getmetatable":   luaB_getmetatable,
    "ipairs":         luaB_ipairs,
    "load":           luaB_load,
    "next":           luaB_next,
    "pairs":          luaB_pairs,
    "pcall":          luaB_pcall,
    "print":          luaB_print,
    "rawequal":       luaB_rawequal,
    "rawget":         luaB_rawget,
    "rawlen":         luaB_rawlen,
    "rawset":         luaB_rawset,
    "select":         luaB_select,
    "setmetatable":   luaB_setmetatable,
    "tonumber":       luaB_tonumber,
    "tostring":       luaB_tostring,
    "type":           luaB_type,
    "xpcall":         luaB_xpcall
};

// Only with Node
if (false) {

    const luaB_loadfile = function(L) {
        let fname = lauxlib.luaL_optstring(L, 1, null);
        let mode = lauxlib.luaL_optstring(L, 2, null);
        let env = !lua.lua_isnone(L, 3) ? 3 : 0;  /* 'env' index or 0 if no 'env' */
        let status = lauxlib.luaL_loadfilex(L, fname, mode);
        return load_aux(L, status, env);
    };

    const dofilecont = function(L, d1, d2) {
        return lua.lua_gettop(L) - 1;
    };

    const luaB_dofile = function(L) {
        let fname = lauxlib.luaL_optstring(L, 1, null);
        lua.lua_settop(L, 1);
        if (lauxlib.luaL_loadfile(L, fname) !== lua.LUA_OK)
            return lua.lua_error(L);
        lua.lua_callk(L, 0, lua.LUA_MULTRET, 0, dofilecont);
        return dofilecont(L, 0, 0);
    };

    base_funcs.loadfile = luaB_loadfile;
    base_funcs.dofile   = luaB_dofile;

}

const luaopen_base = function(L) {
    /* open lib into global table */
    lua.lua_pushglobaltable(L);
    lauxlib.luaL_setfuncs(L, base_funcs, 0);
    /* set global _G */
    lua.lua_pushvalue(L, -1);
    lua.lua_setfield(L, -2, lua.to_luastring("_G", true));
    /* set global _VERSION */
    lua.lua_pushliteral(L, lua.LUA_VERSION);
    lua.lua_setfield(L, -2, lua.to_luastring("_VERSION", true));
    return 1;
};

module.exports.luaopen_base = luaopen_base;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(46).Buffer))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(47)
var ieee754 = __webpack_require__(48)
var isArray = __webpack_require__(49)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(51);

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = __webpack_require__(52);

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = __webpack_require__(53);

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = __webpack_require__(54);

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = __webpack_require__(55);

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = __webpack_require__(56);

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = __webpack_require__(57);

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (__webpack_require__(4) && __webpack_require__(18)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  __webpack_require__(4)   // present with an AMD loader
);



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
var global = this,
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = __webpack_require__(58);
  } catch (ex) {}
} else if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return seedrandom; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 59 */
/***/ (function(module, exports) {

//
// strftime
// github.com/samsonjs/strftime
// @_sjs
//
// Copyright 2010 - 2016 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

;(function() {

    var Locales = {
        de_DE: {
            days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            shortDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d.%m.%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        en_CA: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        en_US: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
            shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            ordinalSuffixes: [
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
                'st'
            ],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%m/%d/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        },

        es_MX: {
            days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            shortDays: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre',' diciembre'],
            shortMonths: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        fr_FR: {
            days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            shortDays: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
            shortMonths: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        it_IT: {
            days: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
            shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
            shortMonths: ['pr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        nl_NL: {
            days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            shortDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
            months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
            shortMonths: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        pt_BR: {
            days: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
            shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        ru_RU: {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            shortMonths: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            AM: 'AM',
            PM: 'PM',
            am: 'am',
            pm: 'pm',
            formats: {
                c: '%a %d %b %Y %X',
                D: '%d.%m.%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        tr_TR: {
            days: ['Pazar', 'Pazartesi', 'Salı','Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
            shortDays: ['Paz', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cts'],
            months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
            shortMonths: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            AM: 'ÖÖ',
            PM: 'ÖS',
            am: 'ÖÖ',
            pm: 'ÖS',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d-%m-%Y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%T',
                x: '%D'
            }
        },

        // By michaeljayt<michaeljayt@gmail.com>
        // https://github.com/michaeljayt/strftime/commit/bcb4c12743811d51e568175aa7bff3fd2a77cef3
        zh_CN: {
            days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            shortDays: ['日', '一', '二', '三', '四', '五', '六'],
            months: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'],
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            AM: '上午',
            PM: '下午',
            am: '上午',
            pm: '下午',
            formats: {
                c: '%a %d %b %Y %X %Z',
                D: '%d/%m/%y',
                F: '%Y-%m-%d',
                R: '%H:%M',
                r: '%I:%M:%S %p',
                T: '%H:%M:%S',
                v: '%e-%b-%Y',
                X: '%r',
                x: '%D'
            }
        }
    };

    var DefaultLocale = Locales['en_US'],
        defaultStrftime = new Strftime(DefaultLocale, 0, false),
        isCommonJS = typeof module !== 'undefined',
        namespace;

    // CommonJS / Node module
    if (isCommonJS) {
        namespace = module.exports = defaultStrftime;
    }
    // Browsers and other environments
    else {
        // Get the global object. Works in ES3, ES5, and ES5 strict mode.
        namespace = (function() { return this || (1,eval)('this'); }());
        namespace.strftime = defaultStrftime;
    }

    // Polyfill Date.now for old browsers.
    if (typeof Date.now !== 'function') {
        Date.now = function() {
          return +new Date();
        };
    }

    function Strftime(locale, customTimezoneOffset, useUtcTimezone) {
        var _locale = locale || DefaultLocale,
            _customTimezoneOffset = customTimezoneOffset || 0,
            _useUtcBasedDate = useUtcTimezone || false,

            // we store unix timestamp value here to not create new Date() each iteration (each millisecond)
            // Date.now() is 2 times faster than new Date()
            // while millisecond precise is enough here
            // this could be very helpful when strftime triggered a lot of times one by one
            _cachedDateTimestamp = 0,
            _cachedDate;

        function _strftime(format, date) {
            var timestamp;

            if (!date) {
                var currentTimestamp = Date.now();
                if (currentTimestamp > _cachedDateTimestamp) {
                    _cachedDateTimestamp = currentTimestamp;
                    _cachedDate = new Date(_cachedDateTimestamp);

                    timestamp = _cachedDateTimestamp;

                    if (_useUtcBasedDate) {
                        // how to avoid duplication of date instantiation for utc here?
                        // we tied to getTimezoneOffset of the current date
                        _cachedDate = new Date(_cachedDateTimestamp + getTimestampToUtcOffsetFor(_cachedDate) + _customTimezoneOffset);
                    }
                }
                else {
                  timestamp = _cachedDateTimestamp;
                }
                date = _cachedDate;
            }
            else {
                timestamp = date.getTime();

                if (_useUtcBasedDate) {
                    var utcOffset = getTimestampToUtcOffsetFor(date);
                    date = new Date(timestamp + utcOffset + _customTimezoneOffset);
                    // If we've crossed a DST boundary with this calculation we need to
                    // adjust the new date accordingly or it will be off by an hour in UTC.
                    if (getTimestampToUtcOffsetFor(date) !== utcOffset) {
                        var newUTCOffset = getTimestampToUtcOffsetFor(date);
                        date = new Date(timestamp + newUTCOffset + _customTimezoneOffset);
                    }
                }
            }

            return _processFormat(format, date, _locale, timestamp);
        }

        function _processFormat(format, date, locale, timestamp) {
            var resultString = '',
                padding = null,
                isInScope = false,
                length = format.length,
                extendedTZ = false;

            for (var i = 0; i < length; i++) {

                var currentCharCode = format.charCodeAt(i);

                if (isInScope === true) {
                    // '-'
                    if (currentCharCode === 45) {
                        padding = '';
                        continue;
                    }
                    // '_'
                    else if (currentCharCode === 95) {
                        padding = ' ';
                        continue;
                    }
                    // '0'
                    else if (currentCharCode === 48) {
                        padding = '0';
                        continue;
                    }
                    // ':'
                    else if (currentCharCode === 58) {
                      if (extendedTZ) {
                          warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime");
                      }
                      extendedTZ = true;
                      continue;
                    }

                    switch (currentCharCode) {

                        // Examples for new Date(0) in GMT

                        // '%'
                        // case '%':
                        case 37:
                            resultString += '%';
                            break;

                        // 'Thursday'
                        // case 'A':
                        case 65:
                            resultString += locale.days[date.getDay()];
                            break;

                        // 'January'
                        // case 'B':
                        case 66:
                            resultString += locale.months[date.getMonth()];
                            break;

                        // '19'
                        // case 'C':
                        case 67:
                            resultString += padTill2(Math.floor(date.getFullYear() / 100), padding);
                            break;

                        // '01/01/70'
                        // case 'D':
                        case 68:
                            resultString += _processFormat(locale.formats.D, date, locale, timestamp);
                            break;

                        // '1970-01-01'
                        // case 'F':
                        case 70:
                            resultString += _processFormat(locale.formats.F, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'H':
                        case 72:
                            resultString += padTill2(date.getHours(), padding);
                            break;

                        // '12'
                        // case 'I':
                        case 73:
                            resultString += padTill2(hours12(date.getHours()), padding);
                            break;

                        // '000'
                        // case 'L':
                        case 76:
                            resultString += padTill3(Math.floor(timestamp % 1000));
                            break;

                        // '00'
                        // case 'M':
                        case 77:
                            resultString += padTill2(date.getMinutes(), padding);
                            break;

                        // 'am'
                        // case 'P':
                        case 80:
                            resultString += date.getHours() < 12 ? locale.am : locale.pm;
                            break;

                        // '00:00'
                        // case 'R':
                        case 82:
                            resultString += _processFormat(locale.formats.R, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'S':
                        case 83:
                            resultString += padTill2(date.getSeconds(), padding);
                            break;

                        // '00:00:00'
                        // case 'T':
                        case 84:
                            resultString += _processFormat(locale.formats.T, date, locale, timestamp);
                            break;

                        // '00'
                        // case 'U':
                        case 85:
                            resultString += padTill2(weekNumber(date, 'sunday'), padding);
                            break;

                        // '00'
                        // case 'W':
                        case 87:
                            resultString += padTill2(weekNumber(date, 'monday'), padding);
                            break;

                        // '16:00:00'
                        // case 'X':
                        case 88:
                            resultString += _processFormat(locale.formats.X, date, locale, timestamp);
                            break;

                        // '1970'
                        // case 'Y':
                        case 89:
                            resultString += date.getFullYear();
                            break;

                        // 'GMT'
                        // case 'Z':
                        case 90:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += "GMT";
                            }
                            else {
                                // fixme optimize
                                var tzString = date.toString().match(/\(([\w\s]+)\)/);
                                resultString += tzString && tzString[1] || '';
                            }
                            break;

                        // 'Thu'
                        // case 'a':
                        case 97:
                            resultString += locale.shortDays[date.getDay()];
                            break;

                        // 'Jan'
                        // case 'b':
                        case 98:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // ''
                        // case 'c':
                        case 99:
                            resultString += _processFormat(locale.formats.c, date, locale, timestamp);
                            break;

                        // '01'
                        // case 'd':
                        case 100:
                            resultString += padTill2(date.getDate(), padding);
                            break;

                        // ' 1'
                        // case 'e':
                        case 101:
                            resultString += padTill2(date.getDate(), padding == null ? ' ' : padding);
                            break;

                        // 'Jan'
                        // case 'h':
                        case 104:
                            resultString += locale.shortMonths[date.getMonth()];
                            break;

                        // '000'
                        // case 'j':
                        case 106:
                            var y = new Date(date.getFullYear(), 0, 1);
                            var day = Math.ceil((date.getTime() - y.getTime()) / (1000 * 60 * 60 * 24));
                            resultString += padTill3(day);
                            break;

                        // ' 0'
                        // case 'k':
                        case 107:
                            resultString += padTill2(date.getHours(), padding == null ? ' ' : padding);
                            break;

                        // '12'
                        // case 'l':
                        case 108:
                            resultString += padTill2(hours12(date.getHours()), padding == null ? ' ' : padding);
                            break;

                        // '01'
                        // case 'm':
                        case 109:
                            resultString += padTill2(date.getMonth() + 1, padding);
                            break;

                        // '\n'
                        // case 'n':
                        case 110:
                            resultString += '\n';
                            break;

                        // '1st'
                        // case 'o':
                        case 111:
                            // Try to use an ordinal suffix from the locale, but fall back to using the old
                            // function for compatibility with old locales that lack them.
                            var day = date.getDate();
                            if (locale.ordinalSuffixes) {
                                resultString += String(day) + (locale.ordinalSuffixes[day - 1] || ordinal(day));
                            }
                            else {
                                resultString += String(day) + ordinal(day);
                            }
                            break;

                        // 'AM'
                        // case 'p':
                        case 112:
                            resultString += date.getHours() < 12 ? locale.AM : locale.PM;
                            break;

                        // '12:00:00 AM'
                        // case 'r':
                        case 114:
                            resultString += _processFormat(locale.formats.r, date, locale, timestamp);
                            break;

                        // '0'
                        // case 's':
                        case 115:
                            resultString += Math.floor(timestamp / 1000);
                            break;

                        // '\t'
                        // case 't':
                        case 116:
                            resultString += '\t';
                            break;

                        // '4'
                        // case 'u':
                        case 117:
                            var day = date.getDay();
                            resultString += day === 0 ? 7 : day;
                            break; // 1 - 7, Monday is first day of the week

                        // ' 1-Jan-1970'
                        // case 'v':
                        case 118:
                            resultString += _processFormat(locale.formats.v, date, locale, timestamp);
                            break;

                        // '4'
                        // case 'w':
                        case 119:
                            resultString += date.getDay();
                            break; // 0 - 6, Sunday is first day of the week

                        // '12/31/69'
                        // case 'x':
                        case 120:
                            resultString += _processFormat(locale.formats.x, date, locale, timestamp);
                            break;

                        // '70'
                        // case 'y':
                        case 121:
                            resultString += ('' + date.getFullYear()).slice(2);
                            break;

                        // '+0000'
                        // case 'z':
                        case 122:
                            if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                                resultString += extendedTZ ? "+00:00" : "+0000";
                            }
                            else {
                                var off;
                                if (_customTimezoneOffset !== 0) {
                                    off = _customTimezoneOffset / (60 * 1000);
                                }
                                else {
                                    off = -date.getTimezoneOffset();
                                }
                                var sign = off < 0 ? '-' : '+';
                                var sep = extendedTZ ? ':' : '';
                                var hours = Math.floor(Math.abs(off / 60));
                                var mins = Math.abs(off % 60);
                                resultString += sign + padTill2(hours) + sep + padTill2(mins);
                            }
                            break;

                        default:
                            if (isInScope) {
                                resultString += '%';
                            }
                            resultString += format[i];
                            break;
                    }

                    padding = null;
                    isInScope = false;
                    continue;
                }

                // '%'
                if (currentCharCode === 37) {
                    isInScope = true;
                    continue;
                }

                resultString += format[i];
            }

            return resultString;
        }

        var strftime = _strftime;

        strftime.localize = function(locale) {
            return new Strftime(locale || _locale, _customTimezoneOffset, _useUtcBasedDate);
        };

        strftime.localizeByIdentifier = function(localeIdentifier) {
            var locale = Locales[localeIdentifier];
            if (!locale) {
                warn('[WARNING] No locale found with identifier "' + localeIdentifier + '".');
                return strftime;
            }
            return strftime.localize(locale);
        };

        strftime.timezone = function(timezone) {
            var customTimezoneOffset = _customTimezoneOffset;
            var useUtcBasedDate = _useUtcBasedDate;

            var timezoneType = typeof timezone;
            if (timezoneType === 'number' || timezoneType === 'string') {
                useUtcBasedDate = true;

                // ISO 8601 format timezone string, [-+]HHMM
                if (timezoneType === 'string') {
                    var sign = timezone[0] === '-' ? -1 : 1,
                        hours = parseInt(timezone.slice(1, 3), 10),
                        minutes = parseInt(timezone.slice(3, 5), 10);

                    customTimezoneOffset = sign * ((60 * hours) + minutes) * 60 * 1000;
                    // in minutes: 420
                }
                else if (timezoneType === 'number') {
                    customTimezoneOffset = timezone * 60 * 1000;
                }
            }

            return new Strftime(_locale, customTimezoneOffset, useUtcBasedDate);
        };

        strftime.utc = function() {
            return new Strftime(_locale, _customTimezoneOffset, true);
        };

        return strftime;
    }

    function padTill2(numberToPad, paddingChar) {
        if (paddingChar === '' || numberToPad > 9) {
            return numberToPad;
        }
        if (paddingChar == null) {
            paddingChar = '0';
        }
        return paddingChar + numberToPad;
    }

    function padTill3(numberToPad) {
        if (numberToPad > 99) {
            return numberToPad;
        }
        if (numberToPad > 9) {
            return '0' + numberToPad;
        }
        return '00' + numberToPad;
    }

    function hours12(hour) {
        if (hour === 0) {
            return 12;
        }
        else if (hour > 12) {
            return hour - 12;
        }
        return hour;
    }

    // firstWeekday: 'sunday' or 'monday', default is 'sunday'
    //
    // Pilfered & ported from Ruby's strftime implementation.
    function weekNumber(date, firstWeekday) {
        firstWeekday = firstWeekday || 'sunday';

        // This works by shifting the weekday back by one day if we
        // are treating Monday as the first day of the week.
        var weekday = date.getDay();
        if (firstWeekday === 'monday') {
            if (weekday === 0) // Sunday
                weekday = 6;
            else
                weekday--;
        }

        var firstDayOfYearUtc = Date.UTC(date.getFullYear(), 0, 1),
            dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
            yday = Math.floor((dateUtc - firstDayOfYearUtc) / 86400000),
            weekNum = (yday + 7 - weekday) / 7;

        return Math.floor(weekNum);
    }

    // Get the ordinal suffix for a number: st, nd, rd, or th
    function ordinal(number) {
        var i = number % 10;
        var ii = number % 100;

        if ((ii >= 11 && ii <= 13) || i === 0 || i >= 4) {
            return 'th';
        }
        switch (i) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
        }
    }

    function getTimestampToUtcOffsetFor(date) {
        return (date.getTimezoneOffset() || 0) * 60000;
    }

    function warn(message) {
        if (typeof console !== 'undefined' && typeof console.warn == 'function') {
            console.warn(message)
        }
    }

}());


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

const fengari = __webpack_require__(23);
const lua     = fengari.lua;
const lauxlib = fengari.lauxlib;
const lualib  = fengari.lualib;

let custom_inspect_symbol;
try { /* for node.js */
	custom_inspect_symbol = __webpack_require__(24).inspect.custom;
} catch (e) {}

const apply = Reflect.apply;
const construct = Reflect.construct;

const toString = function(o) {
	return ""+o;
};

const isobject = function(o) {
	return typeof o === "object" ? o !== null : typeof o === "function";
};

const js_tname = lua.to_luastring("js object");

const testjs = function(L, idx) {
	let u = lauxlib.luaL_testudata(L, idx, js_tname);
	if (u)
		return u.data;
	else
		return void 0;
};

const checkjs = function(L, idx) {
	return lauxlib.luaL_checkudata(L, idx, js_tname).data;
};

const pushjs = function(L, v) {
	let b = lua.lua_newuserdata(L);
	b.data = v;
	lauxlib.luaL_setmetatable(L, js_tname);
};

const getmainthread = function(L) {
	lua.lua_rawgeti(L, lua.LUA_REGISTRYINDEX, lua.LUA_RIDX_MAINTHREAD);
	let mainL = lua.lua_tothread(L, -1);
	lua.lua_pop(L, 1);
	return mainL;
};

/* weak map from states to proxy objects (for each object) in that state */
const states = new WeakMap();

const atnativeerror = function(L) {
	let u = lua.lua_touserdata(L, 1);
	push(L, u);
	return 1;
};

const push = function(L, v) {
	switch (typeof v) {
	case "undefined":
		lua.lua_pushnil(L);
		break;
	case "number":
		lua.lua_pushnumber(L, v);
		break;
	case "string":
		lua.lua_pushstring(L, lua.to_luastring(v));
		break;
	case "boolean":
		lua.lua_pushboolean(L, v);
		break;
	case "symbol":
		lua.lua_pushlightuserdata(L, v);
		break;
	case "function":
		if (lua.lua_isproxy(v, L)) {
			v(L);
			break;
		}
		/* fall through */
	case "object":
		if (v === null) {
			/* can't use null in a WeakMap; grab from registry */
			lua.lua_rawgetp(L, lua.LUA_REGISTRYINDEX, null);
			break;
		}
		/* fall through */
	default:
		/* Try and push same object again */
		let objects_seen = states.get(getmainthread(L));
		let p = objects_seen.get(v);
		if (p) {
			p(L);
		} else {
			pushjs(L, v);
			p = lua.lua_toproxy(L, -1);
			objects_seen.set(v, p);
		}
	}
};

const tojs = function(L, idx) {
	switch(lua.lua_type(L, idx)) {
	case lua.LUA_TNONE:
	case lua.LUA_TNIL:
		return void 0;
	case lua.LUA_TBOOLEAN:
		return lua.lua_toboolean(L, idx);
	case lua.LUA_TLIGHTUSERDATA:
		return lua.lua_touserdata(L, idx);
	case lua.LUA_TNUMBER:
		return lua.lua_tonumber(L, idx);
	case lua.LUA_TSTRING:
		return lua.lua_tojsstring(L, idx);
	case lua.LUA_TUSERDATA:
		let u = testjs(L, idx);
		if (u !== void 0)
			return u;
		/* fall through */
	case lua.LUA_TTABLE:
	case lua.LUA_TFUNCTION:
	case lua.LUA_TTHREAD:
		/* fall through */
	default:
		return wrap(getmainthread(L), lua.lua_toproxy(L, idx));
	}
};


const invoke = function(L, p, thisarg, args, n_results) {
	lauxlib.luaL_checkstack(L, 2+args.length);
	if ((n_results === void 0) || (n_results === null)) {
		n_results = lua.LUA_MULTRET;
	}
	let base = lua.lua_gettop(L);
	p(L);
	push(L, thisarg);
	for (let i=0; i<args.length; i++) {
		push(L, args[i]);
	}
	lua.lua_call(L, 1+args.length, n_results);
	let nres = lua.lua_gettop(L)-base;
	let res = new Array(nres);
	for (let i=0; i<nres; i++) {
		res[i] = tojs(L, base+i+1);
	}
	lua.lua_settop(L, base);
	return res;
};

const get = function(L, p, prop) {
	lauxlib.luaL_checkstack(L, 2);
	p(L);
	push(L, prop);
	lua.lua_gettable(L, -2);
	let r = tojs(L, -1);
	lua.lua_pop(L, 2);
	return r;
};

const has = function(L, p, prop) {
	lauxlib.luaL_checkstack(L, 2);
	p(L);
	push(L, prop);
	lua.lua_gettable(L, -2);
	let r = lua.lua_isnil(L, -1);
	lua.lua_pop(L, 2);
	return r;
};

const set = function(L, p, prop, value) {
	lauxlib.luaL_checkstack(L, 3);
	p(L);
	push(L, prop);
	push(L, value);
	lua.lua_settable(L, -3);
	lua.lua_pop(L, 1);
};

const deleteProperty = function(L, p, prop) {
	lauxlib.luaL_checkstack(L, 3);
	p(L);
	push(L, prop);
	lua.lua_pushnil(L);
	lua.lua_settable(L, -3);
	lua.lua_pop(L, 1);
};

const tostring = function(L, p) {
	lauxlib.luaL_checkstack(L, 1);
	p(L);
	let r = lauxlib.luaL_tolstring(L, -1);
	lua.lua_pop(L, 2);
	return lua.to_jsstring(r);
};

/* implements lua's "Generic For" protocol */
const iter_next = function() {
	lauxlib.luaL_checkstack(this.L, 3);
	let top = lua.lua_gettop(this.L);
	this.iter(this.L);
	this.state(this.L);
	this.last(this.L);
	lua.lua_call(this.L, 2, lua.LUA_MULTRET);
	this.last = lua.lua_toproxy(this.L, top+1);
	let r;
	if (lua.lua_isnil(this.L, -1)) {
		r = {
			done: true,
			value: void 0
		};
	} else {
		let n_results = lua.lua_gettop(this.L) - top;
		let result = new Array(n_results);
		for (let i=0; i<n_results; i++) {
			result[i] = tojs(this.L, top+i+1);
		}
		r = {
			done: false,
			value: result
		};
	}
	lua.lua_settop(this.L, top);
	return r;
};

/* make iteration use pairs() */
const jsiterator = function(L, p) {
	lauxlib.luaL_requiref(L, lua.to_luastring("_G"), lualib.luaopen_base, 0);
	lua.lua_getfield(L, -1, lua.to_luastring("pairs"));
	lua.lua_remove(L, -2);
	p(L);
	lua.lua_call(L, 1, 3);
	let iter = lua.lua_toproxy(L, -3);
	let state = lua.lua_toproxy(L, -2);
	let last = lua.lua_toproxy(L, -1);
	lua.lua_pop(L, 3);
	return {
		L: L,
		iter: iter,
		state: state,
		last: last,
		next: iter_next
	};
};

const wrap = function(L, p) {
	/* we need `typeof js_proxy` to be "function" so that it's acceptable to native apis */
	let js_proxy = function() {
		/* only get one result */
		return invoke(L, p, this, arguments, 1)[0];
	};
	js_proxy.apply = function(thisarg, args) {
		/* only get one result */
		return invoke(L, p, thisarg, args, 1)[0];
	};
	js_proxy.invoke = function(thisarg, args) {
		return invoke(L, p, thisarg, args, lua.LUA_MULTRET);
	};
	js_proxy.get = function(k) {
		return get(L, p, k);
	};
	js_proxy.has = function(k) {
		return has(L, p, k);
	};
	js_proxy.set = function(k, v) {
		return set(L, p, k, v);
	};
	js_proxy.delete = function(k) {
		return deleteProperty(L, p, k);
	};
	js_proxy.toString = function() {
		return tostring(L, p);
	};
	js_proxy[Symbol.toStringTag] = "Fengari object";
	js_proxy[Symbol.iterator] = function() {
		return jsiterator(L, p);
	};
	if (Symbol.toPrimitive) {
		js_proxy[Symbol.toPrimitive] = function(hint) {
			if (hint === "string") {
				return tostring(L, p);
			}
		};
	}
	if (custom_inspect_symbol) {
		js_proxy[custom_inspect_symbol] = js_proxy.toString;
	}
	return js_proxy;
};

const proxy_handlers = {
	apply: function(target, thisarg, args) {
		return invoke(target.L, target.p, thisarg, args, 1)[0];
	},
	get: function(target, k) {
		return get(target.L, target.p, k);
	},
	has: function(target, k) {
		return has(target.L, target.p, k);
	},
	set: function(target, k, v) {
		return set(target.L, target.p, k, v);
	},
	deleteProperty: function(target, k) {
		return deleteProperty(target.L, target.p, k);
	}
};

const createproxy = function(L, p) {
	/* target should be a function so that `typeof proxy` is "function"
	 * we want `typeof js_proxy` to be "function" so that it's acceptable to native apis */
	let target = function(){ return p(L); };
	target.p = p;
	target.L = L;
	let js_proxy = new Proxy(target, proxy_handlers);
	return js_proxy;
};

const get_iterator = function(L, idx) {
	let u = checkjs(L, idx);
	let getiter = u[Symbol.iterator];
	if (!getiter)
		lauxlib.luaL_argerror(L, idx, lua.to_luastring("object not iterable"));
	let iter = apply(getiter, u, []);
	if (!isobject(iter))
		lauxlib.luaL_argerror(L, idx, lua.to_luastring("Result of the Symbol.iterator method is not an object"));
	return iter;
};

const next = function(L) {
	let iter = checkjs(L, 1);
	let r = iter.next();
	if (r.done) {
		return 0;
	} else {
		push(L, r.value);
		return 1;
	}
};

let jslib = {
	"new": function(L) {
		let u = checkjs(L, 1);
		let nargs = lua.lua_gettop(L)-1;
		let args = new Array(nargs);
		for (let i = 0; i < nargs; i++) {
			args[i] = tojs(L, i+2);
		}
		push(L, construct(u, args));
		return 1;
	},
	"of": function(L) {
		let iter = get_iterator(L, 1);
		lua.lua_pushcfunction(L, next);
		push(L, iter);
		return 2;
	},
	"createproxy": function(L) {
		lauxlib.luaL_checkany(L, 1);
		let proxy = createproxy(getmainthread(L), lua.lua_toproxy(L, 1));
		push(L, proxy);
		return 1;
	},
	"tonumber": function(L) {
		let u = checkjs(L, 1);
		lua.lua_pushnumber(L, +u);
		return 1;
	}
};

let jsmt = {
	__index: function(L) {
		let u = checkjs(L, 1);
		let k = tojs(L, 2);
		push(L, u[k]);
		return 1;
	},
	__newindex: function(L) {
		let u = checkjs(L, 1);
		let k = tojs(L, 2);
		let v = tojs(L, 3);
		if (v === void 0)
			delete u[k];
		else
			u[k] = v;
		return 0;
	},
	__tostring: function(L) {
		let u = checkjs(L, 1);
		let s = toString(u);
		lua.lua_pushstring(L, lua.to_luastring(s));
		return 1;
	},
	__call: function(L) {
		let u = checkjs(L, 1);
		let nargs = lua.lua_gettop(L)-1;
		let thisarg, args;
		if (nargs > 0) {
			thisarg = tojs(L, 2);
			if (nargs-- > 0) {
				args = new Array(nargs);
				for (let i = 0; i < nargs; i++) {
					args[i] = tojs(L, i+3);
				}
			}
		}
		push(L, apply(u, thisarg, args));
		return 1;
	}
};

const luaopen_js = function(L) {
	/* Add weak map to track objects seen */
	states.set(getmainthread(L), new WeakMap());

	lua.lua_atnativeerror(L, atnativeerror);

	lauxlib.luaL_newlib(L, jslib);

	lauxlib.luaL_newmetatable(L, js_tname);
	lauxlib.luaL_setfuncs(L, jsmt, 0);
	lua.lua_pop(L, 1);

	pushjs(L, null);
	/* Store null object in registry under lightuserdata null */
	lua.lua_pushvalue(L, -1);
	lua.lua_rawsetp(L, lua.LUA_REGISTRYINDEX, null);
	lua.lua_setfield(L, -2, lua.to_luastring("null"));

	push(L, global);
	lua.lua_setfield(L, -2, lua.to_luastring("global"));

	return 1;
};

module.exports.checkjs = checkjs;
module.exports.testjs = testjs;
module.exports.pushjs = pushjs;
module.exports.push = push;
module.exports.tojs = tojs;
module.exports.luaopen_js = luaopen_js;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ })
/******/ ]);
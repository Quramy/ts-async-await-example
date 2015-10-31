"use strict";

function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) {
            return _instanceof(value, Promise) && value.constructor === Promise ? value : new Promise(function (resolve) {
                resolve(value);
            });
        }
        function onfulfill(value) {
            try {
                step("next", value);
            } catch (e) {
                reject(e);
            }
        }
        function onreject(value) {
            try {
                step("throw", value);
            } catch (e) {
                reject(e);
            }
        }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
/// <reference path="../typings/bundle.d.ts" />
require('babel-polyfill');
function asyncTaskCreator() {
    var p = new Promise(function (resolve) {
        setTimeout(function () {
            return resolve('done!');
        }, 100);
    });
    return p;
}
function task1() {
    return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                    return _context.stop();
            }
        }, _callee, this);
    }));
}
function exec() {
    return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return asyncTaskCreator();

                case 2:
                    result = _context2.sent;

                    console.log(result);

                case 4:
                case "end":
                    return _context2.stop();
            }
        }, _callee2, this);
    }));
}
;
exec();
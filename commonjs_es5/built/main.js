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
        }, 1000);
    });
    return p;
}
function exec() {
    return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
                case 0:
                    console.log('This waits a second.');
                    _context.next = 3;
                    return asyncTaskCreator();

                case 3:
                    result = _context.sent;

                    console.log(result);

                case 5:
                case "end":
                    return _context.stop();
            }
        }, _callee, this);
    }));
}
;
exec();
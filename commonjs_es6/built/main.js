/// <reference path="../typings/bundle.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
function asyncTaskCreator() {
    var p = new Promise(resolve => {
        setTimeout(() => resolve('done!'), 100);
    });
    return p;
}
function task1() {
    return __awaiter(this, void 0, Promise, function* () {
    });
}
function exec() {
    return __awaiter(this, void 0, Promise, function* () {
        var result = yield asyncTaskCreator();
        console.log(result);
    });
}
;
exec();

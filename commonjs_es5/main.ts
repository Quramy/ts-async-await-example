/// <reference path="../typings/bundle.d.ts" />
require('babel-polyfill');

function asyncTaskCreator() {
    var p = new Promise<string>(resolve => {
        setTimeout(() => resolve('done!'), 1000);
    });
    return p;
}

async function exec() {
    console.log('This waits a second.');
    var result = await asyncTaskCreator();
    console.log(result);
};

exec();

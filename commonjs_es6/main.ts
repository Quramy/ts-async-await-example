/// <reference path="../typings/bundle.d.ts" />

function asyncTaskCreator() {
    var p = new Promise<string>(resolve => {
        setTimeout(() => resolve('done!'), 100);
    });
    return p;
}

async function task1() {
}

async function exec() {
    var result = await asyncTaskCreator();
    console.log(result);
};

exec();

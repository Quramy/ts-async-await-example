function asyncTaskCreator() {
    var p = new Promise<string>(resolve => {
        setTimeout(() => resolve('done!'), 1000);
    });
    return p;
}

async function exec() {
    document.getElementById('out').innerText = await asyncTaskCreator();
};

exec();

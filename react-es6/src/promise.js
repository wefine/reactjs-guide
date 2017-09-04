const timeoutPromise = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('timeout task');
        }, 500);
    })
};

export const p1 = {

    test: () => {
        console.log('testTimeoutPromise');

        // 超时任务
        timeoutPromise()
            .then((value) => {
                console.log(value);
            })
            .catch((error) => {
                console.log(error);
            });
    }
};


const xhrPromise = (url, method = 'GET', data = null) => {

    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open(method, url, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send(data);
    });
};


// 异步 Ajax 请求测试
const url1 = 'http://localhost:3000/data1.json';
const url2 = 'http://localhost:3000/data2.json';
export const p2 = {
    testXhrPromise: () => {
        xhrPromise(url1)
            .then((value) => {
                console.log(value);

                return JSON.parse(value);
            })
            .then((data) => {
                console.log('xhrPromise: ' + data['name']);
            });
    },
    testMultiTask: () => {
        // 多异步请求测试
        Promise.resolve()
            .then(() => xhrPromise(url1))
            .then(JSON.parse)
            .then((data) => {
                console.log('url1: ' + data['name']);
            })
            .then(() => xhrPromise(url2))
            .then(JSON.parse)
            .then((data) => {
                console.log('url2: ' + data['name']);
            })
            .then(() => {
                console.log('chain finished!');
            })
            .catch((error) => {
                console.log(error);
            });
    },
    testPromiseAll: () => {
        // 多 Promise 组合测试
        Promise.all([xhrPromise(url1), xhrPromise(url2)])
            .then((value) => {
                console.log('value: ' + value);
            })
            .catch((error) => {
                console.log(error);
            });
    }
};
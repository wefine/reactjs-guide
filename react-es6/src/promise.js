export const timeoutPromise = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('timeout task');
        }, 500);
    });
};

export const xhrPromise = (url, method = "GET", data = null) => {

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
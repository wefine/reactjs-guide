import { getFetch } from './fetch';
import { timeoutPromise, xhrPromise } from './promise'

getFetch();

// 超时任务
timeoutPromise()
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

// 异步 Ajax 请求测试
let url1 = "http://localhost:3000/data1.json";
let url2 = "http://localhost:3000/data2.json";
xhrPromise(url1)
    .then((value) => {
        console.log(value);

        return JSON.parse(value);
    })
    .then((data) => {
        console.log("xhrPromise: " + data["name"]);
    });

// 多异步请求测试
Promise.resolve()
    .then(() => xhrPromise(url1))
    .then(JSON.parse)
    .then((data) => {
        console.log("url1: " + data["name"]);
    })
    .then(() => xhrPromise(url2))
    .then(JSON.parse)
    .then((data) => {
        console.log("url2: " + data["name"]);
    })
    .then(() => {
        console.log("chain finished!");
    })
    .catch((error) => {
        console.log(error);
    });

// 多 Promise 组合测试
Promise.all([xhrPromise(url1), xhrPromise(url2)])
    .then((value) => {
        console.log("value: " + value);
    })
    .catch((error) => {
        console.log(error);
    });
"use strict";
function simulateTaskPromise(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`thoi gian hoan thanh ${time}`);
        }, time);
    });
}
const promise1 = simulateTaskPromise(1000);
const promise2 = simulateTaskPromise(2000);
const promise3 = simulateTaskPromise(1500);
Promise.all([promise1, promise2, promise3]).then((result) => {
    result.forEach((result, index) => {
        console.log(`task ${index} : ${result}`);
    });
});

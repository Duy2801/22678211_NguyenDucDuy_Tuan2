"use strict";
function firstPromise(time, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} finish in ${time}`);
        }, time);
    });
}
const task1 = firstPromise(3000, "Task 1");
const task2 = firstPromise(1000, "Task 2");
const task3 = firstPromise(2000, "Task 3");
Promise.race([task1, task2, task3]).then((result) => console.log("Fastest task", result));

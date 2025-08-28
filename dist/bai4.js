"use strict";
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const rd = Math.random();
        console.log(rd);
        if (rd < 1) {
            reject(new Error("Random number to low"));
        }
        else {
            resolve(rd);
        }
    });
}
getRandomNumber()
    .then((num) => { console.log(num); })
    .catch((err) => console.error(err));

"use strict";
function getNumberAsync() {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(10);
        }, 1000);
    });
}
getNumberAsync().then((num) => console.log(num));

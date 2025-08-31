async function fetchUer(id:number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id , name :`User ${id}`});
        }, 1000);
    })
}
async function fetchUers(ids : number[]) {
    const promies = ids.map(id => fetchUer(id));

    const user = Promise.all(promies);
    return user;
}

fetchUers([1,2,3]).then(console.log);
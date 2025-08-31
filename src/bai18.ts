async function fetchUer(id:number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id , name :`User ${id}`});
        }, 1000);
    })
}

async function Test() {
    const user = await fetchUer(1);
    console.log(user);
}
Test();
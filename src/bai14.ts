function resultAfter1s (num :number){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(num *3)
        }, 1000);
    })
}

async function runTask() {
    const result = await resultAfter1s(5);
    console.log(result);
}
runTask();
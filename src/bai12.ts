function simulateTask(ms:number){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(`Task finished in ${ms}`)
        },ms)
    })
}

async function runTask() {
    const result = await simulateTask(2000);
    console.log(result);
}
runTask();
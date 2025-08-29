function delayResolve (){
    return new Promise((resovle) =>{
        setTimeout(() =>{
            resovle("Hello Async")
        },1000)
    })
}
async function run() {
    const result = await delayResolve();
    console.log(result);
}
run();
function simulateTask(time: number) : Promise<String> {
    return new Promise ((resolve , reject ) =>{
        setTimeout(() =>{
            resolve("task done")
        },time)
    })
}
simulateTask(2000).then((mess) =>{console.log(mess)})
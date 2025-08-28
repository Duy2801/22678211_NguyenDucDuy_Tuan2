const helloAsync = new Promise ((resolve , reject) =>{
    setTimeout(()=>{
        resolve("Hello Async")
    },2000)
});

helloAsync.then((message) => console.log(message))
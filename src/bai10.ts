function Promisefinishes () : Promise<String>{
    return new Promise((resolve , reject) =>{
        const rd  = Math.random() > 5
        setTimeout(() => {
            if(rd){
                resolve("succecc")
            }else{
                reject("failed")
            }
        }, 1000);
    })
}

Promisefinishes()
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
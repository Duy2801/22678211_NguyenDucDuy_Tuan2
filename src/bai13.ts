function simulateTask (ms:number){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Task finished in ${ms}ms`);
      } else {
        reject(new Error("Task failed!"));
      }
    }, ms);
  });
}

async function runtask() {
    try {
        const result = await simulateTask(2000)
        console.log(result);
    } catch (error) {
           console.error("Error caught:",  (error as Error).message);
    }
}
runtask()
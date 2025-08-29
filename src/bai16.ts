async function resultAfter3(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

async function runParallel() {
  const results = await Promise.all([
    resultAfter(2),  
    resultAfter(4),  
    resultAfter(6)   
  ]);

  console.log("Results:", results);
}

runParallel();

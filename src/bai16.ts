async function resultAfter3(num: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

async function runParallel() {
  const results = await Promise.all([
    resultAfter3(2),  
    resultAfter3(4),  
    resultAfter3(6)   
  ]);

  console.log("Results:", results);
}

runParallel();

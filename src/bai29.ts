function fakeTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      resolve(`Task ${id} hoàn thành sau ${time}ms`);
    }, time);
  });
}
async function queueProcess() {
  const taskIds = [1, 2, 3, 4, 5];
  const results: string[] = [];

  for (const id of taskIds) {
    console.log(`Bắt đầu task ${id}`);
    const result = await fakeTask(id); 
    console.log(result);
    results.push(result);
  }

  console.log("Tất cả task đã hoàn thành:", results);
}
queueProcess();

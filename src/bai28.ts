function fakeTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    const time = Math.floor(Math.random() * 2000) + 1000; 
    setTimeout(() => {
      resolve(`Task ${id} hoàn thành sau ${time}ms`);
    }, time);
  });
}
async function Process() {
  const tasks = [
    fakeTask(1),
    fakeTask(2),
    fakeTask(3),
    fakeTask(4),
    fakeTask(5),
  ];

  const results = await Promise.all(tasks);
  console.log("Kết quả:", results);
}

Process();

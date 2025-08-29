async function resultAfter(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}
async function runtask3() {
  const result = await resultAfter(2);
  console.log(result);

  const result2 = await resultAfter(result);
  console.log(result2);

  const result3 = await resultAfter(result2);
  console.log(result3);
}
runtask3();

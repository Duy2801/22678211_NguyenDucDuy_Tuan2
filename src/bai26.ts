function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

async function waitFiveSeconds() {
  console.log("Bắt đầu chờ 5 giây");
  await sleep(5000); 
  console.log("Đã chờ xong 5 giây!");
}

waitFiveSeconds();

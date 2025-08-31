async function downloadFile(filename: string) {
  console.log(`Bắt đầu tải file: ${filename}...`);

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Tải xong file: ${filename}`);
      resolve();
    }, 3000); 
  });
}

(async () => {
  await downloadFile("example.pdf");
  console.log("Hoàn tất quá trình tải!");
})();

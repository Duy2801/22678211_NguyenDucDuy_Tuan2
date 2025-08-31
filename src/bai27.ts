async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Thử lần ${attempt}`);
      const response = await fetch(url);
      return await response.json(); 
    } catch (err) {
    }
  }
}

(async () => {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Kết quả:", data);
  } catch (err) {
    console.error("Error:", (err as Error).message);
  }
})();

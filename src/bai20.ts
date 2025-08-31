async function fetchUser(id: number) {
  const apiCall = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 1000); 
  });

  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out after 2 seconds"));
    }, 2000);
  });

  return Promise.race([apiCall, timeout]);
}

(async () => {
  try {
    const user = await fetchUser(1);
    console.log("Fetched:", user);
  } catch (err) {
   if (err instanceof Error) {
    console.error("Error:", err.message);
  } else {
    console.error("Unknown error:", err);
  }
  }
})();

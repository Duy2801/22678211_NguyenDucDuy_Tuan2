async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",                 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Hello World",
        body: "This is a test post",
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log("Server response:", data);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Post error:", err.message);
    }
  }
}

postData();

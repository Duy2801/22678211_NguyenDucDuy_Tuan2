async function fetchTodo(id: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

async function batchFetchTodos() {
  const ids = [1, 2, 3, 9999]; 
  const promises = ids.map(id => fetchTodo(id));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`API ${ids[index]} thành công:`, result.value);
    } else {
      console.error(`API ${ids[index]} thất bại:`, result.reason);
    }
  });
}

batchFetchTodos();

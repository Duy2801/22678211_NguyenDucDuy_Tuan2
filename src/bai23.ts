async function fetchCompleted() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos: any[] = await response.json();

    const completed = todos.filter(todo => todo.completed);

    return completed;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Fetch error:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
    return [];
  }
}
(async () => {
  const completedTodos = await fetchCompleted();
  console.log("Completed Todos:", completedTodos.slice(0, 5)); 
})();
async function getTodo() {
  try {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    const data = await reponse.json();
    console.log("todo", data);
  } catch {}
}
getTodo();

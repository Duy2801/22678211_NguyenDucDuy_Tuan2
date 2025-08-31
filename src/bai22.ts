async function getToDo(ids : number[]) {
    try{
        const promises = ids.map(id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`))

        const todos = await Promise.all(promises);

        todos.forEach(todo => console.log("Todo" , todo))
    }catch{

    }
}
getToDo([1,2,4,5])
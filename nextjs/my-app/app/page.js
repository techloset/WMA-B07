const fetchTodos = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`,{cache: "no-store"})
  const data = await response.json()
  console.log("data", data);

  return data

}
export default async function Home() {
  const result = await fetchTodos()
  console.log("data abc", result);
  
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {result?.data?.map(todo => {
          return (
            <>
              <li key={todo.id}> {todo.id} - {todo.title} - {todo.description}</li>
            </>)
        })}
      </ul>
    </div>
  );
}

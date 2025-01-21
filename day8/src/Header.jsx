import { useState, useEffect } from "react";
import axios from "axios";

// useEffect hook
const Header = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch todos using Axios
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setTodos([response.data]); // Set the todo in state (as array to match the map)
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false); // Stop the loading state even if there's an error
      });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <h1>Todo</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong> - {todo.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;

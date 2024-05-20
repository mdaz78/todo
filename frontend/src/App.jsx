import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const { data } = await axios.get("http://localhost:3000/todos");
      setTodos(data);
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div className="space-y-2">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;

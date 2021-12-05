import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { TodoList } from "./TodoList";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "call mom",
      completed: false,
    },
  ]);

  const todoRef = useRef();
  const handlerAddTodo = (e) => {
    const description = todoRef.current.value;
    if (description === "") return;
    const newTodo = {
      id: uuidv4(),
      description,
      completed: false,
    };
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
    todoRef.current.value = null;
  };

  return (
    <div>
      <input ref={todoRef} type="text" placeholder="nueva tarea..." />
      <button onClick={handlerAddTodo}>Agregar tarea</button>
      <button>Eliminar finalizadas</button>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

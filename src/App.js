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
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState(null);
  const todoRef = useRef();
  const btnRef = useRef();
  const handlerAddTodo = (e) => {
    const description = todoRef.current.value;
    if (description === "") return;
    if (!editMode) {
      const newTodo = {
        id: uuidv4(),
        description,
        completed: false,
      };
      setTodos((prevState) => {
        return [...prevState, newTodo];
      });
    } else {
      btnRef.current.innerText = "Agregar tarea";
      setEditMode(false);
      const arrEdit = todos.map((item) =>
        item.id === id ? { ...item, description: todoRef.current.value } : item
      );
      setTodos(arrEdit);
    }

    todoRef.current.value = null;
  };
  const deleteCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };
  return (
    <div>
      <input ref={todoRef} type="text" placeholder="nueva tarea..." />
      <button ref={btnRef} onClick={handlerAddTodo}>
        Agregar tarea
      </button>
      <button onClick={deleteCompleted}>Eliminar finalizadas</button>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        todoRef={todoRef}
        btnRef={btnRef}
        setEditMode={setEditMode}
        setId={setId}
      />
    </div>
  );
}

export default App;

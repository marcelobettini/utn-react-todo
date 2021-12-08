const Todo = ({
  todo,
  todos,
  setTodos,
  todoRef,
  btnRef,
  setEditMode,
  setId,
}) => {
  const toggleCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const setForEdit = (id) => {
    setId(id);
    setEditMode(true);
    btnRef.current.innerText = "Editar tarea";
    todoRef.current.value = todo.description;
  };
  return (
    <tr>
      <td>{todo.description}</td>
      <td>{todo.completed ? "si" : "no"}</td>
      <td>
        <button onClick={toggleCompleted}>mark</button>
        <button onClick={() => setForEdit(todo.id)}>edit</button>
      </td>
    </tr>
  );
};
export default Todo;

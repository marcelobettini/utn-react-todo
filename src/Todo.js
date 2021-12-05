const Todo = ({ todo, todos, setTodos }) => {
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
  return (
    <tr>
      <td>{todo.description}</td>
      <td>{todo.completed ? "no" : "si"}</td>
      <td>
        <button onClick={toggleCompleted}>mark</button>
      </td>
    </tr>
  );
};
export default Todo;

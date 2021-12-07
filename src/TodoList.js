import Todo from "./Todo";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>tarea</th>
            <th>finalizada</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

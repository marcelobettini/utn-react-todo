import Todo from "./Todo";

export const TodoList = ({
  todos,
  setTodos,
  todoRef,
  btnRef,
  setEditMode,
  setId,
}) => {
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
                todoRef={todoRef}
                btnRef={btnRef}
                setEditMode={setEditMode}
                setId={setId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

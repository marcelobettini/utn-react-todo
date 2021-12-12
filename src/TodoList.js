import Todo from "./Todo";
import Table from "react-bootstrap/Table";

export const TodoList = ({
  todos,
  setTodos,
  todoRef,
  btnRef,
  setEditMode,
  setId,
}) => {
  return (
    <Table striped bordered className="my-5">
      <thead>
        <tr className="text-center">
          <th>tarea</th>
          <th>estado</th>
          <th>acciones</th>
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
    </Table>
  );
};

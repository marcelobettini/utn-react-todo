import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "bootstrap/dist/css/bootstrap.min.css";
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
      setTodos((prevState) => (prevState = arrEdit));
    }

    todoRef.current.value = null;
  };
  const deleteCompleted = () => {
    setTodos(todos.filter((el) => !el.completed));
  };
  return (
    <Container>
      <Form className="my-5">
        <Row className="align-items-center text-capitalize">
          <Form.Group className="col-12 col-lg-8 ">
            <FloatingLabel controlId="floatingInput" label="nueva tarea">
              <Form.Control
                ref={todoRef}
                type="text"
                autoFocus
                placeholder="Ingrese descripción..."
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="col-12 col-lg-4 my-2 text-center">
            <Button
              variant="success"
              size="sm"
              className="mx-2"
              ref={btnRef}
              onClick={handlerAddTodo}
            >
              Agregar tarea
            </Button>
            <Button size="sm" variant="danger" onClick={deleteCompleted}>
              Eliminar finalizadas
            </Button>
          </Form.Group>
        </Row>

        <TodoList
          todos={todos}
          setTodos={setTodos}
          todoRef={todoRef}
          btnRef={btnRef}
          setEditMode={setEditMode}
          setId={setId}
        />
      </Form>
    </Container>
  );
}

export default App;

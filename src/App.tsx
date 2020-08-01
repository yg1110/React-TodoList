import React, { useState } from "react";
import { TodoList } from "./views/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

const initalTodos: Array<Todo> = [
  { text: "Walk", complete: true },
  { text: "Write", complete: false }
];

const App = () => {
  const [todos, setTodos] = useState(initalTodos);
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;

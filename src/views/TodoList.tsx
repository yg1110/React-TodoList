import React, { useState } from "react";
import { AddTodoForm } from "../components/TodoList/AddTodoForm";
import { TodoListForm } from "../components/TodoList/TodoListForm";

const initalTodos: Array<Todo> = [
  { text: "Walk", complete: true },
  { text: "Write", complete: false }
];

const TodoList = () => {
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
      <TodoListForm todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoList;

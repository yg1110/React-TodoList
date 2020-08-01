type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selecttedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

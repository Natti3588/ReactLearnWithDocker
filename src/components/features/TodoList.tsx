import { useState } from "react";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, text: "unti", completed: false }]);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="list bg-base-100 rounded-box shadow-md mx-10">
      <li className="p-4 pb-2 text-lg opacity-60 tracking-wide text-left items-center border-b border-base-300">
        Todo一覧
      </li>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;

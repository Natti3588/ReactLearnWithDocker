import { useState } from "react";
import type { Todo } from "../../types/todo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  };

  const addTodo = (text: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text: text, completed: false, created_at: Date.now() }]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md mx-10">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide text-left items-center border-b border-base-300">
          Todo一覧
        </li>
        {todos.length === 0 ? (
          <li className="p-4 text-center opacity-60">現在予定のTodoはありません</li>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))
        )}
      </ul>
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default TodoList;

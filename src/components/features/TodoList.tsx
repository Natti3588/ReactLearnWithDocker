import { useState } from "react";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md mx-10">
      <li className="p-4 pb-2 text-lg opacity-60 tracking-wide text-left uppercase">
        TodoList一覧
      </li>
      <TodoItem />
    </ul>
  );
};

export default TodoList;

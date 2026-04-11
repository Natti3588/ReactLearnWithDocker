import { useState } from "react";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState("");

  return (
    <ul className="list bg-base-100 rounded-box shadow-md mx-10">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide text-center">
        TodoList一覧
      </li>

      
    </ul>
  );
};

export default TodoList;

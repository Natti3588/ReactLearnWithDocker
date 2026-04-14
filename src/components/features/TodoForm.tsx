import { useState } from "react";

type TodoFormProps = {
  addTodo: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center h-29 items-center">
      <input
        type="text"
        placeholder="Todoを入力..."
        className="input"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;

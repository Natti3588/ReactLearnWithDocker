import type { Todo } from "../../types/todo";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li className="list-row">
      <div className="grid grid-cols-3 items-center list-col-grow">
        <div />
        <button
          type="button"
          className={`justify-self-center text-lg font-semibold ${todo.completed ? "line-through text-gray-400" : ""}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </button>
        <button
          type="button"
          className="justify-self-end btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          onClick={() => deleteTodo(todo.id)}
        >
          削除
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

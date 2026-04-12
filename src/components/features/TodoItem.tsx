import type { Todo } from "./TodoList";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void; // 引数に数値(id)を受け取り、何も返さない関数
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-row">
      <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
      <div className="flex justify-center items-center list-col-grow">
        <div className="text-xs uppercase font-semibold">Remaining Reason</div>
      </div>
    </li>
  );
};

export default TodoItem;

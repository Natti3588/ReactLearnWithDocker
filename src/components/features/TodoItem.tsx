import type { Todo } from "../../types/todo"

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void; // 引数に数値(id)を受け取り、何も返さない関数
  deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-row">
      <div className="text-4xl font-thin opacity-30 tabular-nums">{todo.id}</div>
      <div className="grid grid-cols-3 items-center list-col-grow">
        <div />
        <div className="justify-self-center text-lg font-semibold" onClick={() => toggleTodo(todo.id)}>{todo.text}</div>
        <button className="justify-self-end btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" onClick={() => deleteTodo(todo.id)}>削除</button>
      </div>
    </li>
  );
};

export default TodoItem;

const TodoItem: React.FC = () => {
  return (
    <li className="list-row">
      <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
      <div className="flex justify-center items-center list-col-grow">
        <div className="text-xs uppercase font-semibold">
          Remaining Reason
        </div>
      </div>
    </li>
  );
};

export default TodoItem;

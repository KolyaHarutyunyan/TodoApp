import { useAppDispatch } from "../../hooks/store";
import { removeTodo, toggleTodo } from "../../store/features/todo/todoSlice";
import type { Todo } from "../../models/todo";

interface ITodoItemProps {
  todo: Todo;
  number: number;
}
export const TodoItem: React.FC<ITodoItemProps> = ({ todo, number }) => {
  const { id, task, completed } = todo;
  const createdAt = id.substring(0, 10);

  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center w-full text-lg mb-4 cursor-default">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span
        className="flex justify-between items-end flex-grow mx-8 text-white max-w-full text-left overflow-x-auto"
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {`${number}. ${task}`}
        <em className="text-sm ml-2 min-w-max">{createdAt}</em>
      </span>
      <button
        type="button"
        className="text-white text-3xl"
        onClick={() => dispatch(removeTodo(id))}
      >
        &times;
      </button>
    </li>
  );
};

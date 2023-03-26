import { useAppSelector } from "../../hooks/store";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div className="py-8 px-2 text-center">
      {todos.length === 0 && (
        <p className="italic text-white">Your Todos will be here...</p>
      )}
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} number={++index} />
        ))}
      </ul>
    </div>
  );
};

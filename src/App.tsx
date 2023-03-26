import { useState } from "react";
import { TodoField, TodoList } from "./components/todo";
import { useAppDispatch } from "./hooks/store";
import { addTodo } from "./store/features/todo/todoSlice";
import type { Todo } from "./models/todo";

function App() {
  const [task, setTask] = useState<string>("");

  const dispatch = useAppDispatch();

  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: new Date().toISOString(),
      task,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTask("");
  };

  return (
    <div className="w-screen h-screen bg-purple-500 flex justify-center p-8">
      <div className="max-w-xl w-full">
        <TodoField text={task} setValue={setTask} onAdd={addNewTodo} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

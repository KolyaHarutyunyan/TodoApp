export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

export type TodoSlice = {
  todos: Todo[];
};

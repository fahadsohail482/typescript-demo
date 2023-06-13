//removing the keys defined
type Todo = {
  name: string;
  description: string;
  completed: boolean;
};

type TodoInfo = Omit<Todo, "description" | "completed">;

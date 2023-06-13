//removing the keys defined
type Todo1 = {
  name: string;
  description: string;
  completed: boolean;
};

type TodoMeta = Pick<Todo, "description" | "completed">;

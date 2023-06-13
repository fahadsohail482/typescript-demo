interface Todo2 {
  title: string;
  description: string;
}
type Keys=keyof Todo2
function updateTodo(todo: Todo2, fieldsToUpdate: Partial<Todo2>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

//Required is opposite to partial
//Readonly make all properties readonly
// Record<string,string | number | boolean>

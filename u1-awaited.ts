//Type the Await in async functions and .then
const result = Promise.resolve("Sohail");

type TResult = Awaited<typeof result>;

//Another Example
async function resolverFun(): Promise<number> {
  return 1;
}

type TResolver = ReturnType<typeof resolverFun>; //Promise
type TResolver2 = Awaited<ReturnType<typeof resolverFun>>; //number

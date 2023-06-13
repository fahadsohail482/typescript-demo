type NameOrId<T extends string | number> = T extends number ? number : string;
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  ///create the label
  throw "unimplemented";
}

type NewType<K> = K extends number ? number : string;
function createLabel123<Type extends string | number>(idOrName: Type): NewType<Type> {
  throw "unimplemented";
}

const one = createLabel("Hello Label");
const two = createLabel(20);
const three = createLabel(true ? "Hello" : 10);

//Check the message type of Email
interface Email {
  message: string;
}
interface House {
  location: string;
}
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
type MessageContent = MessageOf<Email>;
type HouseContent = MessageOf<House>;

//Let find the arrays element type. string or number
type Flatten<T> = T extends any[] ? T[number] : T;
type StringType = Flatten<string[]>;
type SingleType = Flatten<string>;
type SingleType2 = Flatten<number>;

//using infer
type Flatten2<T> = T extends Array<infer K> ? K : T;
type ArrayType = Flatten2<number[]>;
//Get the return Type of a function
function sumOfThree(a: number, b: number, c: number) {
  return a + b + c;
}
function array(a: number[]) {
  return [...a];
}
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
type FuncReturnType = GetReturnType<typeof sumOfThree>;
type FuncReturnType2 = GetReturnType<typeof array>;
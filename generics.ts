//Hello world of Generics.
function identity(arg: number): number {
  return arg;
}
function identity1(arg: any): any {
  return arg;
}
//Lose Track of the Type
function identity2<Type>(arg: Type): Type {
  return arg;
}

//How to use it.
const idResult = identity2("Return the same");
const idResult1 = identity2<string>("Return the same");

///
// function LoggingIdentity<Type>(arg: Type[]): Type[] {
//   console.log(arg.length);
//   return arg;
// }

function LoggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

//Create Your Own Generic Type or Interface
interface GenericIdentity {
  <Type>(arg: Type[]): Type[];
}
const log: GenericIdentity = LoggingIdentity;

//Using Type Parameters in Generic Constraints

const userObject = {
  name: "Fahad",
  email: "fahad@gmail.com",
  password: "*********",
};


function getProperty<T, K extends keyof T>(obj: T, name: K) {
  return obj[name];
}

getProperty(userObject, "name");

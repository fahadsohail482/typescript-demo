import { TUser, IUser } from "./01-type-vs-interface";
// Function declaration
// 1
// Parameter Type Annotations
function setName(name: string) {
  //send the uppercased name.
  return name.toUpperCase();
}
// setName(40)
//This would be an Error

// 2
// Return Type Annotations
function setNameWithReturnType(name: string): string {
  //send the uppercased name.
  return name.toUpperCase();
}

//3
// Parameter Type Annotations with object

//1nd Way
function getUserName(user: { name: string; email: string; id: number }) {
  //send the uppercased name.
  return user.name.toLowerCase();
}

//2nd Way

function getDestructuredUserName({
  name,
  email,
  id,
}: {
  name: string;
  email: string;
  id: number;
}) {
  //send the uppercased name.
  return name.toLowerCase();
}

//3rd Way
function getDestructuredUserNameWithType(user: TUser) {
  //send the uppercased name.
  return user.name.toLowerCase();
}
//4rd Way
function getDestructuredUserNameWithInterface(user: IUser) {
  //send the uppercased name.
  return user.name.toLowerCase();
}

//With function Signature using interfaces and Types.

interface IGetUser {
  (user: IUser): string;
}

type TGetUser = (user: IUser) => string;

//after the name
const getUserWithFunctionExpression: TGetUser = (user) => {
  return user.name.toLowerCase();
};

///one more way to type this
// Through Generics Type Arguments
//For example combine two Arrays
// function combineArrays<T, K>(arr1: T[], arr2: K[]) {
//   //return type is automatically inferred.
//   return arr1.concat(arr2);
// }
//2 Ways to call
//Explicitly passing type argument
// const combinedArray = combineArrays<number, string | number>(
//   [1, 2, 3],
//   ["4", 5, 6]
// );
//let compiler automatically do it for you by checking the parameter passed
// const combinedArray2 = combineArrays<string, number>(
//   ["6", "5", "4"],
//   [1, 2, 3]
// );

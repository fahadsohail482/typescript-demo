// To add one or more properties

type A = {
  age: number;
};

type B = {
  name: string;
};

type C = A | B;

//Merge to a single type but makes every property optional.
//define only one property

const user: C = {
  age: 10,
};

//define only one property

const user2: C = {
  name: "Sajeel",
};

//define both properties

const user23: C = {
  name: "Sajeel",
  age: 10,
};

//Auto Merge with same name ??
// Cant be merged with same name like interfaces does.
// type C = A;
// Error Duplicate Indentifier C

// UseCase
function logger(text: string | number) {
  console.log("Message: " + text);
}

logger("Deployed"); // Message: Deployed
logger(123); // Message: Deployed

//Access functions related to parameters
// function logger2(text: string | number) {
//   console.log("Message: " + text.toUpperCase());
// }
//We have an error. Property 'toUpperCase' does not exist on type 'string | number'.

//Typescript will allow only those operations that are common to every member of the union.
// Then What's the solution ?????
// Narrow down the union ??
//Type Narrowing by if else blocks.
function logger2Solution(text: string | number) {
  if (typeof text === "string") {
    console.log("Message: " + text.toUpperCase());
  } else {
    console.log("Message: " + text);
  }
}
//Another Example with array type
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    //do array struff.
    console.log("Hello ", x.join(" and "));
  } else {
    //this is the single user
    console.log("Hello ", x, "Mate!!!");
  }
}

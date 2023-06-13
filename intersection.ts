// Multiple Types to a single Type

interface A {
  name: string;
}

interface B {
  age: number;
}

//Auto Merge
interface B {
  password: string;
}

type C = A & B;

const user: C = {
  age: 10,
  name: "Sajeel",
  password:"123"
};
user.name = "Waien";
// it will throw error if we miss a type

//Auto Merge with same name ??
// Auto Merge works only with Interfaces.
// if type get declared multiple times then typescript compiler throws an error.

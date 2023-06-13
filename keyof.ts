//extract the keys of object as union of strings
interface Person {
  name: string;
  email: string;
  password: string;
  age: number;
}

type PersonProperties = keyof Person;

///Mapped Type usage
interface P {
  [key: string]: string;
}

type PKeys = keyof P; //string number

//string number boolean
let myName:string = "Sajeel";
let age: number = 20;
let isStudent: boolean = true;

//Type for Primitives
type TEmail = string;
const email: TEmail = "sw@gmail.com";

type TPassword = string;
const password: TPassword = "sw@gmail.com";

type TAge = number;
const typedAge: TAge = 26;

//Type for Objects
export type TUser = {
  name: string;
  email: string;
  id: number;
};

const user: TUser = {
  name: "sajeel",
  email: "sw1@gmail.com",
  id: 1,
};

//Interface
export interface IUser {
  name: string;
  email: string;
  id: number;
}

const interfacedUser: IUser = {
  name: "sajeel",
  email: "sw1@gmail.com",
  id: 1,
};

//differences
//Type
//More like Object declaration with an equal sign
const myObj = {};
//Interface
//More like a Class Style
class User {}

//Interface can extend another Interface
//Interface can extend another Type [incase of Object]
//Extends makes all properties required.
interface ILockedUser extends IUser {
  //has all the properties from IUser
  //can add more
  //all properties are required now.
  isLocked: boolean;
}
const lockedUser: ILockedUser = {
  email: "",
  id: 10,
  isLocked: true,
  name: "",
};

//User with password extending Type of type object.
interface IUserWithPassword extends TUser {
  password: string;
}

const userWithPassword: IUserWithPassword = {
  email: "",
  id: 10,
  name: "",
  password: "somePassword",
};

//readonly properties
interface IReadOnlyUser {
  readonly name: string;
}

const proxyUser: IReadOnlyUser = {
  name: "Fahad",
};
// proxyUser.name = "Sohail";

// const proxyName = "Fahad";
// proxyName="Sohail"
// readonly vs const which one to use
// when dealing with properties use readonly and varibables use const

// Key TakeAway
// the key distinction is that a type cannot be re-opened to add new properties
//  vs an interface which is always extendable.

//Type Assertion
//Sometimes typescript doesn't know exactly what it is. like docu.getElementById always return an html element.
//to specify a more specific type:
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//alternative
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");


//Non-null Assertion Operator (Postfix !)
type TValue = string | null | undefined;
function remoteName(name:TValue){
   const value= name!.toString() //string is present only
}

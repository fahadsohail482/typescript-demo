//Define a Numeric ENUM
enum TopLanguagesEnum {
  C = 1,
  "C++",
  Rust,
  Fortran,
  Julia,
  Ada,
  Java,
  "C#",
  "F#",
  Pascal,
}
//If not one then from 0.
//How to use it.
enum UserResponse {
  No ,
  Yes ,
}

function respond(person: string, message: UserResponse) {
  ///do something with response
  console.log(message); // result would be 1.
}
respond("Sajeel Wayne", UserResponse.Yes);

//String Enums
// Same as Numeric enums but every memeber has to be initialized with a string literal or string enum member.

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//Same usage as Numeric Enums.

///Reverse Mapping of Numeric Enums.
//get key from value.
const value = TopLanguagesEnum["F#"]; //6
const key = TopLanguagesEnum[value];
console.log("key", key);
// Not Possible in String Based Enums.

///runtime behaviour of Enums
//They act like object and can be passed to the functions.

function topLang(obj: typeof TopLanguagesEnum) {
  return obj.Fortran;
}
console.log(topLang(TopLanguagesEnum));

//Compile Time
//Keyof operator works differently here.
//to get the keys of value use "keyof typeof" together.
type TTopLanguagesEnum = keyof typeof TopLanguagesEnum;
function logRank(name: TTopLanguagesEnum) {
  //extract from enum object
  return TopLanguagesEnum[name];
}

console.log(logRank("C"));

const TopLanguages = {
  C: 1,
  "C++": 2,
  Rust: 3,
  Fortran: 4,
  Julia: 5,
  Ada: 6,
  Java: 7,
  "C#": 8,
  "F#": 9,
  Pascal: 10,
} as const;

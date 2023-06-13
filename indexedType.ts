//extract a property from another type

interface Ship {
  make: string;
  model: string;
  year: number;
  isLicenced: boolean;
}

type ShipMake = Ship["make" | "isLicenced"];

type ShipProperties = Ship[keyof Ship];
//return union of keys
type LicencedAndYear = Ship["make" | "isLicenced"];

//With Arrays
const people = [
  {
    name: "Sohail",
    age: 26,
  },
  {
    name: "Sohail",
    age: 26,
  },
  {
    name: "Sohail",
    age: 26,
  },
];
const stringArray =["Sajeel","Sohail","Fahad"]
type StringArrayType=typeof stringArray[number]
type People = typeof people[number];
//a step up.
type PersonAge = typeof people[number]["age"];
type PersonAge2 = People["age"];

let tname: string = "Shubham";
console.log("tname", tname);

let id: number = 5;
let anyVar: any = "anyString"
anyVar = 5

let arr: number[] = [1, 2, 3];

// Tuple
let tuple: [string, boolean, number] = ["string", true, 5];
// TUple array
let tupleArr: [number, string][];
tupleArr = [[1, "Shubham"], [2, "Dusane"]];

// Union
let unionVar: string | number = "22" || 22;

// enum
enum Direction {
    Up = 'Up',
    Down = 1,
    Left,
    Right
}
console.log("enum", Direction.Up)

// Objects
type User = {
    readonly id: number,
    name: string
}
const newUser: User = {
    id: 1,
    name: "Shubham"
}

// Interface
interface Bird {
    fly?: boolean,
    eat: string,
    swim: boolean,
    readonly legs: number
}
const eagle: Bird = {
    fly: true,
    eat: "anything",
    swim: false,
    legs: 0
}
console.log("eagle", eagle)

// type vs interface
// Interface can be open while type can't
type Point = number | string;
// interface interName = number | string;       // It gives an error. Can't assign type to the interface direct. But in type we can.

// Type asserting = Type conversion
let age: any = 23;
let personAge = <number>age;
personAge = 25;

// function
function customFunc(id: number | string): void {
    if (typeof id === "string")
        console.log(id.toLowerCase());
    else if (typeof id === "number")
        console.log(id + 1);
}
customFunc(2);
customFunc("it's string")

let a: number[] = [1, 2, 3];
let immutate: ReadonlyArray<number> = a;
// a = immutate;       // immutable immutate can't be assigned to mutable a
a = immutate as number[]

// function interface
interface MathFunc {
    (x: number, y: number): number,
}
const add: MathFunc = (x: number, y: number) => x + y
console.log(add(11, 22));


// Function in interface
interface Thing {
    func: (arg: number) => number;  // Its property
    func2(arg: number): number;      // Its function
}
const funct: Thing = {
    func: (arg): number => {
        return arg;
    },
    func2(arg): number {
        return arg;
    }
}
console.log(funct.func2(2));
console.log(funct.func(3));


// Indexed array in interface
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);


// Generics 
function gen<T>(num: T[]): T {
    return num[0];
}
console.log(gen<number | string>([1, 2, 3, "ok"]));

function overloadedFunc(num: number, str: number): number;
function overloadedFunc(num1: number, str1: number, str2?: number): number {
    return 2;
}

// Function overloading
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);   // error
console.log(d1, d2);

function fn(x: boolean): (string | boolean);
// Argument type isn't right
function fn(y: boolean, x: string): (string | boolean);
function fn(x: boolean, y?: string): string {
    return ""
}

type PersonNameType = { name: string; }
type Person1 = { age: number; }

interface PersonNameInterface { name: string; }
type Person2 = PersonNameType & Person1

// We can combine two interfaces to create intersection type but cannot create intersection interfaces
interface PersonNameInterface { name: string; }
interface PersonAgeInterface { age: number; }
type Person3 = PersonNameInterface & PersonAgeInterface
   
"use strict";
let tname = "Shubham";
console.log("tname", tname);
let id = 5;
let anyVar = "anyString";
anyVar = 5;
let arr = [1, 2, 3];
// Tuple
let tuple = ["string", true, 5];
// TUple array
let tupleArr;
tupleArr = [[1, "Shubham"], [2, "Dusane"]];
// Union
let unionVar = "22" || 22;
// enum
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("enum", Direction.Up);
const newUser = {
    id: 1,
    name: "Shubham"
};
const eagle = {
    fly: true,
    eat: "anything",
    swim: false,
    legs: 0
};
console.log("eagle", eagle);
// interface interName = number | string;       // It gives an error. Can't assign type to the interface direct. But in type we can.
// Type asserting = Type conversion
let age = 23;
let personAge = age;
personAge = 25;
// function
function customFunc(id) {
    if (typeof id === "string")
        console.log(id.toLowerCase());
    else if (typeof id === "number")
        console.log(id + 1);
}
customFunc(2);
customFunc("it's string");
let a = [1, 2, 3];
let immutate = a;
// a = immutate;       // immutable immutate can't be assigned to mutable a
a = immutate;
const add = (x, y) => x + y;
console.log(add(11, 22));
const funct = {
    func: (arg) => {
        return arg;
    },
    func2(arg) {
        return arg;
    }
};
console.log(funct.func2(2));
console.log(funct.func(3));
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
console.log(myStr);
// Generics 
function gen(num) {
    return num[0];
}
console.log(gen([1, 2, 3, "ok"]));
function overloadedFunc(num1, str1, str2) {
    return 2;
}
// Function overloading
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
function makeDate() {
    //   if (d !== undefined && y !== undefined) {
    //     return new Date(y, mOrTimestamp, d);
    //   }
    //   else {
    //     return new Date(mOrTimestamp);
    //   }
    console.log("args", arguments);
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
console.log(d1, d2);
function fn(x, y) {
    return "";
}
class Xyz {
    constructor() {
        this.ename = { name: "Shubham" };
    }
}

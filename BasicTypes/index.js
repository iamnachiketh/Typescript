"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 10;
var user = { name: "Alex", age: 22, isAlive: true };
console.log(a);
console.log(user);
var name = "John";
// name = 10; // This wiil give you an error because name is already infered to string
console.log(name);
// With respect to variables mentioning type annotation is not neccessary
// Functions
function multiplyTwo(num) {
    return num * 2;
}
var res = multiplyTwo(10);
console.log(res);

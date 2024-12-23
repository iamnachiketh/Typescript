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
// If we dont mention what is the data type of the parameters then it will be implicit Any(we can pass any value as an argument) which is a bad practice.
// So we should always mention the data type of the parameters in the function definition.
// Same goes with the return type.
// Functions
function multiplyTwo(num) {
    return num * 2;
}
var res = multiplyTwo(10);
console.log(res);
// never type is used wheren ever a functions never returns anything  or terminates the function immideatly or explicitly throws an error.
function handleError(error) {
    throw new Error(error);
}
// Handeling return type as object type
function getPerson() {
    return { name: "John", age: 22 };
}
function getPerson1() {
    return { name: "John", age: 22 };
    // return {name:"John", age:22, email:"john@gmail"}; // This will give you an error because email is not mentioned in the return type.
}
// For above two functions getPerson and getPerson1, getPerson1 is more specific and better than getPerson.
//If i want to return a object with email then i can also have it as an optional parameter otherwise it will be syntax error.
function setPerson(_a) {
    var string = _a.name, number = _a.age;
}
function createPerson(person) {
    console.log(person);
}
// Now we wont be able to change the value of _id property.
var mobile = {
    _id: 1,
    brand: "Samsung",
    model: "Galaxy"
};
// mobile._id = 2; // This will give you an error because _id is read-only.
var personWithMobile = {
    name: "John",
    age: 22,
    place: "India",
    _id: 1,
    brand: "Samsung",
    model: "Galaxy"
}; // Here we are combining two types Person and Mobile. This is called Intersection type.
var personWithMobile1 = {
    name: "John",
    age: 22,
    place: "India"
}; // this also works because it is optional. This is called Union type.
// Union type is used when we want to have multiple types for a single variable.
// In Union type we can not access methods which are specific to a particular type.
var data = [1, 2, 3, 4, 5];
var data1 = ["a", "b", "c", "d", "e"];
var data2 = ["a", "b", "c"]; // This says that data2 can be either number array or string array not mix of both.
var data3 = [1, 2, 3, "a", "b", "c"]; // This says that data3 can be either number or string array or mix of both.
// Arrays
var numbers = [1, 2, 3, 4, 5];
var numbers1 = [1, 2, 3, 4, 5];
var names = ["John", "Alex", "Bob"];
// Tuples
var details = ["Hello", 45, true];
// If i change the order of the values then its will be an error.
// details = [true,56,"Alex"]; this gives us an error.
details.push("John"); // This will not give you an error because push method is available in the tuple.
console.log(details);
// Enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Red;
console.log(color); // This will print 0 because Red is at 0th index.

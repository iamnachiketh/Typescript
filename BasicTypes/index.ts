let a: number = 10;

let user: object = { name: "Alex", age: 22, isAlive: true };

console.log(a);

console.log(user);

let name = "John";

// name = 10; // This wiil give you an error because name is already infered to string

console.log(name);

// With respect to variables mentioning type annotation is not neccessary



// If we dont mention what is the data type of the parameters then it will be implicit Any(we can pass any value as an argument) which is a bad practice.

// So we should always mention the data type of the parameters in the function definition.

// Same goes with the return type.

// Functions

function multiplyTwo(num:number):number{
    return num * 2;
}

let res = multiplyTwo(10);
console.log(res);

// never type is used wheren ever a functions never returns anything  or terminates the function immideatly or explicitly throws an error.

function handleError(error:string):never{
    throw new Error(error);
}


// Handeling return type as object type
function getPerson():object{
    return {name:"John", age:22};
}



function getPerson1():{name:string, age:number}{
    return {name:"John", age:22};
    // return {name:"John", age:22, email:"john@gmail"}; // This will give you an error because email is not mentioned in the return type.
}




// For above two functions getPerson and getPerson1, getPerson1 is more specific and better than getPerson.

//If i want to return a object with email then i can also have it as an optional parameter otherwise it will be syntax error.

function setPerson({name:string, age:number}){
}

// setPerson({name:"John"}); // This will give you an error because age is not mentioned in the object.

// setPerson({name:"John", age:22, email:"john@gmail"}); // This will give you an error because email is not mentioned in the object.

// we can have optional parameters in the object by using ? mark.





// Type Allias

// Custom types can be created using type allias.

type Person = {
    name:string;
    age:number;
    place:string;
}

function createPerson(person:Person){
    console.log(person);
}

// While calling the function we have to pass the object with the same properties as mentioned in the type allias.


// Keywords like read-only, ?, |, & can be used in the type allias.

// read-only: The value of the property cannot be changed.

type Mobile = {
    readonly _id:number;
    brand:string;
    model:string;
    price?:number;  // Optional parameter with ? mark.
}

// Now we wont be able to change the value of _id property.

let mobile:Mobile = {
    _id:1, 
    brand:"Samsung", 
    model:"Galaxy"
};

// mobile._id = 2; // This will give you an error because _id is read-only.

let personWithMobile: Person & Mobile =  {
    name:"John",
    age:22,
    place:"India",
    _id:1,
    brand:"Samsung",
    model:"Galaxy"
} // Here we are combining two types Person and Mobile. This is called Intersection type.

let personWithMobile1: Person | Mobile =  {
    name:"John",
    age:22,
    place:"India"
} // this also works because it is optional. This is called Union type.

// Union type is used when we want to have multiple types for a single variable.

// In Union type we can not access methods which are specific to a particular type.


let data: number[] = [1,2,3,4,5];

let data1: string[] = ["a","b","c","d","e"];

let data2: number[]|string[] = ["a","b","c"]; // This says that data2 can be either number array or string array not mix of both.

let data3: (number|string)[] = [1,2,3,"a","b","c"]; // This says that data3 can be either number or string array or mix of both.



// Arrays
let numbers: number[] = [1,2,3,4,5];

let numbers1: Array<number> = [1,2,3,4,5];

let names: string[] = ["John", "Alex", "Bob"];


// Tuples

let details:[string, number, boolean] = ["Hello",45,true];

// If i change the order of the values then its will be an error.

// details = [true,56,"Alex"]; this gives us an error.

details.push("John"); // This will not give you an error because push method is available in the tuple.

console.log(details);


// Enums

enum Colors {
    Red,
    Green,
    Blue
}   

let color = Colors.Red;
console.log(color); // This will print 0 because Red is at 0th index.


enum Colors1 {
    Red = 5,
    Green,
    Blue
}

enum Colors2 {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

export {};
let arr:Array<number> = []; // Creating an array of numbers

arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr); // [10, 20, 30]

let arr2:Array<string> = []; // Creating an array of strings

arr2.push('Hello');
arr2.push('World');

console.log(arr2); // ['Hello', 'World']


// The above code snippet demonstrates the use of generics in TypeScript. 

// Here, we have created two arrays, one for numbers and the other for strings. 

// We have used the generic type Array<T> to create these arrays. 

// This allows us to create arrays of any type, such as numbers, strings, objects, etc.


function display<T>(args: T): T {
    return args;
}

let output1 = display<string>('Hello');

console.log(output1); // Hello

let output2 = display<number>(100);

console.log(output2); // 100

interface User{
    name: string;
    age: number;

}

let output3 = display<User>({name: 'John', age: 30});

console.log(output3); // { name: 'John', age: 30 }

function findUser(user:User[]): User {
    let res = user.filter((ele:User)=>ele.age < 40);
    return res[0];

}

let user = findUser([{name: 'John', age: 40}, {name: 'Doe', age: 30}, {name: 'Smith', age: 50}, {name: 'Alex', age: 60}]);

console.log(user); // { name: 'John', age: 30 }



export{}; // To prevent the TS2304 error


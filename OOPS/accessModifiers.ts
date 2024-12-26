class Mobile{
    private brand:String;
    private model:String ;
    private price:Number;

    constructor(brand:String, model:String, price:Number){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    public getDetails(){
        return `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`;
    }
}

let mobile1 = new Mobile("Apple", "iPhone 12", 80000);

// console.log(mobile1.brand); // Compilation Error: Property 'brand' is private and only accessible within class 'Mobile'.

console.log(mobile1.getDetails()); // Output: Brand: Apple, Model: iPhone 12, Price: 80000


class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{

    private empId: number;

    constructor(name: string, age: number, empId: number){
        super(name, age);
        this.empId = empId;
    }

    public display(){
        console.log(`Name: ${this.name}, Age: ${this.age}, EmpId: ${this.empId}`);
    }
}

let emp1 = new Employee("John", 30, 101);

//emp1.name = ""; // Compilation Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

// console.log(emp1.name); // Compilation Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.

emp1.display(); // Output: Name: John, Age: 30, EmpId: 101

// Note: To access Protected data members we have to inherit the class to access the properties of the base class.

export { } // To avoid "Cannot redeclare block-scoped variable" error
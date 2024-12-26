class Person{

    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;

    }
}

class Employee extends Person{

    empId: number;

    constructor(name: string, age: number, empId: number){
        super(name, age);
        this.empId = empId;
    }


    display(){
        console.log(`Name: ${name}, Age: ${this.age}, EmpId: ${this.empId}`);
    }
}

// Constructor of the base class is called first and then the constructor of the derived class is called.

let emp1 = new Employee("John", 30, 101);

emp1.display(); // Output: Name: John, Age: 30, EmpId: 101

// The derived class can access the properties of the base class using the this keyword.


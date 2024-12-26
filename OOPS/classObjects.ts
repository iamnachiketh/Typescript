class Student {
    name: String;
    rollno: Number;
}

let student1 = new Student();

console.log(student1); // Output: {}

student1.name = "John";
student1.rollno = 101;

console.log(student1); // Output: { name: 'John', rollno: 101 }



class Mobile {
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`;
    }
}

let mobile1 = new Mobile("Apple", "iPhone 12", 80000);
console.log(mobile1.getDetails()); // Output: Brand: Apple, Model: iPhone 12, Price: 80000


export { } // To avoid "Cannot redeclare block-scoped variable" error
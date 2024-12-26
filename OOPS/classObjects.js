"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student1 = new Student();
console.log(student1); // Output: {}
student1.name = "John";
student1.rollno = 101;
console.log(student1); // Output: { name: 'John', rollno: 101 }
var Mobile = /** @class */ (function () {
    function Mobile(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    Mobile.prototype.getDetails = function () {
        return "Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Price: ").concat(this.price);
    };
    return Mobile;
}());
var mobile1 = new Mobile("Apple", "iPhone 12", 80000);
console.log(mobile1.getDetails()); // Output: Brand: Apple, Model: iPhone 12, Price: 80000

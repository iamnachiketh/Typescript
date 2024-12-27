"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
// console.log(mobile1.brand); // Compilation Error: Property 'brand' is private and only accessible within class 'Mobile'.
console.log(mobile1.getDetails()); // Output: Brand: Apple, Model: iPhone 12, Price: 80000
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, empId) {
        var _this = _super.call(this, name, age) || this;
        _this.empId = empId;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", EmpId: ").concat(this.empId));
    };
    return Employee;
}(Person));
var emp1 = new Employee("John", 30, 101);
//emp1.name = ""; // Compilation Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// console.log(emp1.name); // Compilation Error: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
emp1.display(); // Output: Name: John, Age: 30, EmpId: 101
// Note: To access Protected data members we have to inherit the class to access the properties of the base class.
var Car = /** @class */ (function () {
    function Car(brand, model, price, discount) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.discount = discount;
    }
    return Car;
}());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'John',
    email: 'john@example.com',
    password: 'john@123',
    age: 25,
    display: function () {
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
    }
};
user.display();
var admin = {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'admin@123',
    age: 30,
    role: 'Admin',
    display: function () {
        console.log('Name:', this.name);
        console.log('Email:', this.email);
        console.log('Password', this.password);
        console.log('Role:', this.role);
    }
};
admin.display();

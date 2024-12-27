interface User{
    name:String,
    email:String,
    password:String,
    age:Number,
    address?:String,
    // display:()=> void
    display():void
}

let user:User = {
    name:'John',
    email:'john@example.com',
    password:'john@123',
    age:25,
    display:function(){
        console.log('Name:',this.name);
        console.log('Email:',this.email);
        console.log('Password:',this.password);

    }
}

user.display();


interface Admin extends User{
    role: string;
}

let admin:Admin = {
    name:'Admin',
    email:'admin@gmail.com',
    password:'admin@123',
    age:30,
    role:'Admin',
    display:function(){
        console.log('Name:',this.name);
        console.log('Email:',this.email);
        console.log('Password',this.password);
        console.log('Role:',this.role);
    }
}

admin.display();

// Note: Interface can extend multiple interfaces.
// Note: Interface can extend class but it will not inherit the implementation of the class.

export {};
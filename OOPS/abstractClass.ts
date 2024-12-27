abstract class Mobile {
    constructor(public model: string) {
    }
    abstract display(): void

    call(): void {
        console.log('Calling...');
    }
}

// let mobile = new Mobile('Samsung'); // Error: Cannot create an instance of an abstract class.

class Samsung extends Mobile {
    constructor(public model: string) {
        super(model);
    }

    display() { // Implementing the abstract display method
        console.log(`Model: ${this.model}`);
    }

    call(): void { // Overriding the call method
        super.call();
        console.log('Calling from Samsung...');
    }
}

let samsung = new Samsung('Samsung Galaxy S10');

samsung.display(); // Model: Samsung Galaxy S10

samsung.call();
/* 

Calling.... 
Calling from Samsung...

*/

export { } // To prevent the TS2304 error

class Ott{
    private _name: string = "Ott";
    private _age: number = 25;

    get name(){ // Annotation: get
        return this._name;
    }

    set name(name: string){ // Annotation: set
        this._name = name;
    }

    get age(){
        return this._age;
    }

    set age(age: number){ // Setter method should have only one parameter and it should not have any return type. not even void
        this._age = age;
    }
}

let ott1 = new Ott();

// console.log(ott1._name); // Output: Error: Property '_name' is private and only accessible within class 'Ott'.

console.log(ott1.name); // Output: Ott
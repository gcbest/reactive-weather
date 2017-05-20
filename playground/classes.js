class Person {
    constructor(name = 'Anonymous', age = 15) {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        return `Hello ${this.name}`
    }
    // can overwrite built-in standard JS functions
    toString() {
        return JSON.stringify(this);
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Child extends Person {
    constructor (name, age, like) {
        // calls the parent's constructor function and passes in the name and age from child's constructor
        super(name, age);
        this.like = like;
    }
    getDescription() {
        return `Hiiiiiiiiii my name is ${this.name} and I like ${this.like}`;
    }
}

class Baby extends Person {
    getGreeting () {
        return "Wahhhhhhh";
    }
}

var me = new Person('Josie', 40);
var anon = new Child(3,'elephants');

console.log(me.getDescription());
console.log(anon.getDescription());
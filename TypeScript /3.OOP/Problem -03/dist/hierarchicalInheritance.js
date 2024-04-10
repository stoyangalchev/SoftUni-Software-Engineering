"use strict";
class Animal {
    constructor() {
        this.heloo = "Hello";
    }
    eat() {
        return "eating...";
    }
}
class Dog extends Animal {
    constructor() {
        super();
        this.dog = "Dog";
    }
    bark() {
        return this.dog + " barking...";
    }
    eat() {
        return this.dog + " " + super.eat();
    }
}
class Cat extends Animal {
    constructor() {
        super();
        this.cat = "Cat";
    }
    meow() {
        return this.cat + " meowing...";
    }
    eat() {
        return this.cat + " " + super.eat();
    }
}
const dog = new Dog();
console.log(dog.eat());
const cat = new Cat();
console.log(cat.eat());
const dog1 = new Dog();
console.log(dog1.bark());
const cat1 = new Cat();
console.log(cat.meow());

"use strict";
class Person {
    constructor(name, age) {
        this.name = name || "";
        this.age = age || 0;
    }
    get personInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
    set personInfo(value) {
        const [name, age] = value;
        this.name = name;
        this.age = Number(age);
    }
}
//!This is solution without setter and getter
// const person = new Person("Peter", 26);
// console.log(person.personInfo());
// const person2 = new Person("Stefan", 25);
// console.log(person2.personInfo());
//! This is solution with setter and getter
const person = new Person();
// person.name = "Stoyan";
// person.age = 26;
person.personInfo = ["Stefan", "25"];
console.log(person.personInfo);

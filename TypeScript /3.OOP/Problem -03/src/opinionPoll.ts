class Person {
  name: string;
  age: number;

  constructor(name?: string, age?: number) {
    this.name = name || "";
    this.age = age || 0;
  }

  get personInfo(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  set personInfo(value: string[]) {
    const [name, age] = value;
    this.name = name;
    this.age = Number(age);
  }
//!This is solution without setter and getter
  // personInfo(): string {
  //   return `${this.name} is ${this.age} years old.`;
  // }
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

import { Greeter } from "./greeter";

class Person implements Greeter.Greeting<string> {
  constructor(private name: string, private age: number) {}

  introduction(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  sayGoodbye(name: string): string {
    return `Dear ${name}, it was a pleasure meeting you!`;
  }
}
let p = new Person("Ivan Ivanov", 25);

console.log(p.introduction());

console.log(p.sayGoodbye("Petar Petrov"));
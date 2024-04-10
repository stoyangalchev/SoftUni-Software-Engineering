class Animal {
  heloo: string = "Hello";
  eat() {
    return "eating...";
  }
}

class Dog extends Animal {
  dog: string = "Dog";
  constructor() {
    super();
  }

  bark() {
    return this.dog + " barking...";
  }
  eat() {
    return this.dog + " " + super.eat();
  }
}

class Cat extends Animal {
  cat: string = "Cat";
  constructor() {
    super();
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

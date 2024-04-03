class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  meow() {
    console.log(`Name: ${this.name} -- Personal Number: ${this.name.length}`);
  }
}

function empoloyees(input: string[]) {
  input.forEach((name) => {
    let cat = new Employee(name);
    cat.meow();
  });
}

empoloyees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

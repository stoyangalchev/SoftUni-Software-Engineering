"use strict";
class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get brandModel() {
        return `The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`;
    }
    set brandModel(value) {
        const parts = value;
        this.brand = parts[0];
        this.model = parts[1];
        this.horsePower = Number(parts[2]);
    }
}
const car = new Car("BMW", "X5", 250);
console.log(car.brandModel);
console.log(car.brand);
console.log(car.model);
console.log(car.horsePower);
car.brandModel = ["Audi", "A6", "300"];
console.log(car.brandModel);
console.log(car.brand);
console.log(car.model);
console.log(car.horsePower);

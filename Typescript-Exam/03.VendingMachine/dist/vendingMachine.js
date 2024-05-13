"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.getCount < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        let index = this.drinks.findIndex((x) => x.name === name);
        if (index === -1) {
            return false;
        }
        this.drinks.splice(index, 1);
        return true;
    }
    getLongest() {
        return this.drinks.sort((a, b) => b.volume - a.volume)[0].toString();
    }
    getCheapest() {
        return this.drinks.sort((a, b) => a.price - b.price)[0].toString();
    }
    buyDrink(name) {
        //Method buyDrink(name: string) – returns a string in the format of the overriden toString() method
        return this.drinks.find((x) => x.name === name)?.toString() || null;
    }
    report() {
        return `Drinks available:${"\n"}${this.drinks
            .map((x) => x.toString())
            .join("\n")}`;
    }
}
exports.VendingMachine = VendingMachine;

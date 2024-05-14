import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  get getCount(): number {
    return this.drinks.length;
  }

  addDrink(drink: Drink): void {
    if (this.getCount < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    let index = this.drinks.findIndex((x) => x.name === name);
    if (index === -1) {
      return false;
    }
    this.drinks.splice(index, 1);
    return true;
  }

  getLongest(): string {
    return this.drinks.sort((a, b) => b.volume - a.volume)[0].toString();
  }

  getCheapest(): string {
    return this.drinks.sort((a, b) => a.price - b.price)[0].toString();
  }

  buyDrink(name: string): string | null {
    //Method buyDrink(name: string) – returns a string in the format of the overriden toString() method

    return this.drinks.find((x) => x.name === name)?.toString() || null;
  }

  report(): string {
    return `Drinks available:${"\n"}${this.drinks
      .map((x) => x.toString())
      .join("\n")}`;
  }
}

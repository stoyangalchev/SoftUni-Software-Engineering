class ChristmasDinner {
  propert = [];
  constructor(budget, dishes, products, guests) {
    this._budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }
  get _budget() {
    return this.budget;
  }
  set _budget(value) {
    if (typeof value !== "number") {
      throw new Error("The budget cannot be string");
    } else if (value <= 0) {
      throw new Error("The budget cannot be a negative number");
    }

    return (this.budget = value);
  }

  shopping(arr) {
    let [type, price] = arr.join(" ").split(" ");
    price = Number(price);
    if (this.budget - price <= 0) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.products.push(type);
      this.budget -= price;
      return `You have successfully bought ${type}!`;
    }
  }

  recipes(obj) {
    let recipeName = obj.recipeName;
    let productsList = obj.productsList;
    let isPresented = false;
    for (let el of productsList) {
      if (this.products.includes(el)) {
        isPresented = true;
      } else {
        isPresented = false;
        break;
      }
    }
    if (isPresented == true) {
      this.dishes.push(obj);
      return `${recipeName} has been successfully cooked!`;
    } else {
      throw new Error(`We do not have this product`);
    }
  }

  inviteGuests(name, dish) {
    let isFindDish = this.dishes.find((item) => item.recipeName === dish);

    if (isFindDish == undefined) {
      throw new Error("We do not have this dish");
    } else if (!this.guests.hasOwnProperty(name)) {
      this.guests[name] = dish;
      this.propert.push(name);
      this.propert.push(dish);
      this.propert.push(this.dishes);
      return `You have successfully invited ${name}!`;
    } else {
      throw new Error("This guest has already been invited");
    }
  }

  showAttendance() {
    let output = "";
    Object.keys(this.guests).forEach((name) => {
      let dish = this.guests[name];
      let products = [];
      this.dishes.forEach((curDish) => {
        if (curDish.recipeName === dish) {
          products = curDish.productsList;
        }
      });
      output += `${name} will eat ${dish}, which consists of ${products.join(
        ", "
      )}\n`;
    });
    return output.trim();
  }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});

dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});

dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");

dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());

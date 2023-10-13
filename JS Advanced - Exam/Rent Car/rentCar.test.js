let { assert } = require("chai");
let rentCar = require("./rentCar");

describe("Tests RENTCAR", function () {
  describe("Tests searchCar(shop, model)", function () {
    it("Function  return true ", function () {
      assert.equal(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW"),
        `There is 1 car of model ${"BMW"} in the catalog!`
      );
    });
    it("Function  return  false", function () {
      assert.throw(() => {
        rentCar.searchCar(["Volkswagen", "BmW", "Audi"], "BMW");
      }, `There are no such models in the catalog!`);
    });
    it("Function  return  invalid input", function () {
      assert.throw(() => {
        rentCar.searchCar("string", "BMW");
      }, `Invalid input!`);
    });
    it("Function  return  invalid input2", function () {
      assert.throw(() => {
        rentCar.searchCar("string", []);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input3", function () {
      assert.throw(() => {
        rentCar.searchCar({}, []);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input4", function () {
      assert.throw(() => {
        rentCar.searchCar([2, 3, 4], "bm,w");
      }, `There are no such models in the catalog!`);
    });
    it("Function  return  invalid input5", function () {
      assert.throw(() => {
        rentCar.searchCar(undefined, "bm,w");
      }, `Invalid input!`);
    });
    it("Function  return  invalid input6", function () {
      assert.throw(() => {
        rentCar.searchCar(2, 2);
      }, `Invalid input!`);
    });
  });
  describe("Tests calculatePriceOfCar(model, days)", function () {
    it("Function  return  invalid input1", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar(2, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input2", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar([2], 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input3", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar(["string"], 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input4", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar(undefined, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input9", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar(null, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input5", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar(null, null);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input6", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar("bmw", [null]);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input7", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar("bmw", 1.2);
      }, `Invalid input!`);
    });
    it("Function  return  true", function () {
      assert.equal(
        rentCar.calculatePriceOfCar("BMW", 45),
        `You choose BMW and it will cost $2025!`
      );
    });
    it("Function  return  true2", function () {
      assert.equal(
        rentCar.calculatePriceOfCar("Mercedes", 50),
        `You choose Mercedes and it will cost $2500!`
      );
    });
    it("Function  return  true3", function () {
      assert.equal(
        rentCar.calculatePriceOfCar("Mercedes", 50),
        `You choose Mercedes and it will cost $2500!`
      );
    });
    it("Function  return  invalid input7", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar("bmw", 1);
      }, `No such model in the catalog!`);
    });
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.calculatePriceOfCar("2", 1);
      }, `No such model in the catalog!`);
    });
  });
  describe("Tests checkBudget(costPerDay, days, budget)", function () {
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.checkBudget("2", 1, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.checkBudget(1.2, 1, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.checkBudget(1, 1.2, 2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.checkBudget(1, 1, 2.2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input8", function () {
      assert.throw(() => {
        rentCar.checkBudget(1.2, 1.2, 2.2);
      }, `Invalid input!`);
    });
    it("Function  return  invalid input8", function () {
      assert.equal(rentCar.checkBudget(1000, 10, 22000), `You rent a car!`);
    });
    it("Function  return  invalid input8", function () {
      assert.equal(
        rentCar.checkBudget(22001, 10, 22000),
        `You need a bigger budget!`
      );
    });
    it("Function  return  invalid input8", function () {
      assert.equal(
        rentCar.checkBudget(22001, 1010000, 22000),
        `You need a bigger budget!`
      );
    });
    it("Function  return  invalid input8", function () {
      assert.equal(rentCar.checkBudget(1, 1000, 1000), `You rent a car!`);
    });
  });
});

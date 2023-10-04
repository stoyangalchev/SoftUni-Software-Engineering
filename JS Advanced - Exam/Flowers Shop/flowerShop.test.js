let { assert } = require("chai");
let flowerShop = require("./flowerShop");

describe("Test For FlowerShop", function () {
  describe("calcPriceOfFlowers(flower, price, quantity)", function () {
    it("Function Return return multtiply price quantity", function () {
      assert.equal(
        flowerShop.calcPriceOfFlowers("Hrizantema", 10, 6),
        "You need $60.00 to buy Hrizantema!"
      );
    });
    it("Function Return return multtiply price quantity 2", function () {
      assert.equal(
        flowerShop.calcPriceOfFlowers("Hrizantema", 0, 0),
        "You need $0.00 to buy Hrizantema!"
      );
    });
    it("Function Return return multtiply price quantity tofixed", function () {
      let flower = "roses";
      let price = 10;
      let quantity = 6;
      let result = (price * quantity).toFixed(2);
      assert.equal(
        flowerShop.calcPriceOfFlowers(flower, price, quantity),
        `You need $${result} to buy ${flower}!`
      );
    });
    it("Function Return return Invalid input", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers(2, 2, 6);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 2", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers("Rose", 2.3, 6);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 3", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers("Rose", 2, 4.3);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 4", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers("Rose", "s", 3);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 5", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers("Rose", 4, "2");
      }, "Invalid input");
    });
    it("Function Return return Invalid input 6", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers(-3, "2", "2");
      }, "Invalid input");
    });
    it("Function Return return Invalid input 7", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers(undefined, undefined, undefined);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 8", function () {
      assert.throws(() => {
        flowerShop.calcPriceOfFlowers(null, null, 2);
      }, "Invalid input");
    });
  });
  describe("checkFlowersAvailable(flower, gardenArr)", function () {
    it("Function Return return Rose are available", function () {
      assert.equal(
        flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]),
        "The Rose are available!"
      );
    });
    it("Function Return return The Orka are sold! You need to purchase more!", function () {
      assert.equal(
        flowerShop.checkFlowersAvailable("Orka", []),
        "The Orka are sold! You need to purchase more!"
      );
    });
  });
  describe("sellFlowers(gardenArr, space)", function () {
    it("Function Return return true", function () {
      assert.equal(
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2),
        "Rose / Lily"
      );
    });
    it("Function Return return  Lily / Orchid", function () {
      assert.equal(
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0),
        "Lily / Orchid"
      );
    });
    it("Function Return return  ", function () {
      assert.equal(
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0),
        "Lily / Orchid"
      );
    });
    it("Function Return return Invalid input 8", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 212", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 21212", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 212122", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], null);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 21212", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], undefined);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 22213", function () {
      assert.throws(() => {
        flowerShop.sellFlowers([0], 2);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 221f213", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(undefined, 2);
      }, "Invalid input");
    });
    it("Function Return return Invalid input 222213", function () {
      assert.throws(() => {
        flowerShop.sellFlowers(undefined, 2);
      }, "Invalid input");
    });
  });
});

let { assert } = require("chai");
let onlineStore = require("./onlineStore");

describe("test", function () {
  describe("test", function () {
    it("test", function () {
      assert.equal(
        onlineStore.isProductAvailable("Beer", 0),
        "Sorry, Beer is currently out of stock."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.isProductAvailable("Beer", -1),
        "Sorry, Beer is currently out of stock."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.isProductAvailable("Beer", 1),
        "Great! Beer is available for purchase."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.isProductAvailable("Beer", 2),
        "Great! Beer is available for purchase."
      );
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(1, 2);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(undefined, 2);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(undefined, undefined);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(-1, "sa");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable([], []);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(0, 0);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable("s", "s");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.isProductAvailable(-1, -2);
      }, "Invalid input.");
    });
  });
  describe("test", function () {
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(1, 2),
        "Product purchased. Your remaining balance is $1."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(2, 1),
        "You don't have sufficient funds to buy this product."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(2, 2),
        "Product purchased. Your remaining balance is $0."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(0, 0),
        "Product purchased. Your remaining balance is $0."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(-2, 2),
        "Product purchased. Your remaining balance is $4."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.canAffordProduct(2, -2),
        "You don't have sufficient funds to buy this product."
      );
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct("S", "s");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct(undefined, "s");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct(undefined, undefined);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct(1, "s");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct("S", 1);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct(null, null);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.canAffordProduct([], []);
      }, "Invalid input.");
    });
  });
  describe("test", function () {
    it("test", function () {
      assert.equal(
        onlineStore.getRecommendedProducts(
          [{ name: "Camera", category: "Photography" }],
          "Photography"
        ),
        "Recommended products in the Photography category: Camera"
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.getRecommendedProducts(
          [{ name: "Camera", category: "s" }],
          "Photography"
        ),
        "Sorry, we currently have no recommended products in the Photography category."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.getRecommendedProducts([], "Photography"),
        "Sorry, we currently have no recommended products in the Photography category."
      );
    });
    it("test", function () {
      assert.equal(
        onlineStore.getRecommendedProducts(
          [{ name: "Camera", category: "s" }],
          "s"
        ),
        "Recommended products in the s category: Camera"
      );
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts([], 1);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts(undefined, 1);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts([], undefined);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts(-1, 1);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts(1, 1);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts([], []);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts(null, null);
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts("st", "St");
      }, "Invalid input.");
    });
    it("test", function () {
      assert.throws(() => {
        onlineStore.getRecommendedProducts("sf", 1);
      }, "Invalid input.");
    });
  });
});

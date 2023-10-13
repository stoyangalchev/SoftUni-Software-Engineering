let { assert } = require("chai");
let findNewApartment = require("./findApartment");

describe("Test", function () {
  describe("Test1", function () {
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("S:", false),
        "This location is not suitable for you."
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", false),
        "There is no public transport in area."
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("Plovdiv", false),
        "There is no public transport in area."
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("Varna", true),
        "You can go on home tour!"
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("Sofia", true),
        "You can go on home tour!"
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isGoodLocation("s", true),
        "This location is not suitable for you."
      );
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(1, true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(-1, true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation([], true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation({}, true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(undefined, true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(null, true);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(-1, "sstr");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation("s", "sstr");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(-2, -1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(2, -1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isGoodLocation(2, 1);
      }, "Invalid input!");
    });
  });
  describe("Test1", function () {
    it("Test", function () {
      assert.equal(
        findNewApartment.isLargeEnough([40, 50, 60], 1),
        "40, 50, 60"
      );
    });
    it("Test", function () {
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 60), "60");
    });
    it("Test", function () {
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 50), "50, 60");
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isLargeEnough([40, 50, 60], 40),
        "40, 50, 60"
      );
    });
    it("Test", function () {
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 100), "");
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isLargeEnough([40, 50, 60], -1),
        "40, 50, 60"
      );
    });
    it("Test", function () {
      assert.equal(findNewApartment.isLargeEnough([-1], 100), "");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough([], 100);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough("s", 100);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough([], "sfa");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough(-1, -1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough(1, 1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough(undefined, undefined);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough(["Stri"], [2]);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isLargeEnough(null, [2]);
      }, "Invalid input!");
    });
  });
  describe("Test1", function () {
    it("Test", function () {
      assert.equal(
        findNewApartment.isItAffordable(10, 11),
        "You can afford this home!"
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isItAffordable(12, 11),
        "You don't have enough money for this house!"
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isItAffordable(100, 100),
        "You can afford this home!"
      );
    });
    it("Test", function () {
      assert.equal(
        findNewApartment.isItAffordable(101, 100),
        "You don't have enough money for this house!"
      );
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(100, -100);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(-100, -100);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(0, -100);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(100, 0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(0, -0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(0, -0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable("100", -"100");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable("Srr", "sf");
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable([], []);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable([222], [22]);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(undefined, []);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable([], undefined);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(null, []);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(null, null);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable("sa", -1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(0, 1);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(1, 0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(2, 0);
      }, "Invalid input!");
    });
    it("Test", function () {
      assert.throws(() => {
        findNewApartment.isItAffordable(0, 2);
      }, "Invalid input!");
    });
  });
});

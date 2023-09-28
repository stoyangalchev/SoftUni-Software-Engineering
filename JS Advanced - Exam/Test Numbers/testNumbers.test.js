let { assert } = require("chai");
let testNumbers = require("./testNumbers");

describe("Tests", function () {
  describe("Test1", function () {
    it("Check if parameters are numbers?", function () {
      assert.equal(testNumbers.sumNumbers(1, 1), 2.0);
      assert.equal(testNumbers.sumNumbers(1, 4), 5.0);
      assert.equal(testNumbers.sumNumbers(2, 2), 4.0);
    });
    it("Numbers can be positive and negative", function () {
      assert.equal(testNumbers.sumNumbers(1, -3), -2.0);
      assert.equal(testNumbers.sumNumbers(-3, 1), -2.0);
      assert.equal(testNumbers.sumNumbers(-3, -3), -6.0);
    });
    it("If parameters aren't number, function return undefined", function () {
      assert.equal(testNumbers.sumNumbers("1", 1), undefined);
      assert.equal(testNumbers.sumNumbers(1, "2"), undefined);
      assert.equal(testNumbers.sumNumbers("1", 2), undefined);
    });
    it("The function returns the sum of the given numbers, rounded to second number after decimal point", function () {
      assert.equal(testNumbers.sumNumbers(10, 1).length, 5);
      assert.equal(testNumbers.sumNumbers(1, 3).length, 4);
      assert.equal(testNumbers.sumNumbers(2, 2).length, 4);
    });
  });

  describe("Test2", function () {
    it("The function parses the input to number, and validates it", function () {
      assert.throws(() => testNumbers.numberChecker("strin"), Error);
    });
    it("If number is Even", function () {
      assert.equal(testNumbers.numberChecker(2), "The number is even!");
    });
    it("If number is Odd", function () {
      assert.equal(testNumbers.numberChecker(3), "The number is odd!");
    });
    it("If input  is not number", function () {
      assert.throws(() => testNumbers.numberChecker("{"), Error);
    });

    describe("Test3", function () {
      it("the function iterates through each element in the array, calculates the sum, and returns the average sum", function () {
        assert.equal(testNumbers.averageSumArray([1, 2]), 1.5);
      });
      it("if is nedative", function () {
        assert.equal(testNumbers.averageSumArray([-1, -2]), -1.5);
      });
    });
  });
});

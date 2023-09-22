let assert = require("chai").assert;
let numberOperations = require("./Number Operations_Resources");

describe("TESTS FOR PROGRAM", function () {
  describe("First Testing", function () {
    it("NumberOpeation.powNumber Return True result", function () {
      assert.equal(numberOperations.powNumber(2), 4);
    });

    it("NumberOpeation.powNumber Return False result", function () {
      assert.deepEqual(numberOperations.powNumber("2d"), NaN);
    });
  });

  describe("Second Testing", function () {
    it("NumberOpeation.numberChecker Return Error result", function () {
      assert.throws(() => numberOperations.numberChecker("2d"), Error);
    });

    it("NumberOpeation.numberChecker Return < 100 result", function () {
      assert.deepEqual(
        numberOperations.numberChecker(99),
        "The number is lower than 100!"
      );
    });

    it("NumberOpeation.numberChecker Return > 100 result", function () {
      assert.deepEqual(
        numberOperations.numberChecker(101),
        "The number is greater or equal to 100!"
      );
    });

    it("NumberOpeation.numberChecker Return = 100 result", function () {
      assert.deepEqual(
        numberOperations.numberChecker(100),
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("Third Testing", function () {
    it("NumberOpeation.sumArrays() Return Equal.length", function () {
      assert.deepEqual(
        numberOperations.sumArrays([1, 2, 3], [4, 5, 6]),
        [5, 7, 9]
      );
    });

    it("NumberOpeation.sumArrays() Return NOT Equal.length", function () {
      assert.deepEqual(numberOperations.sumArrays([1], [4, 5, 6]), [5, 5, 6]);
    });

    it("NumberOpeation.sumArrays() Return emptyArr", function () {
      assert.deepEqual(numberOperations.sumArrays([], [4, 5, 6]), [4, 5, 6]);
    });

    it("NumberOpeation.sumArrays() Return {}", function () {
      assert.deepEqual(numberOperations.sumArrays([], [4, 5, 6]), [4, 5, 6]);
    });

    it("NumberOpeation.sumArrays() Return NAN", function () {
      assert.deepEqual(numberOperations.sumArrays({}, [4, 5, 6]), [
        NaN,
        NaN,
        NaN,
      ]);
    });
  });
});

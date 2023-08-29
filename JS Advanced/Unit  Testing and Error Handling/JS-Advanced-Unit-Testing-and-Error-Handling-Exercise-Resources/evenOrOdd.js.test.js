const { assert } = require("chai");
const isOddOrEven = require("./evenOrOdd");

describe("Test is Odd or Even", () => {
  it("The passed parameter if is number?", () => {
    assert.equal(isOddOrEven(5), undefined);
  });
  it("Even test ", () => {
    assert.equal(isOddOrEven("hi"), "even");
  });
  it("Odd test ", () => {
    assert.equal(isOddOrEven("hey"), "odd");
  });
});

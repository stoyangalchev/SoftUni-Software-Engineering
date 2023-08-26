const expect = require("chai").expect;
const sum = require("./sumofNumbers");

describe("Sum of numbers", () => {
  it("Should return the sum of the numbers in array", () => {
    let numbers = [1, 2, 3, 4, 5];
    let expectedSum = 15;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
  it("Should return the sum of negative numbers in array", () => {
    let numbers = [1, 2, 3, 4, -5];
    let expectedSum = 5;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
  it("Should return emptyArr", () => {
    let numbers = [];
    let expectedSum = +0;
    let actualSum = sum(numbers);

    expect(actualSum).to.equal(expectedSum);
  });
});

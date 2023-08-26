const expect = require("chai").expect;
const isSymmetric = require("./checkForSymmetry");

describe("Test Verification", () => {
  it("Must Return Function", () => {
    let input = [1, 2, 1];

    let expectedSum = true;
    let actualReturn = isSymmetric(input);
    expect(actualReturn).to.equal(expectedSum);
  });

  it("Must Return Array", () => {
    let input = [1, 2, 3, 4, 5];
    let typeOfInput = typeof input;
    let expectedSum = "object";
    let actualSum = isSymmetric(input);

    expect(typeOfInput).to.equal(expectedSum);
  });
  it("Return false for any input that isnt of the correct type", () => {
    let input = true;
    let typeOfInput = typeof input;
    let expectedInput = "object";

    if (typeOfInput != expectedInput) {
    }

    expect(typeOfInput).to.not.equal(expectedInput);
  });
  it("Return true if the input array is symmetric", () => {
    let input = [1, 2, 1];
    let actualSum = isSymmetric(input);

    expect(actualSum).to.equal(true);
  });
  it("Return false if the input array is symmetric", () => {
    let input = [1, 2, 4];
    let actualSum = isSymmetric(input);

    expect(actualSum).to.equal(false);
  });

  it("should return true on isSymmetric([2])", () => {
    expect(isSymmetric([2])).to.be.true;
  });

  // []
  it("should return true on isSymmetric([])", () => {
    expect(isSymmetric([])).to.be.true;
  });

  // string instead []
  it('should return false on isSymmetric("hello")', () => {
    expect(isSymmetric("hello")).to.be.false;
  });
  it("should return true on isSymmetric([1,2,1])", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  // even count - numbers only
  it("should return false on isSymmetric([1,2,-1])", () => {
    expect(isSymmetric([1, 2, -1])).to.be.false;
  });

  // odd count - numbers only
  it("should return true on isSymmetric([10,20,20,10])", () => {
    expect(isSymmetric([10, 20, 20, 10])).to.be.true;
  });

  // even count - numbers only
  it("should return false on isSymmetric([10,20,30,10])", () => {
    expect(isSymmetric([10, 20, 30, 10])).to.be.false;
  });

  // odd count - mixed types
  it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
    expect(
      isSymmetric([
        "pesho",
        new Date(2016, 8, 15),
        false,
        new Date(2016, 8, 15),
        "pesho",
      ])
    ).to.be.true;
  });

  // even count - mixed types
  it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
    expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be
      .false;
  });
});

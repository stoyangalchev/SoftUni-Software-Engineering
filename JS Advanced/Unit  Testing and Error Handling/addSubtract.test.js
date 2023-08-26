const expect = require("chai").expect;
const createCalculator = require("./addSubtract");

describe("Tests for this task", function () {
  let calc;
  beforeEach(function () {
    calc = createCalculator();
  });

  describe("Function tests - checks if it is a function", function () {
    it("should be a function", function () {
      expect(typeof calc).to.equal("object");
    });
  });

  describe("Zero value when created", function () {
    it("should zero value when created", function () {
      expect(calc.get()).to.equal(0);
    });
  });

  describe("Check add function", function () {
    it("Check add function", function () {
      calc.add(3);
      calc.add(4);
      expect(calc.get()).to.equal(7);
    });
  });

  describe("Check subtract function", function () {
    it("Check subtract function", function () {
      calc.subtract(5);
      calc.subtract(4);
      expect(calc.get()).to.equal(-9);
    });
  });

  describe("Check add function with fractions", function () {
    it("Check add function with fractions", function () {
      calc.add(3.14);
      calc.add(4.14);
      expect(calc.get()).to.equal(7.279999999999999);
    });
  });

  describe("Check subtract function with fractions", function () {
    it("Check subtract function with fractions", function () {
      calc.subtract(-3.14);
      calc.subtract(-4.14);
      expect(calc.get()).to.equal(7.279999999999999);
    });
  });

  describe("Check incorrect input for add", function () {
    it("Check incorrect input for add", function () {
      calc.add("pesho");
      expect(calc.get()).to.be.NaN;
    });
  });

  describe("Check incorrect input for subtract", function () {
    it("Check incorrect input for subtract", function () {
      calc.subtract("pesho");
      expect(calc.get()).to.be.NaN;
    });
  });

  describe("Check empty input", function () {
    it("Check empty input", function () {
      calc.subtract();
      expect(calc.get()).to.be.NaN;
    });
  });

  describe("Check both functions (add/subtract) with strings", function () {
    it("Check both functions (add/subtract) with strings", function () {
      calc.add("pesho");
      calc.subtract("gosho");
      expect(calc.get()).to.be.NaN;
    });
  });

  describe("Should work with numbers as strings", function () {
    it("Should work with numbers as strings", function () {
      calc.add("7");
      expect(calc.get()).to.equal(7);
    });
  });
});

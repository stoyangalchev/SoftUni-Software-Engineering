const expect = require("chai").expect;
const rgbToHexColor = require("./rGBtoHex");

describe("Tests for the RGB TO HEX task", function () {
  describe("General test", function () {
    it("should return #100C0D for (16, 12, 13)", function () {
      expect(rgbToHexColor(16, 12, 13)).to.equal("#100C0D");
    });
  });

  describe("Test lowest possible input: zeros", function () {
    it("test with zeros", function () {
      expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
  });

  describe("Test highest possible input: 255", function () {
    it("test with 255", function () {
      expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input -negative number", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
    });
  });

  describe("Invalid input out of the Range", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(266, 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: string", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor("266", 12, 13)).to.equal("undefined");
    });
  });

  describe("Invalid input: fractional numbers", function () {
    it("should be undefined", function () {
      expect(typeof rgbToHexColor(3.13, 12, 13)).to.equal("undefined");
    });
  });

  describe("Pad values with zeros", function () {
    it("should pad values with zeros", function () {
      expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });
  });

  describe("No input test", function () {
    it("no input test", function () {
      expect(rgbToHexColor()).to.be.undefined;
    });
  });
});

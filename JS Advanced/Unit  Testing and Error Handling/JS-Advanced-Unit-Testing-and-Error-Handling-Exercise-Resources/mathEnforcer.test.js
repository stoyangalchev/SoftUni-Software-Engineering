const { expect } = require("chai");
const mathEnforcer = require("./mathEnforcer");

describe("Tests for this task", function () {
    //addFive() tests:
        describe("Check the addFive function input", function () {
            it("with a string - undefined", function () {
                let result = mathEnforcer.addFive("5");
                expect(result).to.be.undefined;
            });
     
            it("with positive number", function () {
                let result = mathEnforcer.addFive(5);
                expect(result).to.equal(10);
            });
     
            it("with negative number", function () {
                let result = mathEnforcer.addFive(-5);
                expect(result).to.equal(0);
            });
     
            it("with floating number", function () {
                let result = mathEnforcer.addFive(3.12);
                expect(result).to.be.closeTo(8.12, 0.01);
            });
        });
    //subtractTen() tests:
        describe("Check the subtractTen function input", function () {
            it("with a string - undefined", function () {
                let result = mathEnforcer.subtractTen("5");
                expect(result).to.be.undefined;
            });
     
            it("with positive number", function () {
                let result = mathEnforcer.subtractTen(20);
                expect(result).to.equal(10);
            });
     
            it("with negative number", function () {
                let result = mathEnforcer.subtractTen(-20);
                expect(result).to.equal(-30);
            });
     
            it("with floating number", function () {
                let result = mathEnforcer.subtractTen(3.12);
                expect(result).to.equal(-6.88, 0.01);
            });
        });
    //sum() tests:
        describe("Check the sum function input", function () {
            it("with a 1st input incorrect - undefined", function () {
                let result = mathEnforcer.sum(1, "5");
                expect(result).to.be.undefined;
            });
     
            it("with a 2nd input incorrect - undefined", function () {
                let result = mathEnforcer.sum("1", 5);
                expect(result).to.be.undefined;
            });
     
            it("with positive number", function () {
                let result = mathEnforcer.sum(20, 10);
                expect(result).to.equal(30);
            });
     
            it("with negative number", function () {
                let result = mathEnforcer.sum(-20, -10);
                expect(result).to.equal(-30);
            });
     
            it("with floating number", function () {
                let result = mathEnforcer.sum(3.12, 3.12);
                expect(result).to.equal(6.24,0.01)
                
                ;
            });
     
            it("with floating number", function () {
                let result = mathEnforcer.sum(-3.12, -3.12);
                expect(result).to.equal(-6.24, 0.01);
            });
        });
    });
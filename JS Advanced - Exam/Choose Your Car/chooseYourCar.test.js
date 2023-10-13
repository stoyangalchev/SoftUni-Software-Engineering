let { expect } = require("chai");
let chooseYourCar = require("./chooseYourCar");

describe("Testing the choosingType functionality", function () {
    it("Should not work with 1899 as a year", function () {
        expect(() => chooseYourCar.choosingType("Sedan", "black", 1899)).to.Throw("Invalid Year!")
    });
    it("Should work with 1900 as a year", function () {
        let result = chooseYourCar.choosingType("Sedan", "black", 1900);
        expect(result).to.equal("This Sedan is too old for you, especially with that black color.")
    });
    it("Should not work if the year is 2023", () => {
        expect(() => chooseYourCar.choosingType("Sedan", "black", 2023)).to.Throw("Invalid Year!")
    })
    it("Should work if the year is 2022", () => {
        let result = chooseYourCar.choosingType("Sedan", "yellow", 2022);
        expect(result).to.equal(`This yellow Sedan meets the requirements, that you have.`)
    })
    it("Should not work if type != Sedan", () => {
        expect(() => chooseYourCar.choosingType("Cabrio", "red", 2008)).to.Throw("This type of car is not what you are looking for.")
    })
    it("It should work if the year is 2010", () => {
        let result = chooseYourCar.choosingType("Sedan", "purple", 2010);
        expect(result).to.equal(`This purple Sedan meets the requirements, that you have.`)
    })
    it("It should work if the year is 2011", () => {
        let result = chooseYourCar.choosingType("Sedan", "purple", 2011);
        expect(result).to.equal(`This purple Sedan meets the requirements, that you have.`)
    })
    it("Should work if the year is 2009", () => {
        let result = chooseYourCar.choosingType("Sedan", "purple", 2009);
        expect(result).to.equal("This Sedan is too old for you, especially with that purple color.")
    })
});

describe("Checking the inner function brandName", () => {
    it("Should work with a 0 index", () => {
        let result = chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], 0);
        expect(result).to.equal("Porsche, Lamborghini, Opel, Lada, Volvo");
    })
    it("Should work if the index is the last element", () => {
        let result = chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], 5);
        expect(result).to.equal("Toyota, Porsche, Lamborghini, Opel, Lada");
    })
    it("Should not work if the index is negative", () => {
        expect(() => chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], -1)).to.Throw("Invalid Information!");
    })
    it("Should not work if the index is bigger than the length", () => {
        expect(() => chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], 6)).to.Throw("Invalid Information!");
    })
    it("Should not work if the array is not one", () => {
        expect(() => chooseYourCar.brandName({ Toyota: "Jeep" }, 1)).to.Throw("Invalid Information!");
    })
    it("Should not work if the index != number", () => {
        expect(() => chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], "5")).to.Throw("Invalid Information!");
    })
    it("Should not work if the index is a float number", () => {
        expect(() => chooseYourCar.brandName(["Toyota", "Porsche", "Lamborghini", "Opel", "Lada", "Volvo"], 1.6)).to.Throw("Invalid Information!");
    })
    it("Should not work if the array is empty", () => {
        expect(() => chooseYourCar.brandName([], 1)).to.Throw("Invalid Information!");
    })
})

describe("Testing the inner function CarFuelConsumption", () => {
    it("Should work with correct params", () => {
        let result = chooseYourCar.carFuelConsumption(50, 4);
        expect(result).to.equal("The car burns too much fuel - 8.00 liters!")
    })
    it("Should work with 7 liters of fuel per 100km", () => {
        let result = chooseYourCar.carFuelConsumption(50, 3.5);
        expect(result).to.equal("The car is efficient enough, it burns 7.00 liters/100 km.");
    })
    it("Should work with less than 7 liters", () => {
        let result = chooseYourCar.carFuelConsumption(100, 6.9);
        expect(result).to.equal("The car is efficient enough, it burns 6.90 liters/100 km.")
    })
    it("Should work with more than 7 liters", () => {
        let result = chooseYourCar.carFuelConsumption(100, 7.1);
        expect(result).to.equal("The car burns too much fuel - 7.10 liters!")
    })
    it("Should throw an error with negative km", () => {
        expect(() => chooseYourCar.carFuelConsumption(-1, 10)).to.Throw("Invalid Information!");
    })
    it("Should throw and error with negative fuel", () => {
        expect(() => chooseYourCar.carFuelConsumption(100, -10)).to.Throw("Invalid Information!");
    })
    it("Should not work if the km is not a number", () => {
        expect(() => chooseYourCar.carFuelConsumption("100", 10)).to.Throw("Invalid Information!");
    })
    it("Should not work if the liters is not a number", () => {
        expect(() => chooseYourCar.carFuelConsumption(100, "10")).to.Throw("Invalid Information!");
    })
    it("Should work if the km is a float", () => {
        let result = chooseYourCar.carFuelConsumption(10.5, 0.5)
        expect(result).to.equal("The car is efficient enough, it burns 4.76 liters/100 km.")
    })
    it("Should work if the liters is a float", () => {
        let result = chooseYourCar.carFuelConsumption(15, 0.5)
        expect(result).to.equal("The car is efficient enough, it burns 3.33 liters/100 km.")
    })
})


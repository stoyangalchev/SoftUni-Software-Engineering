"use strict";
class CarDealership {
    dealershipName;
    modelsSold;
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.modelsSold = 0;
    }
    sellCar(dealerID, model) {
        console.log(`${dealerID} sold ${model}`);
        this.modelsSold++;
    }
    showDetails() {
        console.log(`Dealership: ${this.dealershipName} sold ${this.modelsSold} cars`);
    }
}
let dealership = new CarDealership("SilverStar");
console.log("SilverStar:");
dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
// console.log(dealership.showDetails());

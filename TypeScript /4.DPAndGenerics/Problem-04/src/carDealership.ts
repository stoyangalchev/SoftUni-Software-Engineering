interface Dealership<T> {
  dealershipName: T;
  modelsSold: number;
}

interface Action<T> {
  sellCar: (dealerID: T, model: T) => void;
}

class CarDealership<T> implements Dealership<T>, Action<T> {
  dealershipName: T;
  modelsSold: number;

  constructor(dealershipName: T) {
    this.dealershipName = dealershipName;
    this.modelsSold = 0;
  }

  sellCar(dealerID: T, model: T) {
    console.log(`${dealerID} sold ${model}`);
    this.modelsSold++;
  }

  showDetails() {
    console.log(
      `Dealership: ${this.dealershipName} sold ${this.modelsSold} cars`
    );
  }
}
let dealership = new CarDealership("SilverStar");
console.log("SilverStar:");
dealership.sellCar("BG01", "C Class");

dealership.sellCar("BG02", "S Class");

dealership.sellCar("BG03", "ML Class");

dealership.sellCar("BG04", "CLK Class");

// console.log(dealership.showDetails());

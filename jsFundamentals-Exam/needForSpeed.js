function NFS(input) {
    let carsCount = input.shift();
    let result = new Map();
 
    for (const element of input) {
        if (element === 'Stop') {
            break;
        }
        if (element.includes('|')) {
            let [car, mileage, fuel] = element.split('|');
            //'Audi A6|38000|62'
 
            result.set(car, []);
            result.get(car).push(Number(mileage));
            result.get(car).push(Number(fuel));
        }
        if (element.includes(' : ')) {
            //'Drive : Audi A6 : 543 : 47'
            let tokens = element.split(' : ');
 
            if (element.includes('Refuel')) {
                let givenCar = tokens[1];
                let givenFuel = Number(tokens[2]);
 
                let sum = givenFuel + result.get(givenCar)[1];
 
                if (sum > 75) {
                    result.get(givenCar)[1] = 75;
                    sum -= 75;
                    console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
                } else {
                    result.get(givenCar)[1] = sum;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`);
                }
            } else if (element.includes('Revert')) {
                let givenCar = tokens[1];
                let kilometers = Number(tokens[2]);
 
                result.get(givenCar)[0] -= kilometers;
 
                if (result.get(givenCar)[0] < 10000) {
                    result.get(givenCar)[0] = 10000;
                } else {
                    console.log(`${givenCar} mileage decreased by ${kilometers} kilometers`);
                }
            } else if (element.includes('Drive')) {
                let givenCar = tokens[1];
                let distance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);
 
                if (givenFuel <= result.get(givenCar)[1]) {
                    result.get(givenCar)[1] -= givenFuel;
                    result.get(givenCar)[0] += distance;
                    console.log(`${givenCar} driven for ${distance} kilometers. ${givenFuel} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }
 
                if (result.get(givenCar)[0] >= 100000) {
                    result.delete(givenCar);
                    console.log(`Time to sell the ${givenCar}!`);
                }
            }
        }
    }
 
    for (const [car, carInfo] of result) {
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);
    }
}
NFS([
  "4",

  "Lamborghini Veneno|11111|74",

  "Bugatti Veyron|12345|67",

  "Koenigsegg CCXR|67890|12",

  "Aston Martin Valkryie|99900|50",

  "Drive : Koenigsegg CCXR : 382 : 82",

  "Drive : Aston Martin Valkryie : 99 : 23",

  "Drive : Aston Martin Valkryie : 2 : 1",

  "Refuel : Lamborghini Veneno : 40",

  "Revert : Bugatti Veyron : 2000",

  "Stop",
]);

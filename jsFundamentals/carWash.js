function carWash(array) {
  let carClean = 0;
  let arrLength = array.length;
  for (let i = 0; i < arrLength; i++) {
    let curentMvment = array[i];
    if (curentMvment === "soap") {
      carClean += 10;
    } else if (curentMvment === "water") {
      carClean *= 1.2;
    } else if (curentMvment === "vacuum cleaner") {
      carClean *= 1.25;
    } else if (curentMvment === "mud") {
      carClean *= 0.9;
    }
  }
  console.log(`The car is ${carClean.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

/*
•	soap – add 10 to the value
•	water – increase the value by 20%
•	vacuum cleaner – increase the value by 25%
•	mud – decrease the value by 10%
*/

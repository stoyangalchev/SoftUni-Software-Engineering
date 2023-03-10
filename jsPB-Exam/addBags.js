function addBags(input) {
  let priceBagsUpto20kg = Number(input.shift());
  let kgBags = Number(input.shift());
  let daysToTrip = Number(input.shift());
  let countBags = Number(input.shift());
  let tax = 0;
  if (kgBags < 10) {
    tax = priceBagsUpto20kg * 0.2;
  } else if (kgBags >= 10 && kgBags <= 20) {
    tax = priceBagsUpto20kg /2;
  } else {
    tax = priceBagsUpto20kg;
  }
  if (daysToTrip > 30) {
    tax = tax * 1.1;
  } else if (daysToTrip >= 7 && daysToTrip <= 30) {
    tax = tax * 1.15;
  } else if (daysToTrip < 7) {
    tax = tax * 1.4;
  }
  let finalSum = tax * countBags;
  console.log(`The total price of bags is: ${finalSum.toFixed(2)} lv. `);
}
addBags(["30",
  "18",
  "15",
  "2"
  ]);

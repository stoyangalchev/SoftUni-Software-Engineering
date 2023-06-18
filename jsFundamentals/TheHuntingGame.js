function solve(input) {
  let days = Number(input.shift());
  let players = Number(input.shift());
  let totalEnergy = Number(input.shift());
  let personWater = Number(input.shift());
  let personFood = Number(input.shift());
  let totalWater = 0;
  let alllWater = days * players * personWater;
  let totalFood = 0;
  let allFood = days * players * personFood;
  let waterDay = 0;
  let foodDay = 0;

  for (let i = 1; i <= days; i++) {
    let wastedEnergy = Number(input.shift());
    totalEnergy -= wastedEnergy;

    if (totalEnergy <= 0) {
      break;
    }

    waterDay++;
    if (waterDay >= 2) {
      alllWater -= alllWater * 0.3;
      totalEnergy += totalEnergy * 0.05;
      waterDay = 0;
    }

    foodDay++;
    if (foodDay >= 3) {
      allFood -= allFood / players;
      totalEnergy += totalEnergy * 0.1;
      foodDay = 0;
    }
  }
  if (totalEnergy >= 1) {
    console.log(
      `You are ready for the quest. You will be left with - ${totalEnergy.toFixed(
        2
      )} energy!`
    );
  } else {
    console.log(
      `You will run out of energy. You will be left with ${allFood.toFixed(
        2
      )} food and ${alllWater.toFixed(2)} water.`
    );
  }
}
solve([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496",
  12,
]);

solve([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);

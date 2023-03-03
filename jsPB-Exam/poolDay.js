function poolDay(input) {
  let peopleCount = Number(input.shift());
  let tax = Number(input.shift());
  let priceChair = Number(input.shift());
  let priceUmbrella = Number(input.shift());

  let sumEnter = peopleCount * tax; //115
  let chairCount = Math.ceil(0.75 * peopleCount); //16
  let sumChair = chairCount * priceChair; //70,4

  let umbrellaCount = Math.ceil(0.5 * peopleCount); //11
  let sumUmbrella = umbrellaCount * priceUmbrella; //68.2
  let finalSum = sumEnter + sumChair + sumUmbrella;
  console.log(finalSum.toFixed(2) + " lv.");
}
poolDay(["50", "6", "8", "4"]);

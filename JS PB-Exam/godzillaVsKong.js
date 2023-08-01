function godzillaVsKong(input) {
  let budgetMovie = Number(input[0]);
  let peopleCount = Number(input[1]);
  let clothesForOnePeople = Number(input[2]);

  let sumDecor = 0.1 * budgetMovie;
  let sumClothes = peopleCount * clothesForOnePeople;
  if (peopleCount > 150) {
    sumClothes *= 0.9;
  }
  let allSumForMovie = sumClothes + sumDecor;
  let leftMoney = Math.abs(budgetMovie - allSumForMovie);

  if (budgetMovie >= allSumForMovie) {
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`
    );
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
  }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])

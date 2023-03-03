function backToThePast(input) {
  let money = Number(input.shift());
  let yearToGo = Number(input.shift());
  let counterYears = 17;
  for (let y = 1800; y <= yearToGo; y++) {
    if (y % 2 == 0) {
      money -= 12000;
      counterYears++;
    } else {
      counterYears++;
      money -= 12000 + counterYears * 50;
    }
  }
  if (money >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${money.toFixed(
        2
      )} dollars left.`
    );
  } else {
    let neededMoney = Math.abs(money);
    console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
  }
}
backToThePast(["100000.15", "1808"]);
backToThePast(["50000", "1802"]);

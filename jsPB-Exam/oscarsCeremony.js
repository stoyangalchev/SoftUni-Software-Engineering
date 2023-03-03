function oscarsCeremony(input) {
  let rentHall = Number(input[0]);
  let priceForStatue = 0.7 * rentHall;
  let priceCatering = 0.85 * priceForStatue;
  let priceSound = priceCatering / 2;

  let allSum = rentHall + priceCatering + priceForStatue + priceSound;
  console.log(allSum.toFixed(2));
}
oscarsCeremony(["3500"]);

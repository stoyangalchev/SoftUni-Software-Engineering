function agencyProfit(input) {
  let company = input.shift();
  let adulltTicketsCount = Number(input.shift());
  let childrenTicketsCount = Number(input.shift());
  let adultPrice = Number(input.shift());
  let childrenPrice = adultPrice * 0.3;
  let tax = Number(input.shift());

  let ticketsAdult = adultPrice + tax;
  let ticketsChildren = childrenPrice + tax;

  let allSum =
    ticketsAdult * adulltTicketsCount + childrenTicketsCount * ticketsChildren;
  let finalSum = allSum * 0.2;
  console.log(
    `The profit of your agency from ${company} tickets is ${finalSum.toFixed(
      2
    )} lv.`
  );
}
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);

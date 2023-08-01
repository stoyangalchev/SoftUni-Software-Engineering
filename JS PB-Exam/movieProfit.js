function movieProfit(input) {
  let nameMovie = input[0];
  let countDays = Number(input[1]);
  let ticketcount = Number(input[2]);
  let priceTicket = Number(input[3]);
  let percentForCinema = Number(input[4]);

  let ticketPriceDay = ticketcount * priceTicket;
  let allPeriodTickets = ticketPriceDay * countDays;
  let percenttaken = (allPeriodTickets * percentForCinema) / 100;
  let moneyLeft = allPeriodTickets - percenttaken;
  console.log(`The profit from the movie ${nameMovie} is ${moneyLeft.toFixed(2)} lv.`);
}
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])


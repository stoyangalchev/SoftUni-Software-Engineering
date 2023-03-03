function filmPremiere(input) {
  let movie = input[0];
  let drink = input[1];
  let countTickets = Number(input[2]);
  let finalSum = 0;
  switch (movie) {
    case "John Wick":
      {
        if (drink === "Drink") {
          finalSum += countTickets * 12;
        } else if (drink === "Popcorn") {
          finalSum += countTickets * 15;
        } else if (drink === "Menu") {
          finalSum += countTickets * 19;
        }
      }
      break;
    case "Star Wars":
      {
        if (drink === "Drink") {
          finalSum += countTickets * 18;
        } else if (drink === "Popcorn") {
          finalSum += countTickets * 25;
        } else if (drink === "Menu") {
          finalSum += countTickets * 30;
        }
        if (countTickets >= 4) {
          finalSum *= 0.7;
        }
      }
      break;
    case "Jumanji":
      {
        if (drink === "Drink") {
          finalSum += countTickets * 9;
        } else if (drink === "Popcorn") {
          finalSum += countTickets * 11;
        } else if (drink === "Menu") {
          finalSum += countTickets * 14;
        }
        if (countTickets === 2) {
          finalSum *= 0.85;
        }
      }
      break;
  }
  console.log(`Your bill is ${finalSum.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
"Menu",
"2"])


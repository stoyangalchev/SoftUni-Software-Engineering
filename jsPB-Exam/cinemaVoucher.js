function cinemaVoucher(input) {
  let allMoney = Number(input[0]);
  let index = 1;
  let command = input[index];
  index++;

  sumOfChar = 0;
  let movie = 0;
  let product = 0;
  while (command != "End") {
    let currentBuy = command;
    let length = Number(currentBuy.length);
    if (length > 8) {
      for (let i = 0; i <= 1; i++) {
        let char = currentBuy.charCodeAt(i);
        sumOfChar += char;
      }
      movie++;
      if (sumOfChar >= allMoney) {
        allMoney = Math.abs(allMoney - sumOfChar);
      }
      allMoney = Math.abs(allMoney - sumOfChar);

      command = input[index];
      index++;
    } else {
      for (let i = 0; i < 1; i++) {
        let char = currentBuy.charCodeAt(i);
        sumOfChar += char;
      }
      product++;
      if (sumOfChar >= allMoney) {
        allMoney = Math.abs(allMoney - sumOfChar);
        break;
      }
      allMoney = Math.abs(allMoney - sumOfChar);

      command = input[index];
      index++;
    }
  }
  console.log(movie);
  console.log(product);
}
cinemaVoucher([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);

function solve(input) {
  let tickets = 0;
  let others = 0;

  let index = 0;
  let voucherPrice = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  while (command !== "End") {
    let price = command.charCodeAt(0);
    let isTicket = command.length > 8;

    if (isTicket) {
      price += command.charCodeAt(1);
    }

    if (price > voucherPrice) {
      break;
    }

    voucherPrice -= price;

    if (isTicket) {
      tickets++;
    } else {
      others++;
    }

    command = input[index];
    index++;
  }

  console.log(`${tickets}`);
  console.log(`${others}`);
}
solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);

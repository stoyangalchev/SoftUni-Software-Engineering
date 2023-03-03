function reportSystem(input) {
  let index = 1;
  let sum = Number(input.shift());
  let command = "";
  let num = 0;
  let card = 0;
  let cash = 0;
  let counter = 1;
  let numSum = 0;
  let countCash = 0;
  let countCard = 0;
  while (true) {
    command = input.shift();
    if (command === "End") {
      break;
    }
    num = Number(command);
    counter++;
    if (counter % 2 === 0) {
      if (num > 100) {
        console.log("Error in transaction!");
      } else if (num < 10) {
        console.log(`Product sold!`);
        cash += num;
        numSum += num;
        countCash++;
      } else if (num >= 10 && num <= 100) {
        console.log(`Product sold!`);
        cash += num;
        numSum += num;
        countCash++;
      }
    } else {
      if (num > 100) {
        console.log("Product sold!");
        card += num;
        numSum += num;
        countCard++;
      } else if (num < 10) {
        console.log(`Error in transaction!`);
      } else if (num >= 10 && num <= 100) {
        console.log(`Product sold!`);
        card += num;
        numSum += num;
        countCard++;
      }
    }
    if (numSum >= sum) {
      break;
    }
  }
  if (numSum >= sum) {
    let avarageCash = cash / countCash;
    let avarageCard = card / countCard;

    console.log(`Average CS: ${avarageCash.toFixed(2)}`);
    console.log(`Average CC: ${avarageCard.toFixed(2)}`);
  } else {
    console.log("Failed to collect required money for charity.");
  }
}
reportSystem([600, 86, 150, 98, 227, "End"]);

function coffeeMachine(input) {
  let drink = input.shift();
  let suggar = input.shift();
  let countDrinks = Number(input.shift());

  let espresso = 0;
  let cappuccino = 0;
  let tea = 0;
  let totallSUm = 0;
  let percent = 0;
  let diff = 0;
  let finalResult = 0;
  let diffFInal = 0;
  switch (drink) {
    case "Espresso":
      {
        if (suggar === "Without") {
          espresso = 0.9;
        } else if (suggar === "Normal") {
          espresso = 1;
        } else if (suggar === "Extra") {
          espresso = 1.2;
        }
        totallSUm = espresso * countDrinks; //9
        if (suggar === "Without") {
          percent = totallSUm * 0.35; //3.15
          diff = totallSUm - percent; //5.85
        }
        if (countDrinks >= 5) {
          diffFInal = diff * 0.25; //1.4625
        }
        if (totallSUm > 15) {
          diffFInal = totallSUm * 0.2; //1.4625
        }
        finalResult = diff - diffFInal;
      }
      break;
    case "Cappuccino":
      {
        if (suggar === "Without") {
          cappuccino = 1;
        } else if (suggar === "Normal") {
          cappuccino = 1.2;
        } else if (suggar === "Extra") {
          cappuccino = 1.6;
        }
        totallSUm = cappuccino * countDrinks; //18
        if (suggar === "Without") {
          percent = totallSUm * 0.35; //3.15
          diff = totallSUm - percent; //5.85
        }
        if (totallSUm > 15) {
          diffFInal = totallSUm * 0.2; //1.4625
        }
        finalResult = totallSUm - diffFInal;
      }
      break;
    case "Tea":
      {
        if (suggar === "Without") {
          tea = 0.5;
        } else if (suggar === "Normal") {
          tea = 0.6;
        } else if (suggar === "Extra") {
          tea = 0.7;
        }
        totallSUm = tea * countDrinks; //15.6
        if (suggar === "Without") {
          percent = totallSUm * 0.35; //3.15
          diff = totallSUm - percent; //5.85
        }
        if (totallSUm > 15) {
          diffFInal = diff * 0.2; //1.4625
        }
        finalResult = totallSUm - diffFInal;
      }
      break;
  }
  console.log(
    `You bought ${countDrinks} cups of ${drink} for ${finalResult.toFixed(
      2
    )} lv.`
  );
}
coffeeMachine(["Tea", "Without", "5"]);
///Same Answer but judge not accepted!!!
function coffeeMachine(input) {
  let drinkType = input.shift();
  let sugar = input.shift();
  let drinksCount = Number(input.shift());
  let drinkPrice = 0;

  switch (drinkType) {
    case "Espresso":
      if (sugar === "Without") {
        drinkPrice = drinksCount * 0.9 * 0.65;
      } else if (sugar === "Normal") {
        drinkPrice = drinksCount * 1.0;
      } else if (sugar === "Extra") {
        drinkPrice = drinksCount * 1.2;
      }

      break;
    case "Cappuccino":
      if (sugar === "Without") {
        drinkPrice = drinksCount * 1.0 * 0.65;
      } else if (sugar === "Normal") {
        drinkPrice = drinksCount * 1.2;
      } else if (sugar === "Extra") {
        drinkPrice = drinksCount * 1.6;
      }

      break;
    case "Tea":
      if (sugar === "Without") {
        drinkPrice = drinksCount * 0.5 * 0.65;
      } else if (sugar === "Normal") {
        drinkPrice = drinksCount * 0.6;
      } else if (sugar === "Extra") {
        drinkPrice = drinksCount * 0.7;
      }

      break;
    default:
      break;
  }

  if (drinkType === "Espresso" && drinksCount >= 5) {
    drinkPrice = drinkPrice * 0.75;
  }

  if (drinkPrice > 15) {
    drinkPrice = drinkPrice * 0.8;
  }

  console.log(
    `You bought ${drinksCount} cups of ${drinkType} for ${drinkPrice.toFixed(
      2
    )} lv.`
  );
}
coffeeMachine(["Tea", "Without", "5"]);

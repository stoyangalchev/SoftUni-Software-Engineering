function aluminumJoinery(input) {
  let countWindows = Number(input.shift());
  let modelWindols = input.shift();
  let delivery = input.shift();

  if (countWindows < 10) {
    console.log(`Invalid order`);
    return;
  }
  let price = 0;
  switch (modelWindols) {
    case "90X130":
      {
        price = 110;
        allprice = countWindows * price;

        if (countWindows > 30 && countWindows <= 60) {
          allprice = allprice * 0.95;
        } else if (countWindows > 60 ) {
          allprice = allprice * 0.92;
        }
        if (delivery === "With delivery") {
          allprice += 60;
        }
        if (countWindows > 99) {
          allprice = allprice * 0.96;
        }
      }
      break;
    case "100X150":
      {
        price = 140;
        allprice = countWindows * price;

        if (countWindows > 40 && countWindows <= 80) {
          allprice = allprice * 0.94;
        } else if (countWindows > 80) {
          allprice = allprice * 0.9;
        }
        if (delivery === "With delivery") {
          allprice += 60;
        }
        if (countWindows > 99) {
          allprice = allprice * 0.96;
        }
      }
      break;
    case "130X180":
      {
        price = 190;
        allprice = countWindows * price;

        if (countWindows > 20 && countWindows <= 50) {
          allprice = allprice * 0.93;
        } else if (countWindows > 50) {
          allprice = allprice * 0.88;
        }
        if (delivery === "With delivery") {
          allprice += 60;
        }
        if (countWindows > 99) {
          allprice = allprice * 0.96;
        }
      }
      break;
    case "200X300":
      {
        price = 250;
        allprice = countWindows * price;

        if (countWindows > 25 && countWindows <= 50) {
          allprice = allprice * 0.91;
        } else if (countWindows > 50) {
          allprice = allprice * 0.86;
        }
        if (delivery === "With delivery") {
          allprice += 60;
        }
        if (countWindows > 99) {
          allprice = allprice * 0.96;
        }
      }
      break;
  }
  console.log(`${allprice.toFixed(2)} BGN`);
}
aluminumJoinery(["40", 
"90X130",
"Without delivery"])


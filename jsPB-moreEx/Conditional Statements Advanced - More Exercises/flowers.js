function flowers(input) {
  let chrysanthemus = Number(input[0]);
  let roses = Number(input[1]);
  let tulip = Number(input[2]);
  let season = input[3];
  let holiday = input[4];
  let flowercount = chrysanthemus + tulip + roses;
  let price = 0;

  switch (season) {
    case "Spring":
      {
        price = chrysanthemus * 2 + roses * 4.1 + tulip * 2.5;

        if (tulip > 7) {
          price *= 0.95;
        }
      }
      break;
    case "Summer":
      {
        price = chrysanthemus * 2 + roses * 4.1 + tulip * 2.5;
      }
      break;
    case "Winter":
      {
        price = chrysanthemus * 3.75 + roses * 4.5 + tulip * 4.15;

        if (roses >= 10) {
          price *= 0.9;
        }
      }
      break;
    case "Autumn": {
      price = chrysanthemus * 3.75 + roses * 4.5 + tulip * 4.15;
    }
  }
  if (holiday === "Y") {
    price *= 1.15;
  }
  if (flowercount > 20) {
    price *= 0.8;
  }
  console.log((price + 2).toFixed(2));
}
flowers([3, 10, 9, "Winter", "N"]);

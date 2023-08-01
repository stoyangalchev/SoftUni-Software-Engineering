function schoolCamp(input) {
  let season = input[0];
  let group = input[1];
  let countStudent = Number(input[2]);
  let countNight = Number(input[3]);
  let price = 0;
  let sport = "";
  switch (season) {
    case "Spring":
      {
        if (group === "girls") {
          sport = "Athletics";
          price = countStudent * 7.2 * countNight;
        } else if (group === "boys") {
          sport = "Tennis";
          price = countStudent * 7.2 * countNight;
        } else if (group === "mixed") {
          sport = "Cycling";
          price = countStudent * 9.5 * countNight;
        }
      }
      break;
    case "Autumn":
      {
        if (group === "girls") {
          sport = "Athletics";
          price = countStudent * 7.2 * countNight;
        } else if (group === "boys") {
          sport = "Tennis";
          price = countStudent * 7.2 * countNight;
        } else if (group === "mixed") {
          sport = "Cycling";
          price = countStudent * 9.5 * countNight;
        }
      }
      break;
    case "Winter":
      {
        if (group === "girls") {
          sport = "Gymnastics";
          price = countStudent * 9.6 * countNight;
        } else if (group === "boys") {
          sport = "Judo";
          price = countStudent * 9.6 * countNight;
        } else if (group === "mixed") {
          sport = "Ski";
          price = countStudent * 10 * countNight;
        }
      }
      break;
    case "Summer":
      {
        if (group === "girls") {
          sport = "Volleyball";
          price = countStudent * 15 * countNight;
        } else if (group === "boys") {
          sport = "Football";
          price = countStudent * 15 * countNight;
        } else if (group === "mixed") {
          sport = "Swimming";
          price = countStudent * 20 * countNight;
        }
      }
      break;
  }
  if (countStudent >= 50) {
    price = price - price * 0.5;
    console.log(`${sport} ${price.toFixed(2)} lv.`);
  } else if (countStudent >= 20 && countStudent < 50) {
    price = price - price * 0.15;
    console.log(`${sport} ${price.toFixed(2)} lv.`);
  } else if (countStudent >= 10 && countStudent < 20) {
    price = price - price * 0.05;
    console.log(`${sport} ${price.toFixed(2)} lv.`);
  } else {
    console.log(`${sport} ${price.toFixed(2)} lv.`);
  }
}
schoolCamp(["Spring", "mixed", 17, 14]);

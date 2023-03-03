function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let price = 0;
  let destination = 0;
  let hoc = 0;
  if (budget <= 100) {
    switch (season) {
      case "summer":
        {
          hoc = "Camp";
          destination = "Bulgaria";

          price = budget * 0.3;
        }
        break;
      case "winter":
        {
          hoc = "Hotel";
          destination = "Bulgaria";
          price = budget * 0.7;
        }
        break;
    }
  } else if (budget > 100 && budget <= 1000) {
    switch (season) {
      case "summer":
        {
          hoc = "Camp";
          destination = "Balkans";
          price = budget * 0.4;
        }
        break;
      case "winter":
        {
          hoc = "Hotel";
          destination = "Balkans";
          price = budget * 0.8;
        }
        break;
    }
  } else if (budget >= 1000) {
    switch (season) {
      case "summer":
        {
          hoc = "Hotel";
          destination = "Europe";
          price = budget * 0.9;
        }
        break;
      case "winter":
        {
          hoc = "Hotel";
          destination = "Europe";
          price = budget * 0.9;
        }
        break;
    }
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${hoc} - ${price.toFixed(2)}`);
}

journey(["1500", "summer"]);

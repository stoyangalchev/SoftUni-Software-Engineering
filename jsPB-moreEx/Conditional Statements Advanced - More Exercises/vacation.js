function vacation(input) {
  let budget = Number(input[0]);
  let sesason = input[1];
  let price = 0;
  let place = 0;
  let location = 0;

  switch (sesason) {
    case "Summer":
      {
        if (budget <= 1000) {
          price = budget * 0.65;
          place = "Camp";
          location = "Alaska";
        } else if (budget > 1000 && budget <= 3000) {
          price = budget * 0.8;
          place = "Hut";
          location = "Alaska";
        } else {
          price = budget * 0.9;
          place = "Hotel";
          location = "Alaska";
        }
      }
      break;
    case "Winter": {
      if (budget <= 1000) {
        price = budget * 0.45;
        place = "Camp";
        location = "Morocco";
      } else if (budget > 1000 && budget <= 3000) {
        price = budget * 0.6;
        place = "Hut";
        location = "Morocco";
      } else {
        price = budget * 0.9;
        place = "Hotel";
        location = "Morocco";
      }
    }
  }

  console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation([799.5, "Winter"]);

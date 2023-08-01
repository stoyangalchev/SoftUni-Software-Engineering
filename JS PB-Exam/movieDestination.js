function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = Number(input[3]);
  let price = 0;
  switch (destination) {
    case "Sofia":
      {
        if (season == "Winter") {
          price = days * 17000;
        } else if (season == "Summer") {
          price = days * 12500;
        }
        if (destination === "Sofia") {
          price *= 1.25;
        }
      }
      break;

    case "Dubai":
      {
        if (season == "Winter") {
          price = days * 45000;
        } else if (season == "Summer") {
          price = days * 40000;
        }
        if (destination === "Dubai") {
          price *= 0.70;
        }
      }
      break;
    case "London":
      {
        if (season == "Winter") {
          price = days * 24000;
        } else if (season == "Summer") {
          price = days * 20250;
        }
      }
      break;
  }
  let diff=Math.abs(budget-price)

  if (budget>=price){
    console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
  }else{
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}
movieDestination(["200000",
"London",
"Summer",
"7"])


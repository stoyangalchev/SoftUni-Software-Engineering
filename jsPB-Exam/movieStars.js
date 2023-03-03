function movieStars(input) {
  let budget = Number(input.shift());

  let name = input.shift();
  while (name !== `ACTION`) {
    if (name.length > 15) {
      budget -= (20 / 100) * budget;
    } else {
      let money = Number(input.shift());
      budget -= money;
    }

    if (budget < 0) {
      break;
    }

    name = input.shift();
  }

  if (name === `ACTION`) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}
movieStars([
  "90000",
  "Christian Bale",
  "70000.50",
  "Leonard DiCaprio",
  "Kevin Spacey",
  "24000.99",
]);

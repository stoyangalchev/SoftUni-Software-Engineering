function familyTrip(input) {
  let budget = Number(input.shift());
  let countNight = Number(input.shift());
  let priceNight = Number(input.shift());
  let percentPay = Number(input.shift());

  if (countNight > 7) {
    priceNight = 0.95 * priceNight;
  }
  let sumNight = priceNight * countNight;
  let percentDiff = (budget * percentPay) / 100;

  let finalSum = sumNight + percentDiff;
  let diff = Math.abs(budget - finalSum);
  if (finalSum <= budget) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip(["500", "7", "66", "15"]);

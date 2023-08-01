function balls(input) {
  let numberBalls = Number(input.shift());

  let curentColor = 0;
  let points = 0;

  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let otherColors = 0;
  let dividesFromBlack = 0;

  for (let i = 1; i <= numberBalls; i++) {
    curentColor = input.shift();
    if (curentColor === "red") {
      redBalls++;
      points += 5;
    } else if (curentColor === "orange") {
      orangeBalls++;
      points += 10;
    } else if (curentColor === "yellow") {
      yellowBalls++;
      points += 15;
    } else if (curentColor === "white") {
      whiteBalls++;
      points += 20;
    } else if (curentColor === "black") {
      dividesFromBlack++;
      points = Math.floor(points / 2);
    } else {
      otherColors++;
    }
  }
  console.log(`
  Total points: ${points}
  Red balls: ${redBalls}
  Orange balls: ${orangeBalls}
  Yellow balls: ${yellowBalls}
  White balls: ${whiteBalls}
  Other colors picked: ${otherColors}
  Divides from black balls: ${dividesFromBlack}
  `);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);

function club(input) {
  let target = Number(input[0]);
  let index = 1;
  let comand = input[index];
  let sum = 0;
  let needSum = 0;
  while (comand !== "Party!") {
    comand = input[index];
    let coctailName = input[index++];

    let coctailCount = Number(input[index++]);
    let coctailLength = Number(coctailName.length);
    let sum1 = coctailCount * coctailLength;

    if (sum1 % 2 !== 0) {
      sum += sum1 * 0.75;
    } else {
      sum += coctailCount * coctailLength;
    }
    if (sum >= target) {
      break;
    }
    comand = input[index];
  }
  if (sum >= target) {
    console.log(`Target acquired.`);
    console.log(`Club income - ${sum.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${(target - sum).toFixed(2)} leva more.`);
    console.log(`Club income - ${sum.toFixed(2)} leva.`);
  }
}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);

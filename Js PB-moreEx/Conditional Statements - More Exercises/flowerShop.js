function flowerShop(input) {
  let magnol = Number(input[0]) * 3.25;
  let zumbul = Number(input[1]) * 4;
  let rose = Number(input[2]) * 3.5;
  let cactus = Number(input[3]) * 8;
  let money = Number(input[4]);

  let sum = magnol + zumbul + rose + cactus;
  let tax = sum * 0.95;
  let diff = Math.abs(money - tax);

  if (tax < money) {
    console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
  } else if (tax>=money) {
    console.log(`She is left with ${Math.floor(diff)} leva.`);
  }
}
flowerShop([15, 7, 5, 10, 100]);

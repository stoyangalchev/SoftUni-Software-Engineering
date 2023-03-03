function happyCatParking(input) {
  let day = Number(input.shift());
  let hour = Number(input.shift());
  let tax = 0;
  let days = 0;
  let sum = 0;
  for (let i = 1; i <= day; i++) {
    for (let j = 1; j <= hour; j++) {
      if (i % 2 === 0 && j % 2 !== 0) {
        tax += 2.5;
      } else if (i % 2 !== 0 && j % 2 === 0) {
        tax += 1.25;
      } else {
        tax += 1;
      }
    }
    days++;
    sum += tax;
    console.log(`Day: ${days} - ${tax.toFixed(2)} leva`);
    tax = 0;
  }
  console.log(`Total: ${sum.toFixed(2)} leva`);
}
happyCatParking([5, 2]);

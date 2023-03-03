function secretDoorsLock(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let num3 = Number(input.shift());

  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      for (let j = 2; j <= num2; j++) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
          for (let k = 1; k <= num3; k++) {
            if (k % 2 === 0) {
              console.log(`${i} ${j} ${k}`);
            }
          }
        }
      }
    }
  }
}
secretDoorsLock([3, 5, 5]);

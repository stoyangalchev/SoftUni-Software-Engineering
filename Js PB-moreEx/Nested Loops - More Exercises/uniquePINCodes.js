function uniquePINCodes(input) {
  let num1 = Number(input.shift());
  let num2 = Number(input.shift());
  let num3 = Number(input.shift());

  for (let i = 2; i <= num1; i += 2) {
    for (let j = 2; j <= num2; j++) {
      for (let k = 2; k <= num3; k += 2) {
        if (j == 2 || j == 3 || j == 5 || j == 7) {
          console.log(i + " " + j + " " + k);
        }
      }
    }
  }
}
uniquePINCodes([3, 5, 5]);
